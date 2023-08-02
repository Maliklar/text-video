(self["webpackChunktext_cam"] = self["webpackChunktext_cam"] || []).push([["main"],{

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ (function() {

// Creating needed HTML elements
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var video = document.createElement("video");
var canvas = document.createElement("canvas");
var text = document.getElementById("pre");
var playButton = document.getElementById("playButton");
// Initialize canvas context
var context = canvas.getContext("2d");
// Characters ordered based on their brightness (This one may need to change)
var characters = "$@oahk-_+~i\"^'.".split("");
characters.push("&nbsp;"); // Space entity
var videoString = "";
// Handle when video is playing
video.onplay = function () {
    // Setting video resolution
    var width = 180;
    var height = 60;
    var frameCapture = function () {
        // Take the current frame on the video and draw it as an image on the canvas
        context.drawImage(video, 0, 0, width, height);
        // Extract the frame image from canvas as bit representation Uint8ClampedArray
        var frame = context.getImageData(0, 0, width, height);
        var pixels = frame.data;
        // Empty video string from previous frame data
        videoString = "";
        // The data will be: [r, g, b, a, r, g, b, a, ...] pixels
        for (var i = 0, j = 0; i < pixels.length; i += 4, j++) {
            // Extract Red, Green, and Blue from each pixel (Ignore the alpha)
            var _a = [pixels[i], pixels[i + 1], pixels[i + 2]], r = _a[0], g = _a[1], b = _a[2];
            // Convert the RGB to Grayscale
            var gray = (r + g + b) / 3;
            // get the brightness from the grayscale as a percentage
            var gPercent = gray / 255;
            // Get the character based on brightness
            var index = Math.floor((characters.length - 1) * gPercent);
            videoString += characters[index] || ".";
            if (j % width === 1)
                videoString += "<br/>";
        }
        text.innerHTML = videoString;
        setTimeout(function () {
            frameCapture();
        });
    };
    // Call frame capture recursively based on the event queue (timeout)
    frameCapture();
};
// User clicks on play button
playButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
    var stream, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                        video: true,
                    })];
            case 1:
                stream = _b.sent();
                video.srcObject = stream;
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                alert("Camera permissions are needed");
                return [3 /*break*/, 3];
            case 3:
                setTimeout(function () {
                    video.play();
                }, 1000);
                return [2 /*return*/];
        }
    });
}); };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LWNhbS8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0aW5nIG5lZWRlZCBIVE1MIGVsZW1lbnRzXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX3RoaXMgPSB0aGlzO1xudmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xudmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG52YXIgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlXCIpO1xudmFyIHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIik7XG4vLyBJbml0aWFsaXplIGNhbnZhcyBjb250ZXh0XG52YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBDaGFyYWN0ZXJzIG9yZGVyZWQgYmFzZWQgb24gdGhlaXIgYnJpZ2h0bmVzcyAoVGhpcyBvbmUgbWF5IG5lZWQgdG8gY2hhbmdlKVxudmFyIGNoYXJhY3RlcnMgPSBcIiRAb2Foay1fK35pXFxcIl4nLlwiLnNwbGl0KFwiXCIpO1xuY2hhcmFjdGVycy5wdXNoKFwiJm5ic3A7XCIpOyAvLyBTcGFjZSBlbnRpdHlcbnZhciB2aWRlb1N0cmluZyA9IFwiXCI7XG4vLyBIYW5kbGUgd2hlbiB2aWRlbyBpcyBwbGF5aW5nXG52aWRlby5vbnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2V0dGluZyB2aWRlbyByZXNvbHV0aW9uXG4gICAgdmFyIHdpZHRoID0gMTgwO1xuICAgIHZhciBoZWlnaHQgPSA2MDtcbiAgICB2YXIgZnJhbWVDYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUYWtlIHRoZSBjdXJyZW50IGZyYW1lIG9uIHRoZSB2aWRlbyBhbmQgZHJhdyBpdCBhcyBhbiBpbWFnZSBvbiB0aGUgY2FudmFzXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgZnJhbWUgaW1hZ2UgZnJvbSBjYW52YXMgYXMgYml0IHJlcHJlc2VudGF0aW9uIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgICAgIHZhciBmcmFtZSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB2YXIgcGl4ZWxzID0gZnJhbWUuZGF0YTtcbiAgICAgICAgLy8gRW1wdHkgdmlkZW8gc3RyaW5nIGZyb20gcHJldmlvdXMgZnJhbWUgZGF0YVxuICAgICAgICB2aWRlb1N0cmluZyA9IFwiXCI7XG4gICAgICAgIC8vIFRoZSBkYXRhIHdpbGwgYmU6IFtyLCBnLCBiLCBhLCByLCBnLCBiLCBhLCAuLi5dIHBpeGVsc1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQsIGorKykge1xuICAgICAgICAgICAgLy8gRXh0cmFjdCBSZWQsIEdyZWVuLCBhbmQgQmx1ZSBmcm9tIGVhY2ggcGl4ZWwgKElnbm9yZSB0aGUgYWxwaGEpXG4gICAgICAgICAgICB2YXIgX2EgPSBbcGl4ZWxzW2ldLCBwaXhlbHNbaSArIDFdLCBwaXhlbHNbaSArIDJdXSwgciA9IF9hWzBdLCBnID0gX2FbMV0sIGIgPSBfYVsyXTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIFJHQiB0byBHcmF5c2NhbGVcbiAgICAgICAgICAgIHZhciBncmF5ID0gKHIgKyBnICsgYikgLyAzO1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBicmlnaHRuZXNzIGZyb20gdGhlIGdyYXlzY2FsZSBhcyBhIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIHZhciBnUGVyY2VudCA9IGdyYXkgLyAyNTU7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGNoYXJhY3RlciBiYXNlZCBvbiBicmlnaHRuZXNzXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKChjaGFyYWN0ZXJzLmxlbmd0aCAtIDEpICogZ1BlcmNlbnQpO1xuICAgICAgICAgICAgdmlkZW9TdHJpbmcgKz0gY2hhcmFjdGVyc1tpbmRleF0gfHwgXCIuXCI7XG4gICAgICAgICAgICBpZiAoaiAlIHdpZHRoID09PSAxKVxuICAgICAgICAgICAgICAgIHZpZGVvU3RyaW5nICs9IFwiPGJyLz5cIjtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IHZpZGVvU3RyaW5nO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lQ2FwdHVyZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIENhbGwgZnJhbWUgY2FwdHVyZSByZWN1cnNpdmVseSBiYXNlZCBvbiB0aGUgZXZlbnQgcXVldWUgKHRpbWVvdXQpXG4gICAgZnJhbWVDYXB0dXJlKCk7XG59O1xuLy8gVXNlciBjbGlja3Mgb24gcGxheSBidXR0b25cbnBsYXlCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RyZWFtLCBfYTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc3RyZWFtID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkNhbWVyYSBwZXJtaXNzaW9ucyBhcmUgbmVlZGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==