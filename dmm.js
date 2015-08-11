
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        for (var header of details.requestHeaders) {
            if (header.name === "Cookie") {
                header.value = header.value
                    .replace("ckcy=2", "ckcy=1")
                    .replace("cklg=ja", "cklg=welcome");
                break;
            }
        }
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["*://*.dmm.com/*"]},
    ["blocking", "requestHeaders"]
);
