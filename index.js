chrome.webRequest.onBeforeSendHeaders.addListener(
  details => {
    for (const header of details.requestHeaders) {
      if (header.name === 'Cookie') {
        header.value = header.value.replace('ckcy=2', 'ckcy=1')
        break
      }
    }
    return { requestHeaders: details.requestHeaders }
  },
  { urls: ['*://*.dmm.com/*'] },
  ['blocking', 'requestHeaders', 'extraHeaders'],
)

chrome.webRequest.onBeforeRequest.addListener(
  details => ({ redirectUrl: `https://kcwiki.github.io/cache/${details.url.split('203.104.209.7/')[1]}` }),
  {
    urls: ['*://203.104.209.7/*'],
    types: ['main_frame', 'sub_frame', 'font', 'image', 'script', 'stylesheet'],
  },
  ['blocking'],
)
