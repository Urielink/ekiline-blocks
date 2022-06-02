/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';

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
 */
// import Edit from './edit';
// import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * Bloques necesarios:
 * - .progress + style:{height:val}
 * - - .progress-bar acumulable.
 * - - .progress-bar + bg-* + progress-bar-striped + progress-bar-animated
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('ekiline-blocks/ekiline-progress', {

	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	 apiVersion: 2,

	 /**
	  * Parametros de alta.
	  * @see: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/ 
	  */
	  title: __( 'Ekiline progress, full control', 'ekiline-progress' ),
	  icon: 'menu-alt',
	  description: __( 'Show a bootstrap progress bar for your data.', 'ekiline-progress' ),
	  category: 'design',
	  supports: {
		  anchor: true,
	  },
	  attributes:{
		progHeight: {
			type: 'number',
			default: 50, // Alto de barra, 0 a 100px.
		},
	 },

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,
	edit: ( props ) => {

		const { attributes, setAttributes } = props;

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'ekiline-blocks/ekiline-progress-item' ];
		const CHILD_TEMPLATE = [ [ 'ekiline-blocks/ekiline-progress-item' ] ];

		// Personalizar clase.
		const blockProps = useBlockProps( {
			className: 'group-progress bg-dark',
			style:{
				height: ( !attributes.progHeight ? 1 : attributes.progHeight )
			}
		} );

		// Valores item.
		const viewblockProps = useBlockProps( {
			// className: 'progress',
			// style:{
			// 	height: ( !attributes.progHeight ? 1 : attributes.progHeight )
			// }
		} );

		return (
			<div { ...blockProps }>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Progress bar Settings', 'ekiline-progress' ) } initialOpen={ true }>
						<TextControl
							label={ __( 'Height bar (pixels)', 'ekiline-progress' ) }
							type="number"
							value={ attributes.progHeight }
							onChange={ ( newval ) =>
								setAttributes( { progHeight: parseInt( newval ) } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				{/* El bloque */}
				{/* <div { ...viewblockProps }> */}
					<InnerBlocks
						orientation="horizontal"
						allowedBlocks={ PARENT_ALLOWED_BLOCKS }
						template={ CHILD_TEMPLATE }/>
				{/* </div> */}
			</div>
		)
	},

	/**
	 * @see ./save.js
	 */
	// save,
	save: ( { attributes } ) => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className: 'progress',
			style:{
				height: ( !attributes.progHeight ? 1 : attributes.progHeight )
			}
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		)

	},

});

/**
 * Bloque interno
 */
 registerBlockType('ekiline-blocks/ekiline-progress-item', {
	  title: __( 'Progress data bar', 'ekiline-progress' ),
	  parent: ['ekiline-blocks/ekiline-progress'],
	  icon: 'menu-alt',
	  description: __( 'Progress data, could be multiple bars between 1 to 100.', 'ekiline-progress' ),
	  category: 'design',
	  supports: {
		  anchor: false,
	  },
	  attributes:{
		progRange: {
			type: 'number',
			default: 70, // Rango o contador, 0 a 100 int.
		},
		progLabel: {
			type: 'boolean',
			default: false, // Mostrar texto.
		},
		progStripes: {
			type: 'boolean',
			default: false, // Mostrar rayas + progress-bar-striped.
		},
		progAnimation: {
			type: 'boolean',
			default: false, // Animar rayas + progress-bar-animated.
		},
	 },

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,
	edit: ( props ) => {

		const { attributes, setAttributes } = props;

		// Personalizar clase.
		const blockProps = useBlockProps( {
			className: 'item-progress bg-primary',
			style:{
				width: ( !attributes.progRange ? '1%' : attributes.progRange )+'%',
			},
		} );

		// Valores item.
		const viewblockProps = useBlockProps( {
			// className: 'progress-bar m-0',
			style:{
				width: ( !attributes.progRange ? '1%' : attributes.progRange )+'%',
				// margin: '0px !important',
			},
			// role:'progressbar',
		} );

		return (
			<div { ...blockProps } >
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Progress bar Settings', 'ekiline-progress' ) } initialOpen={ true }>
						<TextControl
							label={ __( 'Data range min 1% max 100%', 'ekiline-progress' ) }
							type="number"
							value={ attributes.progRange }
							onChange={ ( newval ) =>
								setAttributes( { progRange: parseInt( newval ) } )
							}
							min="0"
							max="100"
						/>
						<ToggleControl
							label={ __( 'Hide number in bar.', 'ekiline-progress' ) }
							checked={ attributes.progLabel }
							onChange={ ( progLabel ) =>
								setAttributes( { progLabel } )
							}
						/>
						<ToggleControl
							label={ __( 'Show stripes over background.', 'ekiline-progress' ) }
							checked={ attributes.progStripes }
							onChange={ ( progStripes ) =>
								setAttributes( { progStripes } )
							}
						/>
						<ToggleControl
							label={ __( 'Show animation.', 'ekiline-progress' ) }
							checked={ attributes.progAnimation }
							onChange={ ( progAnimation ) =>
								setAttributes( { progAnimation } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				{/* El bloque */}
				{/* <div {...viewblockProps}
					// aria-valuenow="10" 
					// aria-valuemin="0" 
					// aria-valuemax="100"
				> */}
					{ (!attributes.progLabel) ? attributes.progRange : null }
				{/* </div> */}
			</div>
		)
	},

	/**
	 * @see ./save.js
	 */
	// save,
	save: ( { attributes } ) => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className: 'progress-bar',
			style:{
				width: ( !attributes.progRange ? '1%' : attributes.progRange + '%' ),
			},
		} );

		function setClassNames(){
			const addName = 'progress-bar';
			if ( attributes.progStripes ){
				addName += ' progress-bar-striped';
			}
			if ( attributes.progAnimation ){
				addName += ' progress-bar-animated';
			}
			return (addName);
		}

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		)

	},

});
