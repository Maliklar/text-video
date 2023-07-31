(async () => {
  const video = document.getElementById("video") as HTMLVideoElement;
  const canvas = document.createElement("canvas");
  const text = document.getElementById("p") as HTMLParagraphElement;

  document.body.append(canvas);

  const context = canvas.getContext("2d");

  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  video.srcObject = stream;

  let string = "";

  video.onplay = (e) => {
    const width = video.videoWidth / 2;
    const height = video.videoHeight / 2;

    const timerCallback = () => {
      context.drawImage(video, 0, 0, width, height);

      const frame = context.getImageData(0, 0, width, height, {
        colorSpace: "display-p3",
      });
      canvas.height = height;
      canvas.width = width;
      const data = frame.data;
      string = "";

      for (let i = 0, j = 0; i < data.length; i += 4, j++) {
        const red = data[i + 0];
        const green = data[i + 1];
        const blue = data[i + 2];
        const gray = (red + green + blue) / 3;
        data[i + 0] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;

        let char = "_";
        if (gray > 80) {
          char = ".";
        }
        if (gray > 100) {
          char = "*";
        }
        if (gray > 150) {
          char = "$";
        }
        if (gray > 200) {
          char = "@";
        }

        string += char;
        if (j % 320 === 1) string += "<br/>";
      }
      text.innerHTML = string;
      context.putImageData(frame, 0, 0);

      setTimeout(() => {
        timerCallback();
      });
    };
    timerCallback();
  };
  video.controls = true;

  setTimeout(() => {
    video.play();
  }, 400);
})();
