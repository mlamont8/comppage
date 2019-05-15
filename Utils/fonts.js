const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Lora:300,400,500,700,900";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const lora = new FontFaceObserver("Lora");

  lora.load().then(() => {
    document.documentElement.classList.add("lora");
  });
};

export default Fonts;
