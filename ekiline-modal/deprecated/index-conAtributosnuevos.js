/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

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
 *
 * Uso de Lock
 * @ref https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/
 * @ref https://github.com/WordPress/gutenberg/blob/17baf6f33c391daa44daf8b3465f27aba8cf200d/docs/reference-guides/block-api/block-templates.md#individual-block-locking.
 * @ref https://github.com/WordPress/gutenberg/blob/17baf6f33c391daa44daf8b3465f27aba8cf200d/packages/block-editor/src/components/inner-blocks/README.md#templatelock
 *
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
	icon: 'editor-kitchensink',
	description: __( 'Add your content here, then invoque with a link anchor #anchor.', 'ekiline-modal' ),
	category: 'design',
	supports: {
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

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'ekiline-blocks/ekiline-modal-header', 'ekiline-blocks/ekiline-modal-body', 'ekiline-blocks/ekiline-modal-footer' ];
		const CHILD_TEMPLATE = [
			[ 'ekiline-blocks/ekiline-modal-header', {
				lock: {
					remove: false,
					move: true,
				}
			} ],
			[ 'ekiline-blocks/ekiline-modal-body', {
				lock: {
					remove: false,
					move: true,
				}
			} ],
			[ 'ekiline-blocks/ekiline-modal-footer', {
				lock: {
					remove: false,
					move: true,
				}
			} ],

		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'group-modal',
		} );

		/**
		 * Control personalizado: recordatorio
		 */
		function ModalUserRemind(){

			if ( attributes.anchor ){
				return(
					<div class="editor-modal-route has-anchor">
						<pre>
						{ __( 'Hint: include these attributes in links to open or close this modal (advanced).', 'ekiline-modal' ) }
						<br/>
							Open modal: <span>href="{ '#' + attributes.anchor }" data-bs-target="{ '#' + attributes.anchor }" data-bs-toggle="modal"</span>
						<br/>
							Close modal: <span>href="{ '#' + attributes.anchor }" data-bs-dismiss="modal"</span>
						</pre>
					</div>
					)
			}

			return(
				<div class="editor-modal-route">
					{ __( 'Do not forget to add an anchor. ', 'ekiline-modal' )}
				</div>
			)
		}

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
				allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }
					// templateLock="all"
					// templateLock="insert"
				/>
				<ModalUserRemind/>
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
						<ModalGrowBtn/>
						<InnerBlocks.Content />
					</div>
				</div>

			</div>
		);
	},

});

/**
 * - ekiline-modal-header
 */

registerBlockType( 'ekiline-blocks/ekiline-modal-header', {
	title: __( 'Modal header', 'ekiline-modal' ),
	parent: ['ekiline-blocks/ekiline-modal'],
	icon: 'feedback',
	description:__( 'Modal header content. ', 'ekiline-modal' ),
	category: 'design',
	supports: {
		html: false,
		reusable: false,
		multiple: false,
		inserter: true,
	},
	edit: () => {

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph' ];
		// Cargar un preset.
		const CHILD_TEMPLATE = [
			[ 'core/heading', {
				content: __( 'Add modal title', 'ekiline-modal' ),
				level: 4,
			} ],
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'editor-modal-header',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }
					/>
			</div>
		);
	},

	save: () => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className: 'modal-header',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
			</div>
		);
	},

} );


/**
 * - ekiline-modal-body
 */

registerBlockType( 'ekiline-blocks/ekiline-modal-body', {
	title: __( 'Modal body content', 'ekiline-modal' ),
	parent: ['ekiline-blocks/ekiline-modal'],
	icon: 'feedback',
	description:__( 'Modal body content. ', 'ekiline-modal' ),
	category: 'design',
	supports: {
		html: false,
		reusable: false,
		multiple: false,
		inserter: true,
	},
	edit: () => {

		// Cargar un preset.
		const CHILD_TEMPLATE = [
			[ 'core/paragraph', { content: __( 'Add modal content blocks', 'ekiline-modal' ) } ],
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'editor-modal-body',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks
					template={ CHILD_TEMPLATE }
					/>
			</div>
		);
	},

	save: () => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className: 'modal-body',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},

} );


/**
 * - ekiline-modal-footer
 */

 registerBlockType( 'ekiline-blocks/ekiline-modal-footer', {
	title: __( 'Modal footer', 'ekiline-modal' ),
	parent: ['ekiline-blocks/ekiline-modal'],
	icon: 'feedback',
	description:__( 'Inner footer content. ', 'ekiline-modal' ),
	category: 'design',
	supports: {
		html: false,
		reusable: false,
		multiple: false,
		inserter: true,
	},
	edit: () => {

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'core/paragraph', 'core/buttons', 'core/button' ];
		// Cargar un preset.
		const CHILD_TEMPLATE = [
			[ 'core/paragraph', { content: __( 'Add modal footer text', 'ekiline-modal' ) } ],
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'editor-modal-footer',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }
				/>
			</div>
		);
	},

	save: () => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className: 'modal-footer',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},

} );


/**
 * Incorporar bloques a coleccion.
 */
import { registerBlockCollection } from '@wordpress/blocks';
registerBlockCollection( 'ekiline-blocks', {
	title: 'Ekiline Blocks',
	icon: 'layout',
} );


/**
 * Controles auxiliares
 * @see https://mariecomet.fr/en/2021/12/14/adding-options-controls-existing-gutenberg-block/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/toolbar-button/
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
 * genera un nuevo control, general en el panel.
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blockedit
 * genera agregar una nueva clase o atributo.
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blocklistblock
 * nuevo experimento
 * @see https://jeffreycarandang.com/extending-gutenberg-core-blocks-with-custom-attributes-and-controls/
 * nuevo, LinkControl.
 * @see https://wp-gb.com/linkcontrol/
 * prueba, como formato extra
 * @see https://developer.wordpress.org/block-editor/how-to-guides/format-api/
 * Este ejemplo trae parametros que no estan en la doc.
 * @see https://jeffreycarandang.com/how-to-create-custom-text-formats-for-gutenberg-block-editor/
 */

/**
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

function ConditionalButton( { isActive, onChange, value } ) {
	
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	if ( selectedBlock && selectedBlock.name !== ( 'core/button' || 'core/buttons' ) ) {
		return null;
	}

	return (
		<RichTextToolbarButton
			icon="editor-code"
			title="Open modal link"
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'ekiline-custom-format/open-modal-link',
						attributes: {
							// style: 'text-decoration: underline;',
							'data-bs-toggle' : 'modal',
							'data-bs-target' : '#link',
							'type' : 'button',
						},
					} )
				);
			} }
			isActive={ isActive }
		/>
	);
}

registerFormatType( 'ekiline-custom-format/open-modal-link', {
	title: 'Open modal link',
	tagName: 'samp',
	className: null,
	attributes: {
		// style: 'style',
		'data-bs-toggle' : null,
		'data-bs-target' : null,
		'type' : null,
	},
	edit: ConditionalButton,
} );
**/



/// Mejorado.
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';


function ConditionalButton( { isActive, onChange, value } ) {

	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	// Permitir más bloques.
	// if ( selectedBlock && selectedBlock.name !== 'core/paragraph' ) {
	// 	return null;
	// }

	// console.log(selectedBlock.name)

	const allowedBlocks = [ 'core/paragraph', 'core/button' ];

	if ( selectedBlock && !allowedBlocks.includes( selectedBlock.name ) ) {
		return null;
	}

	return (
		<RichTextToolbarButton
			icon="editor-code"
			title="Open modal link"
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'ekiline-custom-format/open-modal-link',
						attributes: {
							// style: 'text-decoration: underline;',
							'data-bs-toggle' : 'modal',
							'data-bs-target' : '#link',
							'type' : 'button',
						},
					} )
				);
			} }
			isActive={ isActive }
		/>
	);
}

registerFormatType( 'ekiline-custom-format/open-modal-link', {
	title: 'Open modal link',
	tagName: 'button',
	className: null,
	attributes: {
		// style: 'style',
		'data-bs-toggle' : null,
		'data-bs-target' : null,
		'type' : null,
	},
	edit: ConditionalButton,
} );

