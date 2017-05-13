/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */


CKEDITOR.config.allowedContent = true;
CKEDITOR.dtd.$removeEmpty['i'] = false;
 CKEDITOR.editorConfig = function( config ) {

 	config.toolbarGroups = [
 	// 	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
 	// 	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
 	// 	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
 	// 	{ name: 'forms', groups: [ 'forms' ] },
 		'/',
 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
 	// 	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
 	// 	{ name: 'links', groups: [ 'links' ] },
 		{ name: 'insert', groups: [ 'insert' ] },
 		'/',



 	];

  config.allowedContent = true;

  	// config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc,lineutils,widget,notification,notificationaggregator,embedbase,uploadcare,allowsave,btgrid,bootstrapVisibility,glyphicons,btbutton,bt_table,btquicktable,divarea,fastimage,htmlbuttons,imagepaste,imageresize,imagebrowser,imgbrowse,imagerotate,imageuploader,image2,imageresponsive,insertpre,videodetector,youtube,zoom,tableresize,ckeditortablecellsselection,tabbedimagebrowser,filetools,uploadwidget,uploadfile,uploadimage,videosnapshot,videoembed,texttransform,slideshow,SimpleImage,simple-image-browser,html5audio,resizewithwindow,embedsemantic,soundPlayer,tliyoutube2,tliyoutube,Audio,imgupload,dropdownmenumanager,lineheight,oembed,video,mediaembed,embed';
  config.height = 300;

  	// Remove some buttons provided by the standard plugins, which are
  	// not needed in the Standard(s) toolbar.
  	// config.removeButtons = 'Underline,Subscript,Superscript';

  	// Set the most common block elements.
  	config.format_tags = 'p;h1;h2;h3;pre';
  	// // Simplify the dialog windows.
  	// config.removeDialogTabs = 'image:advanced;link:advanced';

  };
