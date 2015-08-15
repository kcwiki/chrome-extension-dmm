
Chrome extension for bypassing the area error on [DMM](http://www.dmm.com).

# Usage

* Clear DMM cookies (`Settings` -> `Content settings...` -> `All cookies and site data...` -> search for `dmm` -> `Remove all shown`) and don't touch them with other extensions (e.g. disable EditThisCookie).
* Drop this folder (`DMM-master`, extract it from [ZIP](https://github.com/gakada/DMM/archive/master.zip) file) to Extensions tab ([chrome://extensions/](chrome://extensions/), you can also use `Load unpacked extension...` button here, make sure `Developer mode` is checked), you should see a new extension enabled (DMM 0.0.1).
* Open [http://www.dmm.com](http://www.dmm.com), choose Japanese language and login.

# Troubleshooting

If you still have problems:

* Create a new directory.
* Execute `"full/path/to/chrome.exe" --user-data-dir="full/path/to/new/directory"`.
* Follow Usage section (no need to clear DMM cookies).
* Open [Network](https://developers.google.com/web/tools/setup/workspace/setup-devtools#network-panel-monitor-network-performance) panel.
* Visit a page and have the area error.
* Copy [HTTP headers](https://developers.google.com/web/tools/profile-performance/network-performance/resource-loading#http-headers) for every request until `http://www.dmm.com/top/-/error/area/`.
* Report it with these headers (make sure there is no API token, just in case).
