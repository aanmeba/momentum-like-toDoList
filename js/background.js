async function getImage() {
  const response = await fetch(
    "https://api.pexels.com/v1/search?query=nature",
    {
      headers: {
        Authorization:
          "563492ad6f91700001000001050bbe3060bd49dd92a6744efc808653",
      },
    }
  );
  const data = await response.json();
  return data.photos;
}

const printImage = (photosArr) => {
  const chosenImage = photosArr[Math.floor(Math.random() * photosArr.length)];
  const imgSrc = chosenImage.src.landscape;
  const bodyStyle = document.body.style;

  const photoAlt = document.querySelector("#photo-info span:first-child");
  const photographer = document.querySelector("#photo-info span:last-child");

  photoAlt.innerText = chosenImage.alt;
  photographer.innerText = `© ${chosenImage.photographer}`;

  bodyStyle.backgroundImage = `linear-gradient(90deg, transparent, transparent), url('${imgSrc}')`;
  bodyStyle.backgroundRepeat = "no-repeat";
  bodyStyle.backgroundSize = "cover";
};

getImage()
  .then(printImage)
  .catch((e) => console.log(e));
