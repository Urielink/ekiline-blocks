(window.webpackJsonp_ekiline_carousel=window.webpackJsonp_ekiline_carousel||[]).push([[1],{7:function(e,t,l){}}]),function(e){function t(t){for(var o,i,r=t[0],c=t[1],s=t[2],b=0,d=[];b<r.length;b++)i=r[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,s||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],o=!0,r=1;r<l.length;r++){var c=l[r];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=l[0]))}return e}var o={},n={0:0},a=[];function i(t){if(o[t])return o[t].exports;var l=o[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=o,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(l,o,function(t){return e[t]}.bind(null,o));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window.webpackJsonp_ekiline_carousel=window.webpackJsonp_ekiline_carousel||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=c;a.push([8,1]),l()}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.data},,function(e,t,l){"use strict";l.r(t);var o=l(4),n=l(0),a=(l(7),l(1)),i=l(3),r=l(2),c=l(5),s=l.n(c),u=l(6);Object(o.registerBlockType)("ekiline-blocks/ekiline-carousel",{apiVersion:2,title:Object(n.__)("Ekiline Carousel","ekiline-carousel"),description:Object(n.__)("Plugin for Ekiline theme, add a carousel to your posts, choose between posts or images, colmuns and more.","ekiline-carousel"),category:"media",icon:"slides",supports:{html:!1,align:["wide","full"]},attributes:{align:{type:"string",default:""},ChooseType:{type:"string",default:"posts"},SetIds:{type:"array",default:""},SetAmount:{type:"number",default:3},SetOrderBy:{type:"string",default:"date"},SetColumns:{type:"number",default:1},FindBlock:{type:"string",default:"none"},AllowMixed:{type:"boolean",default:!1},AddControls:{type:"boolean",default:!0},AddIndicators:{type:"boolean",default:!0},SetAuto:{type:"boolean",default:!0},SetTime:{type:"number",default:"5000"},SetAnimation:{type:"string",default:""}},edit:function(e){const{attributes:t,setAttributes:l,blockProps:o=Object(i.useBlockProps)()}=e,c="ekiline-box-"+(Math.floor(100*Math.random())+1)+"-wrapper",b=Object(u.withSelect)(e=>({categories:e("core").getEntityRecords("taxonomy","category",{per_page:-1})}))(({categories:e})=>e?Object(a.createElement)(r.SelectControl,{multiple:!0,label:Object(n.__)("Choose category","ekiline-carousel"),value:t.SetIds,options:e.map(e=>({label:e.name,value:e.id})),onChange:e=>l({SetIds:e}),style:{height:"auto"}}):Object(a.createElement)(a.Fragment,null));return Object(a.createElement)("div",o,Object(a.createElement)(i.InspectorControls,null,Object(a.createElement)(r.PanelBody,{title:Object(n.__)("Carousel content","ekiline-carousel"),initialOpen:!0},Object(a.createElement)(r.SelectControl,{label:Object(n.__)("Content type","ekiline-carousel"),value:t.ChooseType,options:[{label:Object(n.__)("Posts","ekiline-carousel"),value:"posts"},{label:Object(n.__)("Images","ekiline-carousel"),value:"images"}],onChange:e=>l({ChooseType:e})}),"posts"===t.ChooseType&&Object(a.createElement)(b,null),"images"===t.ChooseType&&Object(a.createElement)(i.MediaUploadCheck,null,Object(a.createElement)(i.MediaUpload,{title:Object(n.__)("Carousel Images","ekiline-carousel"),onSelect:e=>{const t=[];for(let l=0,o=e.length;l<o;l+=1)t.push(e[l].id);l({SetIds:t})},allowedTypes:["image"],multiple:!0,value:t.SetIds,render:({open:e})=>Object(a.createElement)(r.Button,{isSecondary:!0,onClick:e},Object(n.__)("Add images","ekiline-carousel")),gallery:!1,addToGallery:!1})),"posts"===t.ChooseType&&Object(a.createElement)(r.TextControl,{label:Object(n.__)("Post amount","ekiline-carousel"),type:"number",value:t.SetAmount,onChange:e=>l({SetAmount:parseInt(e)})}),"posts"===t.ChooseType&&Object(a.createElement)(r.SelectControl,{label:Object(n.__)("Sort by","ekiline-carousel"),value:t.SetOrderBy,options:[{label:Object(n.__)("Date","ekiline-carousel"),value:"date"},{label:Object(n.__)("Modified","ekiline-carousel"),value:"modified"},{label:Object(n.__)("Title","ekiline-carousel"),value:"title"},{label:Object(n.__)("Name","ekiline-carousel"),value:"name"},{label:Object(n.__)("Author","ekiline-carousel"),value:"author"},{label:Object(n.__)("Random","ekiline-carousel"),value:"rand"}],onChange:e=>l({SetOrderBy:e})}),"posts"===t.ChooseType&&Object(a.createElement)(r.SelectControl,{label:Object(n.__)("Find a block in content","ekiline-carousel"),value:t.FindBlock,options:[{label:Object(n.__)("None","ekiline-carousel"),value:"none"},{label:Object(n.__)("Cover","ekiline-carousel"),value:"core/cover"},{label:Object(n.__)("Image","ekiline-carousel"),value:"core/image"},{label:Object(n.__)("Media and text","ekiline-carousel"),value:"core/media-text"},{label:Object(n.__)("Video","ekiline-carousel"),value:"core/video"}],onChange:e=>l({FindBlock:e})}),"none"!==t.FindBlock&&Object(a.createElement)(r.ToggleControl,{label:Object(n.__)("Show post if there is no block","ekiline-carousel"),checked:t.AllowMixed,onChange:e=>l({AllowMixed:e})})),Object(a.createElement)(r.PanelBody,{title:Object(n.__)("Carousel Look","ekiline-carousel"),initialOpen:!1},Object(a.createElement)(r.RangeControl,{label:Object(n.__)("Columns","ekiline-carousel"),value:t.SetColumns,onChange:e=>l({SetColumns:parseInt(e)}),min:1,max:4}),Object(a.createElement)(r.ToggleControl,{label:Object(n.__)("Show controls","ekiline-carousel"),checked:t.AddControls,onChange:e=>l({AddControls:e})}),Object(a.createElement)(r.ToggleControl,{label:Object(n.__)("Show indicators","ekiline-carousel"),checked:t.AddIndicators,onChange:e=>l({AddIndicators:e})}),Object(a.createElement)(r.ToggleControl,{label:Object(n.__)("Auto start","ekiline-carousel"),checked:t.SetAuto,onChange:e=>l({SetAuto:e})}),Object(a.createElement)(r.TextControl,{label:Object(n.__)("Transition in milliseconds","ekiline-carousel"),type:"number",value:t.SetTime,onChange:e=>l({SetTime:parseInt(e)})}),Object(a.createElement)(r.SelectControl,{label:Object(n.__)("Animation type","ekiline-carousel"),value:t.SetAnimation,options:[{label:Object(n.__)("Default","ekiline-carousel"),value:""},{label:Object(n.__)("Fade","ekiline-carousel"),value:"fade"},{label:Object(n.__)("Vertical","ekiline-carousel"),value:"vertical"}],onChange:e=>l({SetAnimation:e})}))),Object(a.createElement)(i.BlockControls,null,Object(a.createElement)(r.ToolbarGroup,null,Object(a.createElement)(r.ToolbarItem,{as:r.Button,icon:"dashicons dashicons-visibility",title:Object(n.__)("Preview","ekiline-carousel"),onClick:()=>{ekiline_transformarCarrusel("."+c+" .carousel-multiple")}}))),Object(a.createElement)("div",{className:c},Object(a.createElement)("div",null,Object(a.createElement)(s.a,{block:"ekiline-blocks/ekiline-carousel",attributes:e.attributes}))))}}),Object(o.registerBlockCollection)("ekiline-blocks",{title:"Ekiline Blocks",icon:"layout"})}]);