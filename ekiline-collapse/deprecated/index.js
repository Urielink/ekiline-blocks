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
 * 
 * Bloques necesarios para collapse.
 * - button/a: {data-bs-toggle:collapse, href:#id}
 * - .collapse, #id
 * - ó -
 * - div:{min-height}
 * - collapse, #id
 * - div:{width:opcional}
 */
registerBlockType('ekiline-blocks/ekiline-collapse', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	 apiVersion: 2,

	 /**
	  * Parametros de alta.
	  * @see: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/ 
	  */
	 title: __( 'Collapse, full control', 'ekiline-collapse' ),
	 icon: 'editor-kitchensink',
	 description: __( 'Set a collapse behavior block.', 'ekiline-collapse' ),
	 category: 'design',
	 supports: {
		 anchor: true,
	 },
 
	 /**
	  * Argumentos para personalizacion.
	  */
	 attributes:{
		 horizontal: {
			 type: 'boolean',
			 default: false, // set horizontal (.collapse-horizontal).
		 },
	 },
 
	 /**
	  * @see ./edit.js
	  */
	 // edit: Edit,
	 edit:(props)=>{

		const { attributes, setAttributes } = props;
		// const PARENT_ALLOWED_BLOCKS = [ 'core/buttons' ];
		const CHILD_TEMPLATE = [
			[ 'core/buttons', { 'justifyItems' : 'center' },
				[
					[ 'core/button', { text: __( 'Button title', 'ekiline-collapse' ) } ]
				],
			],
			[ 'core/paragraph', { content: __( 'Add your content', 'ekiline-collapse' ) } ]
		];

		const blockProps = useBlockProps( {
			className: 'group-collapse'
			+ (attributes.horizontal) ? '-horizontal' : '',
		} );

		return (
			<div {...blockProps}>
				{/* Inspector controles */}
				<InspectorControls>
					<PanelBody title={ __( 'Collapse Params', 'ekiline-collapse' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Horizontal collapse', 'ekiline-collapse' ) }
						checked={ attributes.horizontal }
						onChange={ ( horizontal ) =>
							setAttributes( { horizontal } )
						}
					/>
					</PanelBody>
				</InspectorControls>
				{/* <button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample">
					Button with data-bs-target
				</button>
				<div class="collapse" id="collapseExample">
					{__(
						'Ekiline Collapse – hello from the saved content!',
						'ekiline-collapse'
					)}
					<InnerBlocks/>
				</div> */}
					<InnerBlocks
					// allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }
					/>
			</div>
		);
	 },

	/**
	 * @see ./save.js
	 */
	// save,
	 save:( { attributes } )=>{

		const blockProps = useBlockProps.save( {
			className: 'collapse' 
			+ (attributes.horizontal) ? '-horizontal' : '',
		} );

		return (
			<div { ...blockProps }>

				{/* <button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseWidthExample">
					Button with data-bs-target
				</button>
				<div style={{'min-height':'120px'}}>
					<div class="collapse collapse-horizontal" id="collapseWidthExample">
						<div style={{'width': '300px'}}>
						{__(
								'Ekiline Collapse – hello from the editor!',
								'ekiline-collapse'
						)}
						<InnerBlocks.Content />
						</div>
					</div>
				</div> */}
				<div className={attributes.className} >
					<InnerBlocks.Content />
				</div>

			</div>
		);
	 },
});
