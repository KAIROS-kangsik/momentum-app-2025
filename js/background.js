const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
const backgroundImage = document.createElement("img");

function chooseImage() {
  const chooseImageNumber = Math.floor(Math.random() * images.length);
  backgroundImage.src = `img/${images[chooseImageNumber]}`;
  document.body.appendChild(backgroundImage);
}

chooseImage();
