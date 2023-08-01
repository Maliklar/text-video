(async () => {
  const video = document.createElement("video");
  const canvas = document.createElement("canvas");
  const text = document.getElementById("p") as HTMLPreElement;
  const context = canvas.getContext("2d");

  const characters = `$@B%8&WM#*_+~i!lI;:,'.`.split("");
  characters.push("&nbsp;");

  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  video.srcObject = stream;

  let string = "";

  video.onplay = () => {
    const width = 120;
    const height = 60;

    const timer = () => {
      context.drawImage(video, 0, 0, width, height);
      const frame = context.getImageData(0, 0, width, height);

      canvas.height = height;
      canvas.width = width;
      const data = frame.data;
      string = "";

      for (let i = 0, j = 0; i < data.length; i += 4, j++) {
        const r = data[i + 0];
        const g = data[i + 1];
        const b = data[i + 2];
        const gray = (r + g + b) / 3;
        const gPercent = gray / 255;
        const index = Math.floor(characters.length * gPercent);
        string += characters[index] || ".";

        if (j % width === 1) string += "<br/>";
      }

      text.innerHTML = string;

      context.putImageData(frame, 0, 0);

      setTimeout(() => timer());
    };
    timer();
  };
  video.controls = true;

  setTimeout(() => {
    video.play();
  }, 1000);
})();
