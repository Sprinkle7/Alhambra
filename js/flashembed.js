function flashINIT(v){MM_FlashCanPlay=0;MM_contentVersion=v;var plugin=(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"])?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;if(plugin){var words=navigator.plugins["Shockwave Flash"].description.split(" ");for(var i=0;i<words.length;++i){if(isNaN(parseInt(words[i]))){continue};var MM_PluginVersion=new Number(words[i]);}MM_FlashCanPlay=MM_PluginVersion>=MM_contentVersion;}else if(navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>=0&&(navigator.appVersion.indexOf("Win")!=-1)){document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');document.write('on error resume next \n');document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');document.write('</SCR' + 'IPT\> \n');}}function writeFlashVersionDetect(flashName,flashSource,imgSource,w,h,v,vars){flashINIT(v);if(MM_FlashCanPlay){writeFlash(flashName,flashSource,imgSource,w,h,v,vars);}else{document.write('<a href="http://www.macromedia.com/go/getflashplayer" target="_blank"><img src="http://www.macromedia.com/images/shared/download_buttons/get_flash_player.gif" border=0></a>');}}function writeFlash(flashName,flashSource,imgSource,w,h,v,vars){document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+ v +',0,0,0" ');document.write(' ID="'+ flashName +'" WIDTH="'+ w +'" HEIGHT="'+ h +'" ALIGN="">');document.write(' <PARAM NAME=movie VALUE="'+ flashSource +'?'+ vars +'"><PARAM NAME=quality VALUE=high><param name=wmode value=transparent><PARAM NAME=menu VALUE=false>');document.write(' <EMBED src="'+ flashSource +'?'+ vars +'" quality=high menu="false" wmode="transparent"');document.write(' swLiveConnect="true" WIDTH="'+ w +'" HEIGHT="'+ h +'" NAME="'+ flashName +'" ALIGN=""');document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');document.write(' </EMBED>');document.write(' </OBJECT>');}