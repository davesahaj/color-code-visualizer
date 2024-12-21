import classes from "./palette.module.css";

type Props = { colorCodes: Set<ColorCodes> };

const Palette = ({ colorCodes }: Props) => {
  function copyCode(code: string) {
    window.navigator.clipboard.writeText(code);
  }

  return Array.from(colorCodes).map((code) => (
    <div
      className={classes["grid-cell"]}
      style={{ background: code }}
      onClick={() => copyCode(code)}
    >
      {code}
    </div>
  ));
};

export { Palette };
