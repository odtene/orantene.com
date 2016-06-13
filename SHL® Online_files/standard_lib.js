
var IS_FIREFOX=false,IS_MOZ=false,IS_MOZ16=false,IS_IE=false;var IS_IE5=false,IS_IE6=false,IS_IE7=false,IS_IE8=false,IS_IE9=false;var isIE=false,isIE5=false,isIE6=false,isIE7=false,isIE8=false,isIE9=false,isIE10=false;isFirefox=false,isChrome=false,isSafari=false,isWebKit=false,isIPhone=false;var KEYS={BACKSPACE:8,CURSOR_DOWN:40,CURSOR_LEFT:37,CURSOR_RIGHT:39,CURSOR_UP:38,DELETE:46,END:35,ENTER:13,HOME:36,PAGE_DOWN:34,PAGE_UP:33,TAB:9};var MIN_MOZ_VERSION=20040113;var OLD_DISPLAY_ATTR="oldDisplayStyle";var ROW_HIGHLIGHT_COLOR="#F0F4F8";var pageLoaded=false;function getIEVersion()
{var rv=-1;if(navigator.appName=='Microsoft Internet Explorer')
{var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);}
return rv;}
var navVer=navigator.appVersion.toLowerCase();if(navVer.indexOf("applewebkit")!=-1)
{isWebKit=true;if(navVer.indexOf("chrome")!=-1)
{isChrome=true;}
else if(navVer.indexOf("safari")!=-1)
{isSafari=true;if(navVer.indexOf("iphone")!=-1)
{isIPhone=true;}}}
else if(navigator.appName=="Netscape"&&parseInt(navigator.appVersion)>=5)
{IS_MOZ=true;IS_MOZ16=(parseInt(navigator.productSub)>=MIN_MOZ_VERSION);IS_FIREFOX=(navigator.userAgent.indexOf("Firefox")!=-1);window.isFirefox=IS_FIREFOX;}
else
{var ieVer=getIEVersion();isIE=IS_IE=true;isIE5=IS_IE5=ieVer>=5&&ieVer<6;isIE6=IS_IE6=ieVer>=6&&ieVer<7;isIE7=IS_IE7=ieVer>=7&&ieVer<8;isIE8=IS_IE8=ieVer>=8&&ieVer<9||(isIE7&&(typeof(window.external.AddService)!="undefined"));isIE9=IS_IE9=ieVer>=9&&ieVer<10;isIE10=IS_IE10=ieVer>=10&&ieVer<11;if(isIE8){isIE7=false;}}
Array.prototype.contains=function(value){for(var z=0;z<this.length;z++)
{if(this[z]==value)return true;}
return false;};String.prototype.trim=function()
{return this.replace(/^\s+|\s+$/g,"");};String.prototype.startsWith=function(str)
{return(this.match("^"+str)==str);};function $()
{var elements=new Array();for(var i=0;i<arguments.length;i++)
{var szId=arguments[i];var pElem;if(typeof szId=="string")
{pElem=document.getElementById(szId);if(pElem==null)
{var elmArray=document.getElementsByName(szId+"");pElem=(elmArray.length)?elmArray[0]:null;}}
else pElem=arguments[i];if(arguments.length==1)
{return pElem;}
elements.push(pElem);}
return elements;}
function $C(szClassName,pRestrictTo,pRestrictToTag)
{var retArray=new Array();var topLevelObject=(pRestrictTo==null)?document:pRestrictTo;var allTags=topLevelObject.getElementsByTagName((pRestrictToTag==null)?"*":pRestrictToTag);for(var x=0;x<allTags.length;x++)
{var classVal=allTags[x].className;if(classVal!=null)
{if(classVal.indexOf(" ")!=-1)
{var classArray=classVal.split(" ");for(var y=0;y<classArray.length;y++)
{if(classArray[y]==szClassName)
retArray.push(allTags[x]);}}
else
{if(classVal==szClassName)
retArray.push(allTags[x]);}}}
return retArray;}
function appendEvent(pToObject,szEventType,pFunctionHandler)
{var bSuccess;if(IS_IE)
{var szNewEventType="on"+szEventType;bSuccess=pToObject.attachEvent(szNewEventType,pFunctionHandler);}
else if(IS_MOZ||isWebKit)
{bSuccess=pToObject.addEventListener(szEventType,pFunctionHandler,false);}
else alert("error: function appendEvent called by unrecognized/obsolete browser.");return bSuccess;}
function assimilate(oSourceObj,oTargetObj,isUpdateExistingOnly)
{for(var o in oSourceObj)
{if(!isUpdateExistingOnly||(isUpdateExistingOnly&&typeof oTargetObj[o]!='undefined'))
{oTargetObj[o]=oSourceObj[o];}}}
function changePNGImage(pImg,szNewSrc)
{if(isIE6)
{pImg.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+szNewSrc+", sizingMethod=scale)";}
else
{pImg.src=szNewSrc;}}
function checkEnterSubmit(szFormId)
{var pEvent=getEvent();if(pEvent.keyCode==13)document.forms[szFormId].submit();}
function doNothing(){void 0;}
function debugObject(objectToDebug,isString,mask)
{var tempObj=(isString!=null)?(isString)?eval(''+objectToDebug):objectToDebug:objectToDebug;var counter=1;var modulusCheck=(IS_MOZ)?16:50;var alertString='';for(var x in tempObj)
{if(mask==null||mask!=null&&x.indexOf(mask)!=-1)
{var newObjectEntry='Object '+counter+' inside the object '+objectToDebug+' is: '+x+' - value : '+tempObj[x]+'\n';alertString+=(newObjectEntry.length<=150)?newObjectEntry:'Object '+counter+' inside the object '+objectToDebug+' is: '+x+' - value : VERY LONG ENTRY\n';counter++;if(counter%modulusCheck==0)
{alert(alertString);alertString='';}}}
alert(alertString);}
function flipDisplay(pElemToFlip,szElemIdToFlip)
{if(pElemToFlip!=null)
{var szTagName=pElemToFlip.tagName.toLowerCase();var isInline=(szTagName=="input"||szTagName=="span");if(getCurrStyle(pElemToFlip,"display")!="none")
{pElemToFlip.setAttribute(OLD_DISPLAY_ATTR,getCurrStyle(pElemToFlip,"display"));pElemToFlip.style.display="none";}
else
{var szOld=(pElemToFlip.getAttribute(OLD_DISPLAY_ATTR)!=null)?pElemToFlip.getAttribute(OLD_DISPLAY_ATTR):(isInline)?"inline":getBlockDisplay(pElemToFlip);pElemToFlip.setAttribute(OLD_DISPLAY_ATTR,getCurrStyle(pElemToFlip,"display"));pElemToFlip.style.display=szOld;}}
else
{try
{var pElem=document.getElementById(szElemIdToFlip);if(getCurrStyle(pElem).display!="none")
{pElem.setAttribute(OLD_DISPLAY_ATTR,getCurrStyle(pElem).display);pElem.style.display="none";}
else
{var szAttrVal=pElem.getAttribute(OLD_DISPLAY_ATTR);if(szAttrVal!=null)
{pElem.style.display=szAttrVal;}
else pElem.style.display=getBlockDisplay(pElem);}}
catch(e)
{alert("standard_lib flipDisplay error:\n"+e.message);}}}
function getBlockDisplay(pElement)
{var retVal="block";if(!isIE||isIE10)
{switch(pElement.tagName.toLowerCase())
{case"table":retVal="table";break;case"tbody":retVal="table-row-group";break;case"tr":retVal="table-row";break;case"th":case"td":retVal="table-cell";break;}}
return retVal;}
function getChildIndex(pElement)
{var nIndex=0;if(pElement.hasChildNodes())
{for(;nIndex<pElement.parentNode.childNodes.length;nIndex++)
{if(pElement.parentNode.childNodes[nIndex]==pElement)return nIndex;}}
return nIndex;}
function getChildNodes(pElement)
{var raw=pElement.childNodes;var tempNodes=new Array();if(!isIE)
{var nonWhiteSpace=/\S+/;for(var a=0;a<raw.length;a++)
{var szNodeValue=raw[a].nodeValue;var test=true;if(szNodeValue!=null)
{test=(szNodeValue.match(nonWhiteSpace)!=null);}
if(test)tempNodes.push(raw[a]);}
return tempNodes;}
else
{for(var b=0;b<raw.length;b++)
{if(raw[b].tagName)
{if(raw[b].tagName.toLowerCase()!="script")
{tempNodes.push(raw[b]);}}
else if(raw[b].nodeType==3&&raw[b].nodeValue.trim().length>0)
{tempNodes.push(raw[b]);}}}
return tempNodes;}
function getCurrStyle(pElem,property)
{if(property==null)return(isIE)?pElem.currentStyle:pElem.style;else
{if(isIE)
{return pElem.currentStyle[property];}
else
{return window.getComputedStyle(pElem,null).getPropertyValue(property);}}}
function getEvent()
{if(isIE||isSafari||isChrome)
{return window.event;}
else
{var lastValidCaller=arguments.callee.caller;var nextValidCaller=lastValidCaller.arguments.callee.caller;var tryCount=0;var prevCallers=[];var callerHasEvent=function(callerToTest){return(callerToTest.arguments.length>0&&callerToTest.arguments[0].eventPhase)};while(!callerHasEvent(lastValidCaller))
{tryCount++;prevCallers.push(lastValidCaller);lastValidCaller=nextValidCaller;nextValidCaller=lastValidCaller.arguments.callee.caller;if(tryCount>50)
{var alertArray=[];for(var a=0;a<4;a++)
{alertArray.push(prevCallers[a]);}
alert("Error: getEvent -- not finding prevCaller 0-2: "+alertArray.join("\n\n"));break;}}
return lastValidCaller.arguments[0];}}
function getEventPos(pEvent)
{var retArray=[];if(isIE)
{retArray.push(pEvent.clientX,pEvent.clientY);}
else
{retArray.push(pEvent.pageX,pEvent.pageY);}
return retArray;}
function getParentForm(pElem)
{if(pElem.form)
{return pElem.form;}
else
{var pParent=pElem.parentNode;while(pParent!=pElem.document)
{if(pParent.tagName.toLowerCase()=="form")
{return pParent;}
else pParent=pParent.parentNode;}
return null;}}
function getRealLeft(elementName,pElement)
{var elemPoint=(elementName!=null)?document.getElementById(elementName):pElement;var xPos=elemPoint.offsetLeft;var tempEl=elemPoint.offsetParent;while(tempEl!=null)
{xPos+=tempEl.offsetLeft-((tempEl.tagName.toLowerCase()=="body")?0:tempEl.scrollLeft);tempEl=tempEl.offsetParent;}
return xPos;}
function getRealTop(elementName,pElement)
{var elemPoint=(elementName!=null)?document.getElementById(elementName):pElement;var yPos=elemPoint.offsetTop;var tempEl=elemPoint.offsetParent;while(tempEl!=null)
{yPos+=tempEl.offsetTop-((tempEl.tagName.toLowerCase()=="body")?0:tempEl.scrollTop);tempEl=tempEl.offsetParent;}
return yPos;}
function getSelectedOptions(szSelectId,elSelect)
{var pSelect=(szSelectId==null)?elSelect:$(szSelectId);var retArray=new Array();if(pSelect!=null)
{for(var a=0;a<pSelect.options.length;a++)
{if(pSelect.options[a].selected)retArray.push(pSelect.options[a]);}}
return retArray;}
function getSibling(isPrevious,pElem)
{var pCurrentSibling=(isPrevious)?pElem.previousSibling:pElem.nextSibling;while(pCurrentSibling!=null&&pCurrentSibling.nodeType!=1)
{pCurrentSibling=(isPrevious)?pCurrentSibling.previousSibling:pCurrentSibling.nextSibling;}
return pCurrentSibling;}
function getSrcElement(pEvent)
{return(IS_MOZ)?pEvent.target:pEvent.srcElement;}
function getStyleRule(szSelectorText)
{var styleSheets=window.document.styleSheets;for(var s=0;s<styleSheets.length;s++)
{var rules=isIE?styleSheets[s].rules:styleSheets[s].cssRules;for(var r=0;r<rules.length;r++)
{if(rules[r].selectorText)
{if(rules[r].selectorText.toLowerCase()==szSelectorText.toLowerCase())
{return rules[r];}}}}
return null;}
function hideAllSelects(isHide,protectArray)
{if(!IS_MOZ&&!IS_IE7)
{var NO_HIDE="noHide";if(protectArray!=null)
{for(var a=0;a<protectArray.length;a++)
{var protectSelects=protectArray[a].getElementsByTagName("select");for(var b=0;b<protectSelects.length;b++)
{var hideAttr=protectSelects[b].getAttribute(NO_HIDE);if(hideAttr==null)
{protectSelects[b].setAttribute(NO_HIDE,NO_HIDE);}}}}
if(!window.hideAllSelectsColl)
{window.hideAllSelectsColl=window.document.getElementsByTagName("select");}
for(var x=0;x<window.hideAllSelectsColl.length;x++)
{if(window.hideAllSelectsColl[x].getAttribute(NO_HIDE)!=NO_HIDE)
{window.hideAllSelectsColl[x].style.visibility=(isHide)?"hidden":"visible";}}}}
function highlightRow(event,pRowElem,isHighlight)
{if(isHighlight==1)
{var szColorValue=getCurrStyle(pRowElem).backgroundColor;if(szColorValue!=null)
{pRowElem.setAttribute("oldRowColor",szColorValue);}
var highlightAttribute=pRowElem.getAttribute("highlightColor");pRowElem.style.backgroundColor=(highlightAttribute==null)?ROW_HIGHLIGHT_COLOR:highlightAttribute;}
else
{var szOldColorValue=pRowElem.getAttribute("oldRowColor");pRowElem.style.backgroundColor=(szOldColorValue!=null)?szOldColorValue:"transparent";}}
function isControlKey(nKeyCode)
{for(var x in KEYS)
{if(KEYS[x]==nKeyCode){return true;}}
return false;}
function moveLayer(pLayer,x,y)
{pLayer.style.left=x;pLayer.style.top=y;}
function removeEvent(pElem,szEventType,pFunction)
{if(isIE)
{pElem.detachEvent("on"+szEventType,pFunction);}
else
{pElem.removeEventListener(szEventType,pFunction,false);}}
function replaceSpecialChars(szString)
{var szStr="";szStr=szString.replace("'","&#39;");szStr=szStr.replace(/&\s/g,"&#38;&nbsp;");szStr=szStr.replace("\\","&#47;");return szStr;}
function restoreDisplay(pElem)
{try
{pElem.style.display=pElem.getAttribute(OLD_DISPLAY_ATTR);pElem.removeAttribute(OLD_DISPLAY_ATTR);}
catch(e){alert("standard_lib::restoreDisplay -- error: "+e);}}
function searchParentNodes(pStartElem,searchFor,matchValue,styleAttribute,styleMatch,oElem,elTagName)
{var pCurrElem=pStartElem;var parentDocument=(typeof pStartElem.document=="undefined")?document:pStartElem.document;while(pCurrElem!=parentDocument)
{if(searchFor!=null)
{if(pCurrElem.getAttribute)
{var attr=pCurrElem.getAttribute(searchFor);if(attr!=null)
{if(matchValue!=null)
{if(attr==matchValue)return pCurrElem;}
else return pCurrElem;}}}
else if(styleAttribute!=null&&styleMatch!=null)
{if(pCurrElem.style)
{var styleResult=getCurrStyle(pCurrElem,styleAttribute);if(styleResult!=null)
{if(styleMatch!=null)
{if(styleResult==styleMatch)return pCurrElem;}
else return pCurrElem;}}}
else if(oElem!=null)
{if(pCurrElem==oElem)return pCurrElem;}
else if(elTagName!=null)
{if(pCurrElem.tagName==elTagName||pCurrElem.tagName.toLowerCase()==elTagName.toLowerCase())return pCurrElem;}
pCurrElem=pCurrElem.parentNode;}
return null;}
function setAction(szFormName,szActionValue)
{try
{document.forms[szFormName].action.value=szActionValue;}
catch(e){alert("Document does not contain either form '"+szFormName+"' or the form is missing an 'action' input element.");}}
function setDisplay(pElem,szNewDisplay)
{pElem.setAttribute(OLD_DISPLAY_ATTR,getCurrStyle(pElem).display);pElem.style.display=szNewDisplay;}
function stopEvent(event)
{if(isIE)
{event.returnValue=false;event.cancelBubble=true;}
else
{event.preventDefault();event.stopPropagation();}}
function swapNode(node1,node2)
{var parentNode1=node1.parentNode;var pos1=getChildIndex(node1);var parentNode2=node2.parentNode;var pos2=getChildIndex(node2);var pOldElement=parentNode1.replaceChild(parentNode2.childNodes[pos2],parentNode1.childNodes[pos1]);if(pos2<parentNode2.childNodes.length)
{parentNode2.insertBefore(pOldElement,parentNode2.childNodes[pos2]);}
else parentNode2.appendChild(pOldElement);}
function textareaLimit(nCharLimit)
{var evt=getEvent();var src=getSrcElement(evt);var len=src.value.length;if(len>=nCharLimit&&!isControlKey(evt.keyCode))
{stopEvent(evt);}}
function textareaPaste(nCharLimit)
{var nLimit=nCharLimit;var evt=getEvent();var src=getSrcElement(evt);window.setTimeout(function(){var len=src.value.length;if(len>=nLimit)
{alert(i18n.STDLIB_PASTED+" "+nCharLimit);src.value=src.value.substr(0,nCharLimit);}},100);}
function addClass(pElem,szClassName)
{if(pElem!=null)
{var splitArray=pElem.className.split(" ");var hasClass=false;for(var a=0;a<splitArray.length;a++)
{if(splitArray[a]==szClassName)
{hasClass=true;}}
if(!hasClass)pElem.className+=" "+szClassName;}}
function flipClass(pElem,szClass1,szClass2)
{if(pElem!=null)
{var szFindClass=szClass1
var szReplaceClass=szClass2;if(pElem.className.indexOf(szFindClass)==-1)
{szFindClass=szClass2;szReplaceClass=szClass1;}
replaceClass(pElem,szFindClass,szReplaceClass);}}
function removeClass(pElem,szClassName)
{if(pElem!=null)
{var splitArray=pElem.className.split(" ");var searchArray=new Array();for(var b=0;b<splitArray.length;b++)
{if(splitArray[b]!=szClassName)
{searchArray.push(splitArray[b]);}}
pElem.className=searchArray.join(" ");}}
function replaceClass(pElem,szFind,szReplace)
{removeClass(pElem,szFind);addClass(pElem,szReplace);}
function Callback(fnCallback,rScope,argsArray)
{this.fn=fnCallback;this.scope=(rScope==null)?window:rScope;this.args=argsArray;}
Callback.prototype.addArgs=function(addArgsArray){if(addArgsArray!=null)
{for(var a=0;a<addArgsArray.length;a++)
{this.args.push(addArgsArray[a]);}}};Callback.prototype.run=function(moreArgsArray){var prevLength=this.args.length;this.addArgs(moreArgsArray);this.fn.apply(this.scope,this.args);this.args.length=prevLength;};function Rollover(szId,szDownSrc,szOutSrc,szOverSrc)
{this.downSrc=szDownSrc;this.downImg=null;this.id=szId;this.overSrc=szOverSrc;this.overImg=null
this.outSrc=szOutSrc;this.outImg=null;this.pImg=null;this.init();}
Rollover.prototype.handleOut=function()
{try
{var pImg=getSrcElement(getEvent());var isDisabled=pImg.getAttribute("disabled")||pImg.disabled;if(!isDisabled&&pImg.pRollover.outImg!=null)pImg.src=pImg.pRollover.outImg.src;}
catch(e){}}
Rollover.prototype.handleOver=function()
{try
{var pImg=getSrcElement(getEvent());var isDisabled=pImg.getAttribute("disabled")||pImg.disabled;if(!isDisabled&&pImg.pRollover.overImg!=null)pImg.src=pImg.pRollover.overImg.src;}
catch(e){}}
Rollover.prototype.handleUp=function()
{try
{var pImg=getSrcElement(getEvent());var isDisabled=pImg.getAttribute("disabled")||pImg.disabled;if(!isDisabled&&pImg.pRollover.overImg!=null)pImg.src=pImg.pRollover.overImg.src;}
catch(e){}}
Rollover.prototype.handleDown=function()
{try
{var pImg=getSrcElement(getEvent());var isDisabled=pImg.getAttribute("disabled")||pImg.disabled;if(!isDisabled&&pImg.pRollover.downImg!=null)pImg.src=pImg.pRollover.downImg.src;}
catch(e){}}
Rollover.prototype.init=function()
{this.pImg=$(this.id);if(this.pImg!=null)
{this.pImg.pRollover=this;appendEvent(this.pImg,"mousedown",this.handleDown);appendEvent(this.pImg,"mouseout",this.handleOut);appendEvent(this.pImg,"mouseover",this.handleOver);appendEvent(this.pImg,"mouseup",this.handleUp);if(this.downSrc!=null)
{this.downImg=new Image();this.downImg.src=this.downSrc;}
if(this.overSrc!=null)
{this.overImg=new Image();this.overImg.src=this.overSrc;}
if(this.outSrc!=null)
{this.outImg=new Image();this.outImg.src=this.outSrc;}}}
appendEvent(window,"load",function(){window.pageLoaded=true;});