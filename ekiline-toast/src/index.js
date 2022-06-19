/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';
 import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
 import { PanelBody, ToggleControl } from '@wordpress/components';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'ekiline-blocks/ekiline-toast', {

	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	 apiVersion: 2,

	 /**
	  * Parametros de alta.
	  * @see: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/ 
	  */
	 title: __( 'Ekiline toast, full control', 'ekiline-toast' ),
	 icon: 'lightbulb',
	 description: __( 'Show little advices as bootstrap style.', 'ekiline-toast' ),
	 category: 'design',
	 supports: {
		 anchor: true,
	 },
 
	 /**
	  * Argumentos para personalizacion.
	  */
	 attributes:{
		 toastPosition: {
			 type: 'boolean',
			 default: false,
		 },
	 },

	 /**
	  * @see ./edit.js
	  */
	 // edit: Edit,
	 edit:(props)=>{

		const { attributes, setAttributes } = props;

		const blockProps = useBlockProps( {
			className: 'group-toast',
		} );

		return (
			<div {...blockProps}>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Toast Params', 'ekiline-toast' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Toast position', 'ekiline-toast' ) }
						checked={ attributes.toastPosition }
						onChange={ ( toastPosition ) =>
							setAttributes( { toastPosition } )
						}
					/>
					</PanelBody>
				</InspectorControls>
				{/* Contenido */}
				<InnerBlocks/>
			</div>
		);
	 },

	/**
	 * @see ./save.js
	 */
	// save,
	 save:( { attributes } )=>{

		const blockProps = useBlockProps.save( {
			className: 'toast',
			style: {
				'min-height': ( ( attributes.toastPosition ) ? '300px' : null ),
			},
		} );

		// Condicion para crear envoltorio.
		function ToastWrapper(){
			if (attributes.toastPosition){
				return (
					<div style={ (attributes.toastPosition)?blockProps.contentStyle:null }>
						<InnerBlocks.Content/>
					</div>
				);
			} else {
				return(
					<InnerBlocks.Content/>
				)
			}
		}

		return (
				<div { ...blockProps }>
					<div class="toast-header">
						{/* <img src="..." class="rounded me-2" alt="..."> */}
						<strong class="me-auto">Bootstrap</strong>
						<small>11 mins ago</small>
						<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
					</div>
					<div class="toast-body">
						<InnerBlocks.Content/>
					</div>
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