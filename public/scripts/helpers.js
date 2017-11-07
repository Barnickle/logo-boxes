const rgb2hsv = function(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const min = Math.min(Math.min(r, g), b);
  const max = Math.max(Math.max(r, g), b);
  const delta = max - min;

  let saturation, hue;

  // Hue
  if (max == min) {
    hue = 0;
  } else if (max == r) {
    hue = (60 * ((g - b) / (max - min))) % 360;
  } else if (max == g) {
    hue = 60 * ((b - r) / (max - min)) + 120;
  } else if (max == b) {
    hue = 60 * ((r - g) / (max - min)) + 240;
  }

  if (hue < 0) {
    hue += 360;
  }

  // Saturation
  if (max == 0) {
    saturation = 0;
  } else {
    saturation = 1 - min / max;
  }

  return [Math.round(hue), Math.round(saturation), Math.round(max)];
};

window.getHueParamsFromRGB = function(r, g, b) {
  var hsv = rgb2hsv(r, g, b);
  return {
    hue: 182 * hsv[0],
    sat: Math.ceil(254 * hsv[1]),
    bri: Math.ceil(254 * hsv[2])
  };
};
