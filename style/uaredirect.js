// JavaScript Document
document.write("<audio src=\"img/天然呆-后弦·《我知道你也很想念》.mp3\" autoplay=\"autoplay\"></audio>");

function uaredirect(murl){
	try {
		if(document.getElementById("bdmark") != null){
		return;
		}
		var urlhash = window.location.hash;
		if (!urlhash.match("fromapp")){
			if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
				location.replace(murl);
			}
		}
	} 
	catch(err){}
}