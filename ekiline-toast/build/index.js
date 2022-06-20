(()=>{"use strict";const e=window.wp.element,t=window.wp.blocks,o=window.wp.blockEditor,l=window.wp.components,a=window.wp.i18n;(0,t.registerBlockType)("ekiline-blocks/ekiline-toast",{apiVersion:2,title:(0,a.__)("Ekiline toast, full control","ekiline-toast"),icon:"lightbulb",description:(0,a.__)("Show small bootstrap-style notices.","ekiline-toast"),category:"design",supports:{anchor:!0,html:!1},attributes:{toastPosition:{type:"string",default:" bottom-0 end-0"}},edit:t=>{const{attributes:i,setAttributes:n}=t,s=(0,o.useBlockProps)({className:"group-toast"});return(0,e.createElement)("div",s,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,a.__)("Toast group options","ekiline-toast"),initialOpen:!0},(0,e.createElement)(l.SelectControl,{label:(0,a.__)("Display position","ekiline-toast"),value:i.toastPosition,options:[{label:(0,a.__)("Bottom right","ekiline-toast"),value:" bottom-0 end-0"},{label:(0,a.__)("Bottom left","ekiline-toast"),value:" bottom-0 start-0"},{label:(0,a.__)("Top right","ekiline-toast"),value:" top-0 end-0"},{label:(0,a.__)("Top left","ekiline-toast"),value:" top-0 start-0"}],onChange:e=>n({toastPosition:e})}))),(0,e.createElement)(o.InnerBlocks,{allowedBlocks:["ekiline-blocks/ekiline-toast-item"],template:[["ekiline-blocks/ekiline-toast-item",{lock:{remove:!1,move:!0}}]]}))},save:t=>{let{attributes:l}=t;const a=o.useBlockProps.save({className:"toast-container position-fixed p-md-1 p-md-3"+l.toastPosition});return(0,e.createElement)("div",a,(0,e.createElement)(o.InnerBlocks.Content,null))}}),(0,t.registerBlockType)("ekiline-blocks/ekiline-toast-item",{title:(0,a.__)("Ekiline toast item.","ekiline-toast"),parent:["ekiline-blocks/ekiline-toast"],icon:"lightbulb",description:(0,a.__)("Each toast can be executed by time, at the end of scrolling, or with the cursor outside the window. You can stack as many as you need.","ekiline-toast"),category:"design",supports:{anchor:!0,html:!1,multiple:!1,reusable:!0},attributes:{content:{type:"string",source:"html",selector:"p"},toastTime:{type:"number",default:0},toastScroll:{type:"boolean",default:!1}},edit:t=>{const{attributes:i,setAttributes:n}=t,s=(0,o.useBlockProps)({className:"toast-item"}),r=[["core/paragraph",{content:(0,a.__)("Add toast content.","ekiline-modal")}]];return(0,e.createElement)("div",s,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,a.__)("Toast Params","ekiline-toast"),initialOpen:!0},(0,e.createElement)(l.TextControl,{label:(0,a.__)("Run by time","ekiline-toast"),type:"number",value:i.toastTime,onChange:e=>n({toastTime:parseInt(e)}),help:i.toastTime>0?(0,a.__)('Run after page load "'+i.toastTime+'" milliseconds.',"ekiline-toast"):(0,a.__)('"'+i.toastTime+'" run immediately on page load.',"ekiline-toast")}),(0,e.createElement)(l.ToggleControl,{label:(0,a.__)("Run at end of page scroll.","ekiline-toast"),checked:i.toastScroll,onChange:e=>n({toastScroll:e})}))),(0,e.createElement)(o.RichText,{tagName:"p",value:i.content,allowedFormats:["core/bold","core/italic"],onChange:e=>n({content:e}),placeholder:(0,a.__)("Add toast title","ekiline-toast"),className:"item-title"}),(0,e.createElement)(o.InnerBlocks,{template:r}))},save:t=>{let{attributes:l}=t;const a=o.useBlockProps.save({className:"toast-item toast"+(l.toastScroll?" launch-scroll hide":"")+(0!==l.toastTime?" launch-time hide":""),"data-ek-launch-time":l.toastTime||null});return(0,e.createElement)("div",a,(0,e.createElement)("div",{class:"toast-header"},(0,e.createElement)("p",{class:"me-auto my-0"},l.content),(0,e.createElement)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})),(0,e.createElement)("div",{class:"toast-body"},(0,e.createElement)(o.InnerBlocks.Content,null)))}}),(0,t.registerBlockCollection)("ekiline-blocks",{title:"Ekiline Blocks",icon:"layout"})})();