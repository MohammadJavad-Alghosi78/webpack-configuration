import me from "./me.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "me";
  img.width = "458";
  img.src = me;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
