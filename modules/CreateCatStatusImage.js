 export function createImage(src, alt) {
  const result = document.querySelector(".result");
  console.log("createImage");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  result.appendChild(img);
}
