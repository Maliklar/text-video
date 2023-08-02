// Creating needed HTML elements

const video = document.createElement("video");
const canvas = document.createElement("canvas");
const text = document.getElementById("pre") as HTMLPreElement;
const playButton = document.getElementById("playButton") as HTMLButtonElement;
// Initialize canvas context
const context = canvas.getContext("2d");

// Characters ordered based on their brightness (This one may need to change)
const characters = `$@oahk-_+~i"^'.`.split("");
characters.push("&nbsp;"); // Space entity

let videoString = "";

// Handle when video is playing
video.onplay = () => {
  // Setting video resolution
  const width = 180;
  const height = 60;

  const frameCapture = () => {
    // Take the current frame on the video and draw it as an image on the canvas
    context.drawImage(video, 0, 0, width, height);

    // Extract the frame image from canvas as bit representation Uint8ClampedArray
    const frame = context.getImageData(0, 0, width, height);

    const pixels = frame.data;
    // Empty video string from previous frame data
    videoString = "";

    // The data will be: [r, g, b, a, r, g, b, a, ...] pixels
    for (let i = 0, j = 0; i < pixels.length; i += 4, j++) {
      // Extract Red, Green, and Blue from each pixel (Ignore the alpha)
      const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];

      // Convert the RGB to Grayscale
      const gray = (r + g + b) / 3;

      // get the brightness from the grayscale as a percentage
      const gPercent = gray / 255;

      // Get the character based on brightness
      const index = Math.floor((characters.length - 1) * gPercent);
      videoString += characters[index] || ".";

      if (j % width === 1) videoString += "<br/>";
    }

    text.innerHTML = videoString;

    setTimeout(() => {
      frameCapture();
    });
  };

  // Call frame capture recursively based on the event queue (timeout)
  frameCapture();
};

// User clicks on play button
playButton.onclick = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    video.srcObject = stream;
  } catch {
    alert("Camera permissions are needed");
  }
  setTimeout(() => {
    video.play();
  }, 1000);
};
