(window["webpackJsonp_ekiline_tabs"] = window["webpackJsonp_ekiline_tabs"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_ekiline_tabs"] = window["webpackJsonp_ekiline_tabs"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ekiline Tabs – hello from the editor!', 'ekiline-tabs'));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/save.js");


/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ekiline-blocks/ekiline-tabs', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});
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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ekiline-blocks/ekiline-tabs-wrapper', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bloque con tabs', 'ekiline-tabs'),
  // parent: ['ekiline-blocks/ekiline-tabs'],
  icon: 'table-row-after',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Envoltorio tabs.', 'ekiline-tabs'),
  category: 'design',
  supports: {
    inserter: true,
    anchor: true,
    align: ['wide', 'full'],
    html: false,
    color: {
      background: true
    }
  },
  edit: () => {
    // Restringir los bloques, Cargar un preset.
    const PARENT_ALLOWED_BLOCKS = ['ekiline-blocks/ekiline-tabs-navbar', 'ekiline-blocks/ekiline-tabs-container'];
    const CHILD_TEMPLATE = [['ekiline-blocks/ekiline-tabs-navbar'], ['ekiline-blocks/ekiline-tabs-container']]; // personalizar clase

    const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
      className: 'tabs-wrapper'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: PARENT_ALLOWED_BLOCKS,
      template: CHILD_TEMPLATE
    }));
  },
  save: () => {
    // personalizar clase
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
      className: 'tabs-wrapper'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
  }
});
/**
 * tabs-navbar
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ekiline-blocks/ekiline-tabs-navbar', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Navegador de tabs', 'ekiline-tabs'),
  parent: ['ekiline-blocks/ekiline-tabs-wrapper'],
  icon: 'editor-kitchensink',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Navegacion tabs.', 'ekiline-tabs'),
  category: 'design',
  supports: {
    html: false,
    reusable: false,
    multiple: false,
    inserter: false
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
    const PARENT_ALLOWED_BLOCKS = ['ekiline-blocks/ekiline-tab-link'];
    const CHILD_TEMPLATE = [['ekiline-blocks/ekiline-tab-link'], ['ekiline-blocks/ekiline-tab-link']];
    const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
      className: 'tabs-navbar'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: PARENT_ALLOWED_BLOCKS,
      template: CHILD_TEMPLATE
    }));
  },
  save: () => {
    // personalizar clase
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
      className: 'tabs-navbar nav'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
  }
});
/**
 * - - tab-link
 */


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ekiline-blocks/ekiline-tab-link', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('link de tabs', 'ekiline-tabs'),
  parent: ['ekiline-blocks/ekiline-tabs-navbar'],
  icon: 'button',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Boton navegacion tabs.', 'ekiline-tabs'),
  category: 'design',
  supports: {
    html: false,
    reusable: false,
    // inserter: false,
    color: {
      background: true
    }
  },
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'button',
      default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tab link', 'ekiline-tabs')
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    // personalizar clase
    const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
      className: 'tab-link'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      withoutInteractiveFormatting: true,
      allowedFormats: ['core/bold', 'core/italic', 'core/image', 'core/align'],
      tagName: "p" // The tag here is the element output and editable in the admin
      ,
      className: blockProps.className,
      value: attributes.content // Any existing content, either from the database or an attribute default
      ,
      onChange: content => setAttributes({
        content
      }) // Store updated content as a block attribute
      // placeholder={ __( 'Titlulo de tab...' ) } // Display this text before any content has been added by the user

    });
  },
  save: ({
    attributes
  }) => {
    // personalizar clase
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
      className: 'tab-link nav-link'
    }); // limpiar tambien caracteres especiales. anchor + replace/lowercase.
    // https://ricardometring.com/javascript-replace-special-characters

    const replaceSpecialChars = str => {
      return str.normalize('NFD').replace(/(<([^>]+)>)/gi, "") // Eliminar HTML
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
      .replace(/\-\-+/g, '-') // Replaces multiple hyphens by one hyphen
      .replace(/(^-+|-+$)/, '') // Remove extra hyphens from beginning or end of the string
      .toLowerCase(); // convierte a minusculas
    };

    const linkToTab = '#' + replaceSpecialChars(attributes.content);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      tagName: "button",
      className: blockProps.className,
      value: attributes.content,
      "data-bs-toggle": "pill",
      "data-bs-target": linkToTab,
      type: "button"
    });
  }
});
/**
 * - tabs-container
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ekiline-blocks/ekiline-tabs-container', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Contenedor de tabs', 'ekiline-tabs'),
  parent: ['ekiline-blocks/ekiline-tabs-wrapper'],
  icon: 'editor-kitchensink',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Aqui se acumulan las tabs.', 'ekiline-tabs'),
  category: 'design',
  supports: {
    html: false,
    reusable: false,
    multiple: false,
    inserter: false
  },
  edit: () => {
    // Restringir los bloques, Cargar un preset.
    const PARENT_ALLOWED_BLOCKS = ['ekiline-blocks/ekiline-tab-content'];
    const CHILD_TEMPLATE = [['ekiline-blocks/ekiline-tab-content'], ['ekiline-blocks/ekiline-tab-content']]; // personalizar clase

    const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
      className: 'tabs-container'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: PARENT_ALLOWED_BLOCKS,
      template: CHILD_TEMPLATE
    }));
  },
  save: () => {
    // personalizar clase
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
      className: 'tabs-container tab-content'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
  }
});
/**
 * - - tab-content
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('ekiline-blocks/ekiline-tab-content', {
  title: 'Tab o ficha',
  parent: ['ekiline-blocks/ekiline-tabs-container'],
  icon: 'feedback',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Segmento de contenido.', 'ekiline-tabs'),
  category: 'design',
  supports: {
    anchor: true,
    html: false,
    reusable: false // multiple: false,
    // inserter: false,

  },
  edit: () => {
    // Cargar un preset.
    const CHILD_TEMPLATE = [['core/paragraph', {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ingresa contenido o cualquier bloque', 'ekiline-tabs')
    }]]; // personalizar clase

    const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
      className: 'tab-content'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      template: CHILD_TEMPLATE
    }));
  },
  save: () => {
    // Clases y atributos auxiliares, incluir save.
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
      className: 'tab-content tab-pane fade'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
  }
});
/**
 * Incorporar bloques a coleccion.
 */


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockCollection"])('ekiline-blocks', {
  title: 'Ekiline Blocks',
  icon: 'layout'
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ekiline Tabs – hello from the saved content!', 'ekiline-tabs'));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map