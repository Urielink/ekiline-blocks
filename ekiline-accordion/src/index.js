/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl } from '@wordpress/components';

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
registerBlockType('ekiline-blocks/ekiline-accordion', {

	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	 apiVersion: 2,

	 /**
	  * Parametros de alta.
	  * @see: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/ 
	  */
	 title: __( 'Accordion, full control', 'ekiline-accordion' ),
	 icon: 'menu-alt',
	 description: __( 'Divide your content in accordion mode.', 'ekiline-accordion' ),
	 category: 'design',
	 supports: {
		 anchor: true,
	 },

	 attributes:{
		noStyle: {
			type: 'boolean',
			default: false, // add classname .accordion-flush.
		},
		keepOpen: {
			type: 'boolean',
			default: false, // remove dataset [data-bs-parent].
		},
	},

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,
	edit: ( props ) => {

		const { attributes, setAttributes } = props;

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'group-accordion',
		} );

		return (
			<div { ...blockProps }>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Accordion Params', 'ekiline-accordion' ) } initialOpen={ true }>
					<ToggleControl
							label={ __( 'Clear default style.', 'ekiline-accordion' ) }
							checked={ attributes.noStyle }
							onChange={ ( noStyle ) =>
								setAttributes( { noStyle } )
							}
						/>
					<ToggleControl
						label={ __( 'Keep each item always open.', 'ekiline-accordion' ) }
						checked={ attributes.keepOpen }
						onChange={ ( keepOpen ) =>
							setAttributes( { keepOpen } )
						}
					/>
					</PanelBody>
				</InspectorControls>

				{/* El bloque */}
				<div>hola</div>
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
			className:
				'group-accordion accordion'
				+ ( !attributes.noStyle ? '' : ' accordion-flush' ),
		} );

		return (
			<div { ...blockProps }>

				<div
					data-bs-parent={
						(attributes.keepOpen && attributes.anchor)?attributes.anchor:null
					}
					>
					{__( 'hola', 'ekiline-accordion' )}
				</div>

				<AccordeonBootstrap/>
			</div>
		)

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



 function AccordeonBootstrap(){
	return(
		<div class="accordion" id="accordionExample">
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingOne">
					<button
						class="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne">
						{__( 'Accordion Item #1', 'ekiline-accordion' )}
					</button>
				</h2>
				<div
					id="collapseOne"
					class="accordion-collapse collapse show"
					aria-labelledby="headingOne"
					data-bs-parent="#accordionExample">
					<div class="accordion-body">
						{__( 'Lorem Item Text #1', 'ekiline-accordion' )}
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingTwo">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						{__( 'Accordion Item #2', 'ekiline-accordion' )}
					</button>
				</h2>
				<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						{__( 'Lorem Item Text #2', 'ekiline-accordion' )}
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingThree">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						{__( 'Accordion Item #3', 'ekiline-accordion' )}
					</button>
				</h2>
				<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						{__( 'Lorem Item Text #3', 'ekiline-accordion' )}
					</div>
				</div>
			</div>
		</div>
	)
}

function AccordeonBootstrapItem(){
	return(
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne">
				<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					{__( 'Accordion Item #1', 'ekiline-accordion' )}
				</button>
			</h2>
			<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
				<div class="accordion-body">
					{__( 'Lorem Item Text #1', 'ekiline-accordion' )}
				</div>
			</div>
		</div>
	)
}