/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

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
// import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'ekiline-blocks/ekiline-carousel', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Ekiline Carousel', 'ekiline-carousel' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'Add a carousel to your posts, choose between posts or images, colmuns and more.', 'ekiline-carousel' ),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: 'media',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'slides',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
		align: [ 'wide', 'full' ],
	},

	/**
	 * Argumentos para personalizacion.
	 */
	attributes: {
		align: {
			type: 'string',
			default: '',
		},
		ChooseType: {
			type: 'string',
			default: 'posts',
		},
		SetIds: {
			type: 'array',
			default: '',
		},
		SetAmount: {
			type: 'number',
			default: 3,
		},
		SetOrderBy: {
			type: 'string',
			default: 'date',
		},
		SetColumns: {
			type: 'number',
			default: 1,
		},
		FindBlock: {
			type: 'string',
			default: 'none',
		},
		AllowMixed: {
			type: 'boolean',
			default: false,
		},
		AddControls: {
			type: 'boolean',
			default: true,
		},
		AddIndicators: {
			type: 'boolean',
			default: true,
		},
		SetAuto: {
			type: 'boolean',
			default: true,
		},
		SetTime: {
			type: 'number',
			default: '5000',
		},
		SetAnimation: {
			type: 'string',
			default: '',
		},
		SetHeight: {
			type: 'number',
			default: '480',
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	// save,
} );

/**
 * Incorporar bloque a una coleccion.
 */
import { registerBlockCollection } from '@wordpress/blocks';
registerBlockCollection( 'ekiline-blocks', {
	title: 'Ekiline Blocks',
	icon: 'layout',
} );