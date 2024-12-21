import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

const colors: MantineColorsTuple = [
  "#e6f5ff",
  "#d0e6ff",
  "#9ecbfc",
  "#6aaefb",
  "#4296fa",
  "#2c86fa",
  "#1f7ffb",
  "#126de1",
  "#0060c9",
  "#0053b2",
];

const theme = createTheme({
  colors: {
    colorScheme: colors,
  },
  primaryColor: "colorScheme",
});

export default function ThemeProvider({
  children,
}: {
  children: JSX.Element | null;
}) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
