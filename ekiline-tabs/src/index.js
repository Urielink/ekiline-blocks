/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'ekiline-blocks/ekiline-tabs', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );

/**
 * Bloques necesarios para tabs.
 * tabs-wrapper
 * - tabs-navbar
 * - - tab-link
 * - tabs-container
 * - - tab-content
 * Docs: 
 * Anidado.
 * @ref https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/
 * No mostrar en inspector.
 * @ref https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/
 */
 registerBlockType( 'ekiline-blocks/ekiline-tabs-wrapper', {
    title: __( 'Bloque con tabs', 'ekiline-tabs' ),
	// parent: ['ekiline-blocks/ekiline-tabs'],
    icon: 'table-row-after',
	description: __( 'Envoltorio tabs.', 'ekiline-tabs' ),
	category: 'design',
	supports: {
		inserter: true,
		anchor: true,
		align: [ 'wide', 'full' ],
		html: false,
		color: {
			background: true,
		},
	},

    edit: () => {

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'ekiline-blocks/ekiline-tabs-navbar', 'ekiline-blocks/ekiline-tabs-container' ];
		const CHILD_TEMPLATE = [
			[ 'ekiline-blocks/ekiline-tabs-navbar' ],
			[ 'ekiline-blocks/ekiline-tabs-container' ]
		];
		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'tabs-wrapper',
		} );

        return (
            <div { ...blockProps }>
                <InnerBlocks
					allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }/>
            </div>
        );
    },
    save: () => {

		// personalizar clase
		const blockProps = useBlockProps.save( {
			className: 'tabs-wrapper',
		} );

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

/**
 * tabs-navbar
 */

registerBlockType( 'ekiline-blocks/ekiline-tabs-navbar', {
    title: __( 'Navegador de tabs', 'ekiline-tabs' ),
	parent: ['ekiline-blocks/ekiline-tabs-wrapper'],
    icon: 'editor-kitchensink',
	description: __( 'Navegacion tabs.', 'ekiline-tabs' ),
	category: 'design',
	supports: {
		html: false,
		reusable: false,
		multiple: false,
		inserter: false,
	},
	// Register block styles.
	// styles: [
	// 	{
	// 		name: 'nav-pills',
	// 		label: __( 'Pills' ),
	// 		isDefault: true,
	// 		className: 'nav-pills',
	// 	},
	// 	{
	// 		name: 'nav-tabs',
	// 		label: __( 'Tabs' ),
	// 		className: 'nav-tabs',
	// 	},
	// ],

    edit: () => {

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'ekiline-blocks/ekiline-tab-link' ];
		const CHILD_TEMPLATE = [ [ 'ekiline-blocks/ekiline-tab-link' ], [ 'ekiline-blocks/ekiline-tab-link' ], ];

		const blockProps = useBlockProps( {
			className: 'tabs-navbar',
		} );

        return (
            <div { ...blockProps }>
                <InnerBlocks
					allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }/>
            </div>
        );
    },
    save: () => {

		// personalizar clase
		const blockProps = useBlockProps.save( {
			className: 'tabs-navbar nav',
		} );

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

/**
 * - - tab-link
 */
import { RichText } from '@wordpress/block-editor';
registerBlockType( 'ekiline-blocks/ekiline-tab-link', {
    title: __( 'link de tabs', 'ekiline-tabs' ),
	parent: ['ekiline-blocks/ekiline-tabs-navbar'],
    icon: 'button',
	description: __( 'Boton navegacion tabs.', 'ekiline-tabs' ),
	category: 'design',
	supports: {
		html: false,
		reusable: false,
		// inserter: false,
		color: {
			background: true,
		},
	},
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'button',
			default: __( 'Tab link', 'ekiline-tabs' ),
        },
    },

    edit: ( { attributes, setAttributes } ) => {

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'tab-link',
		} );

        return (
            <RichText
				withoutInteractiveFormatting={ true }
				allowedFormats={ ['core/bold', 'core/italic', 'core/image', 'core/align'] }
                tagName="p" // The tag here is the element output and editable in the admin
                className={ blockProps.className }
                value={ attributes.content } // Any existing content, either from the database or an attribute default
                onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
                // placeholder={ __( 'Titlulo de tab...' ) } // Display this text before any content has been added by the user
            />
        );
    },
    save: ( { attributes } ) => {

		// personalizar clase
		const blockProps = useBlockProps.save( {
			className: 'tab-link nav-link',
		} );

		// limpiar tambien caracteres especiales. anchor + replace/lowercase.
		// https://ricardometring.com/javascript-replace-special-characters
		const replaceSpecialChars = (str) => {
			return str.normalize('NFD').replace(/(<([^>]+)>)/gi, "") // Eliminar HTML
				.replace(/[\u0300-\u036f]/g, '') // Remove accents
				.replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
				.replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
				.replace(/(^-+|-+$)/, '') // Remove extra hyphens from beginning or end of the string
				.toLowerCase(); // convierte a minusculas
		}
		const linkToTab = '#' + replaceSpecialChars( attributes.content );

		return (
			<RichText.Content
				tagName="button"
				className={ blockProps.className }
				value={ attributes.content }
				data-bs-toggle="pill"
				data-bs-target={ linkToTab }
				type="button"
			/>
		)

    },
} );

/**
 * - tabs-container
 */

 registerBlockType( 'ekiline-blocks/ekiline-tabs-container', {
    title: __( 'Contenedor de tabs', 'ekiline-tabs' ),
	parent: ['ekiline-blocks/ekiline-tabs-wrapper'],
    icon: 'editor-kitchensink',
	description: __( 'Aqui se acumulan las tabs.', 'ekiline-tabs' ),
	category: 'design',
	supports: {
		html: false,
		reusable: false,
		multiple: false,
		inserter: false,
	},

    edit: () => {

		// Restringir los bloques, Cargar un preset.
		const PARENT_ALLOWED_BLOCKS = [ 'ekiline-blocks/ekiline-tab-content' ];
		const CHILD_TEMPLATE = [ [ 'ekiline-blocks/ekiline-tab-content' ], [ 'ekiline-blocks/ekiline-tab-content' ], ];
		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'tabs-container',
		} );

        return (
            <div { ...blockProps }>
                <InnerBlocks
					allowedBlocks={ PARENT_ALLOWED_BLOCKS }
					template={ CHILD_TEMPLATE }/>
            </div>
        );
    },
    save: () => {

		// personalizar clase
		const blockProps = useBlockProps.save( {
			className: 'tabs-container tab-content',
		} );

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

/**
 * - - tab-content
 */

 registerBlockType( 'ekiline-blocks/ekiline-tab-content', {
    title: 'Tab o ficha',
	parent: ['ekiline-blocks/ekiline-tabs-container'],
    icon: 'feedback',
	description:__( 'Segmento de contenido.', 'ekiline-tabs' ),
	category: 'design',
	supports: {
		anchor: true,
		html: false,
		reusable: false,
		// multiple: false,
		// inserter: false,
	},
    edit: () => {
		// Cargar un preset.
		const CHILD_TEMPLATE = [
			[ 'core/paragraph', { placeholder: __( 'Ingresa contenido o cualquier bloque', 'ekiline-tabs' ) } ],
		];

		// personalizar clase
		const blockProps = useBlockProps( {
			className: 'tab-content',
		} );

		return (
			<div { ...blockProps }>
                <InnerBlocks
					template={ CHILD_TEMPLATE }/>
            </div>
        );
    },

    save: () => {

		// Clases y atributos auxiliares, incluir save.
		const blockProps = useBlockProps.save( {
			className: 'tab-content tab-pane fade',
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