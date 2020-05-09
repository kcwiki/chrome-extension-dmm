# `chrome-extension-dmm`

Chrome extension for bypassing area errors on [DMM](https://www.dmm.com/).

The following area errors are handled:

- General DMM cookie-based area restriction is fixed by changing (`webRequest.onBeforeSendHeaders`) relevant cookie value.
- KanColle gadget server area restriction is fixed by redirecting (`webRequest.onBeforeRequest`) gadget server requests to a third party [cache](https://github.com/kcwiki/cache), so it works like a CDN via GitHub pages (Fastly network).

## Installation

- Open Extensions tab ([chrome://extensions](chrome://extensions))
- Make sure `Developer mode` is enabled
- Load this folder (extracted from [ZIP file](https://github.com/kcwiki/chrome-extension-dmm/archive/master.zip)) by dropping it there or using `Load unpacked` button
- You should see a new extension enabled (DMM 0.0.2)
- Loading, e.g., [KanColle](http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/) should work now.
