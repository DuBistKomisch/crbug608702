function onLaunched(launchData) {
  chrome.app.window.create('index.html', {
    resizable: false,
    innerBounds: {
      width: 480,
      height: 640
    }
  });
}

chrome.app.runtime.onLaunched.addListener(onLaunched);
