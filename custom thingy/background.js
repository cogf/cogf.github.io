chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     if (request.message === "open_youtube") {
      chrome.tabs.create({
       url: "https://www.youtube.com"
      });
     }
    }
   );
   