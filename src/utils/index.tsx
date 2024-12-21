type ColorCodes = string;

function isValidHEX(code: string) {
  const regex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
  return regex.test(code);
}

function sanatizeHEXCodes(colorCodes: ColorCodes): Set<ColorCodes> {
  const codes = new Set<ColorCodes>();

  colorCodes
    .split(" ")
    .map((code) => code.trim())
    .filter((code) => isValidHEX(code))
    .forEach((code) => codes.add(code));

  return codes;
}

export function sanatizeColorCodes(colorCodes: ColorCodes): Set<ColorCodes> {
  // #88472B
  // #AA6244
  // #5A4634
  // #331F15
  // #C7A792
  // #F2E6D9
  // #FAF5F0
  // #DDBCA7

  return sanatizeHEXCodes(colorCodes);
}
