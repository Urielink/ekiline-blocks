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
 * Bloques necesarios para acordion.
 * - .accordion
 * - - .accordion-item
 * - - - .accordion-header
 * - - - - .accordion-button / [ RichText ]
 * - - - .accordion-collapse collapse / show
 * - - - - .accordion-body [bloques]
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
	 title: __( 'Ekiline Accordion, full control', 'ekiline-accordion' ),
	 icon: 'menu-alt',
	 description: __( 'Show your content as an accordion.', 'ekiline-accordion' ),
	 category: 'design',
	 supports: {
		 anchor: true,
	 },
	 attributes:{
		noStyle: {
			type: 'boolean',
			default: false, // add classname .accordion-flush.
		},
	},

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,
	edit: ( props ) => {

		const { attributes, setAttributes } = props;

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'ekiline-blocks/ekiline-accordion-item' ];
		const CHILD_TEMPLATE = [
			[ 'ekiline-blocks/ekiline-accordion-item' ],
			[ 'ekiline-blocks/ekiline-accordion-item' ],
			[ 'ekiline-blocks/ekiline-accordion-item' ]
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'group-accordion',
		} );

		return (
			<div { ...blockProps }>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Accordion Settings', 'ekiline-accordion' ) } initialOpen={ true }>
						<ToggleControl
							label={ __( 'Clear style.', 'ekiline-accordion' ) }
							checked={ attributes.noStyle }
							onChange={ ( noStyle ) =>
								setAttributes( { noStyle } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				{/* El bloque */}
				<InnerBlocks
					allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }/>
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
			className: ( !attributes.noStyle ? 'accordion' : 'accordion accordion-flush' ),
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

registerBlockType('ekiline-blocks/ekiline-accordion-item', {

	 title: __( 'Accordion item', 'ekiline-accordion' ),
	 parent: ['ekiline-blocks/ekiline-accordion'],
	 icon: 'menu-alt',
	 description: __( 'Set tittle and content in your accordion container', 'ekiline-accordion' ),
	 category: 'design',
	 supports: {
		anchor: true,
		html: false,
		reusable: false,
		// multiple: false,
		// inserter: false,
	},
	 attributes:{
		showDefault: {
			type: 'boolean',
			default: false, // remove dataset [data-bs-parent].
		},
		keepOpen: {
			type: 'boolean',
			default: false, // remove dataset [data-bs-parent].
		},
		parentId: {
			type: 'string',
			default: '', // retrive parent Id (Anchor).
		},
        content: {
            type: 'string',
            source: 'html',
            selector: 'button',
			default: __( 'Item title.', 'ekiline-accordion' ),
        },
	},

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,
	edit: ( props ) => {

		const { attributes, setAttributes } = props;

		// Cargar un preset.
		const CHILD_TEMPLATE = [
			[ 'core/paragraph', { content: __( 'Item content.', 'ekiline-accordion' ) } ],
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'child-item-accordion',
		} );

		return (
			<div { ...blockProps }>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Accordion Item Params', 'ekiline-accordion' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Parent Anchor', 'ekiline-accordion' ) }
						value={ attributes.parentId }
						onChange={ ( newval ) =>
							setAttributes( { parentId: newval } )
						}
					/>
					<ToggleControl
						label={ __( 'Keep item always open.', 'ekiline-accordion' ) }
						checked={ attributes.keepOpen }
						onChange={ ( keepOpen ) =>
							setAttributes( { keepOpen } )
						}
					/>
					<ToggleControl
						label={ __( 'Show default.', 'ekiline-accordion' ) }
						checked={ attributes.showDefault }
						onChange={ ( showDefault ) =>
							setAttributes( { showDefault } )
						}
					/>
					</PanelBody>
				</InspectorControls>

				{/* El bloque */}
				<RichText
					withoutInteractiveFormatting={ true }
					allowedFormats={ ['core/bold', 'core/italic', 'core/image', 'core/align' ] } //Formatos de texto.
					tagName="p" // The tag here is the element output and editable in the admin
					className={ 'item-title' }
					value={ attributes.content } // Any existing content, either from the database or an attribute default
					onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
					placeholder={ __( 'Accordion Title', 'ekiline-accordion' ) } // Display this text before any content has been added by the user
				/>
				<InnerBlocks
					template={ CHILD_TEMPLATE }/>
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
			className: 'accordion-item',
		} );

		const itemBlockProps = useBlockProps.save( {
			headingId: 'heading' + blockProps.id,
			itemId: 'item' + blockProps.id,
			itemClassName: ( !attributes.showDefault ? 'accordion-collapse collapse' : 'accordion-collapse collapse show' ),
		} );

		return (
			<div { ...blockProps }>
				{/* <h2 class="accordion-header" id="headingOne"> */}
				<h2 class="accordion-header"
					id={ itemBlockProps.headingId }
				>
					<RichText.Content
						tagName="button"
						className={ 'accordion-button' }
						type="button"
						value={ attributes.content }
						data-bs-toggle="collapse"
						// data-bs-target="#collapseOne" //el div del contenido.
						data-bs-target={ '#' + itemBlockProps.itemId } //el div del contenido.
						// aria-expanded="true"
						// aria-controls="collapseOne"
					/>
				</h2>
				<div
					// id="collapseOne"
					id={ itemBlockProps.itemId }
					// class="accordion-collapse collapse show"
					className={ itemBlockProps.itemClassName }
					// aria-labelledby="headingOne"
					data-bs-parent={ (attributes.keepOpen && attributes.parentId)?'#' + attributes.parentId:null }
				>
					<InnerBlocks.Content />
				</div>
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