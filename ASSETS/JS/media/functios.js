export function endToStart(images) {
  let toFirst = imagesSrc.pop();
  imagesSrc.unshift(toFirst);
}
export function startToEnd(images) {
  let toLast = imagesSrc.shift();
  imagesSrc.push(toLast);
}

export function showImg() {
  let i = 0;
  for (img of images) {
    if (i > imagesSrc.length) i = 0;
    img["src"] = imagesSrc[i];
    i++;
  }
}
