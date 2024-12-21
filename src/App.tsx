import { Textarea } from "@mantine/core";
import { sanatizeColorCodes } from "./utils";

function App() {
  function onChange(str) {
    console.log(sanatizeColorCodes(str));
  }

  return (
    <>
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
    </>
  );
}

export default App;
