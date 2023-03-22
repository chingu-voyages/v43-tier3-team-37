import { ThemeProvider } from "styled-components";

const coolTheme = {
  // add style here
  colors: {
    softorange: "#e1b168",
    darkgray: "#292e36",
    gray: "#555555",
    darkblue: "#343942",
    lightpink: "#fff8f5",
    white: "#ffffff",
  },
  fonts: ["sans-serif", "Cormorant Infant", "Josefin Sans"],
};

export default function Theme({ children }) {
  return <ThemeProvider theme={coolTheme}>{children}</ThemeProvider>;
}
