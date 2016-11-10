

function click(e){
	//query for current tabs
	alert("ssss");
	chrome.tabs.query({currentWindow:true,active:true},function(tabs){
		console.log("background.js:click()");
		var specTab = tabs[0];
		//inject css js into currenttab
		chrome.tabs.insertCSS(specTab.id,{file:"mystyles.css"});
		//chrome.tabs.executeScript(specTab.id,{file:"spinner.js"});//animation
		chrome.tabs.executeScript(specTab.id,{file:"myscript.js"});//content scrip
	});
}
//eventer listener -- someone click icon call click function
//chrome.browserAction.onClicked.addListener(click);


$( function() {
	//$("body").removeClass("js guest advocate-modal-visible");
	//$("#advocate-modal").css("display","none");
	console.log("background");
});
