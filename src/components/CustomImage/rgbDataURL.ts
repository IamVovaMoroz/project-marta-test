const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) => {
  const prefix = "data:image/gif;base64,R0lGODlhAQABAPAA";
  const postfix = "yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
  const main = triplet(0, r, g) + triplet(b, 255, 255);

  return `${prefix}${main}/${postfix}`;
};
