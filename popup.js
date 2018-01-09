chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "columnar-HP.html";
    chrome.tabs.create({ url: newURL });
});