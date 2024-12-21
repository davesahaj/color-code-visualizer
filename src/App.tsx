import { Textarea } from "@mantine/core";
import { sanatizeColorCodes } from "./utils";
import { Palette } from "./components/Palette";
import classes from "./app.module.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState<string>("");

  function onChange(str: string) {
    setState(str);
  }

  return (
    <div className={classes["container"]}>
      <Textarea
        size="md"
        label="Paste color codes"
        description="supported formats are RGB/HEX/HSL/CSS"
        placeholder={`"#e6f5ff","#d0e6ff#9ecbfc,1f7ffb",hsl(0, 100%, 50%)`}
        minRows={6}
        maxRows={20}
        autosize
        onChange={(e) => onChange(e.target.value)}
      />
      <Palette colorCodes={sanatizeColorCodes(state)} />
    </div>
  );
}

export default App;
