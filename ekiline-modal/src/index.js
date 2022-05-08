/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// ToolbarGroup,
	// ToolbarItem,
	// Button,
	// TextControl,
	// RangeControl,
} from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 * - Reemplazadas, necesidad de anidar mas bloques.
 */
// import Edit from './edit';
// import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 *
 * Bloques necesarios para modal.
 * .modal-widget-group
 * - .modal-widget-link-button
 * - .modal
 * - - .modal-dialog
 * - - - .modal-content
 * - - - - .modal-header, modal-title, btn-close
 * - - - - .modal-body, [bloques]
 * - - - - .modal-footer, btn-close, [bloques]
 *
 * Variables:
 * - staticBackdrop = data-bs-backdrop="static"
 * - longcontent = .modal-dialog-scrollable
 * - centrado = modal-dialog-centered
 * - size = modal-xl, modal-lg, modal-sm, modal-fullscreen
 *
 * Referencias para anidado.
 * @ref https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/
 *
 * No mostrar en inspector.
 * @ref https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/
 */
registerBlockType('ekiline-blocks/ekiline-modal', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * Parametros de alta.
	 * @see: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/ 
	 */
	title: __( 'Modal group, full control', 'ekiline-modal' ),
	// parent: ['ekiline-blocks/ekiline-tabs'], // no parent.
	icon: 'editor-kitchensink',
	description: __( 'Add your content here, then invoque with a link.', 'ekiline-modal' ),
	category: 'design',
	supports: {
		// html: true,
		// reusable: true,
		// multiple: true,
		// inserter: true,
		anchor: true,
	},

	/**
	 * Argumentos para personalizacion.
	 */
	attributes:{
		modalShow: {
			type: 'string',
			default: 'default', // top, right, bottom, left.
		},
		modalSize: {
			type: 'string',
			default: 'default', // small, large, extralarge, fullwindow.
		},
		modalAlign: {
			type: 'boolean',
			default: true, // center.
		},
		modalHeader: {
			type: 'boolean',
			default: false,
		},
		modalFooter: {
			type: 'boolean',
			default: false,
		},
		modalBackdrop: {
			type: 'boolean',
			default: true, // cerrar modal dando clic fuera.
		},
		modalKeyboard: {
			type: 'boolean',
			default: true, // cerrar modal con teclado.
		},
		modalGrow: {
			type: 'boolean',
			default: false,
		},
		modalTime: {
			type: 'number',
			default: '5000',
		},
	},

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,
	edit: (props) => {

		const { attributes, setAttributes } = props;

		// Cargar un preset.
		const CHILD_TEMPLATE = [
			[ 'core/paragraph', { content: __( 'Add your content and blocks', 'ekiline-tabs' ) } ],
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			// className: 'group-modal',
		} );

		return (
			<div { ...blockProps }>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Modal Params', 'ekiline-modal' ) } initialOpen={ true }>

					<SelectControl
						label={ __( 'Rise modal', 'ekiline-modal' ) }
						value={ attributes.modalShow }
						options={ [
							{ label: __( 'Default', 'ekiline-modal' ), value: '' },
							{ label: __( 'Right', 'ekiline-modal' ), value: ' right-aside' },
							{ label: __( 'Bottom', 'ekiline-modal' ), value: ' move-from-bottom' },
							{ label: __( 'Left', 'ekiline-modal' ), value: ' left-aside' },
						] }
						onChange={ ( modalShow ) =>
							setAttributes( { modalShow } )
						}
					/>

					<SelectControl
						label={ __( 'Size modal', 'ekiline-modal' ) }
						value={ attributes.modalSize }
						options={ [
							{ label: __( 'Default', 'ekiline-modal' ), value: '' },
							{ label: __( 'Small', 'ekiline-modal' ), value: ' modal-sm' },
							{ label: __( 'Large', 'ekiline-modal' ), value: ' modal-lg' },
							{ label: __( 'Extra Large', 'ekiline-modal' ), value: ' modal-xl' },
							{ label: __( 'Full window', 'ekiline-modal' ), value: ' modal-fullscreen' },
						] }
						onChange={ ( modalSize ) =>
							setAttributes( { modalSize } )
						}
					/>

					<ToggleControl
						label={ __( 'Center in window', 'ekiline-modal' ) }
						checked={ attributes.modalAlign }
						onChange={ ( modalAlign ) =>
							setAttributes( { modalAlign } )
						}
					/>
					<ToggleControl
						label={ __( 'Hide header', 'ekiline-modal' ) }
						checked={ attributes.modalHeader }
						onChange={ ( modalHeader ) =>
							setAttributes( { modalHeader } )
						}
					/>
					<ToggleControl
						label={ __( 'Hide footer', 'ekiline-modal' ) }
						checked={ attributes.modalFooter }
						onChange={ ( modalFooter ) =>
							setAttributes( { modalFooter } )
						}
					/>
					<ToggleControl
						label={ __( 'Enable background click to close', 'ekiline-modal' ) }
						checked={ attributes.modalBackdrop }
						onChange={ ( modalBackdrop ) =>
							setAttributes( { modalBackdrop } )
						}
					/>
					<ToggleControl
						label={ __( 'Enable ESC key to close', 'ekiline-modal' ) }
						checked={ attributes.modalKeyboard }
						onChange={ ( modalKeyboard ) =>
							setAttributes( { modalKeyboard } )
						}
					/>
					<ToggleControl
						label={ __( 'Show resize modal button', 'ekiline-modal' ) }
						checked={ attributes.modalGrow }
						onChange={ ( modalGrow ) =>
							setAttributes( { modalGrow } )
						}
					/>

					</PanelBody>
				</InspectorControls>

				{/* El bloque */}
				<InnerBlocks
					template={ CHILD_TEMPLATE }/>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	// save,
	save: ( { attributes } ) => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className:
				'group-modal modal fade'
				+ ( attributes.modalShow != 'default' ? attributes.modalShow : '' )
			,
			'data-bs-backdrop' : attributes.modalBackdrop,
			'data-bs-keyboard' : attributes.modalKeyboard,
		} );

		const dialogProps = useBlockProps.save({
			className:
			'modal-dialog'
			+ ( attributes.modalAlign ? ' modal-dialog-centered' : '' )
			+ ( attributes.modalSize != 'default' ? attributes.modalSize : '' )
			,
		});

		const headerProps = useBlockProps.save({
			className:
				'modal-header'
				+ ( attributes.modalHeader ? ' visually-hidden' : '' )
				,
		});
		const footerProps = useBlockProps.save({
			className:
				'modal-footer'
				+ ( attributes.modalFooter ? ' visually-hidden' : '' )
				,
		});

	// Componente Boton.
		function ModalGrowBtn() {
			if ( attributes.modalGrow ) {
				return (
					<button
						type="button"
						class="modal-resize btn btn-sm btn-outline-secondary"
						aria-label={__( 'play btn', 'ekiline-modal' )}>
							<span class="dashicons dashicons-editor-expand"></span>
					</button>
				)
			}
		}


		return (
			<div
				{ ...blockProps }
				tabindex="-1"
				role="dialog"
				aria-labelledby={ blockProps.id + 'Label' }
				aria-hidden="true"
			>
				<div class={dialogProps.className}>
					<div class="modal-content">

						<div class={headerProps.className}>
							<h5 class="modal-title" id={ blockProps.id + 'Title' }>Modal title</h5>
							<ModalGrowBtn/>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>

						<div class="modal-body">

						<InnerBlocks.Content />

						</div>
						<div class={footerProps.className}>
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" class="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>

			</div>
		);
	},

});


/**
 * Incorporar bloques a coleccion.
 */
import { registerBlockCollection } from '@wordpress/blocks';
registerBlockCollection( 'ekiline-blocks', {
	title: 'Ekiline Blocks',
	icon: 'layout',
} );