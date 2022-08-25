var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var warningBanner = document.querySelector("#unity-warning");

var buildUrl = "Build";
var loaderUrl = buildUrl + "/WebBuilds.loader.js";
var config = {
  dataUrl: buildUrl + "/WebBuilds.data.unityweb",
  frameworkUrl: buildUrl + "/WebBuilds.framework.js.unityweb",
  codeUrl: buildUrl + "/WebBuilds.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Coopers",
  productName: "WebPage_Data_Test",
  productVersion: "1.0",
};

canvas.style.width = "900px";
canvas.style.height = "500px";

loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  })
    .then((unityInstance) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    })
    .catch((message) => {
      alert(message);
    });
};
document.body.appendChild(script);
