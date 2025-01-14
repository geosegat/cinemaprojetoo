import "@/styles/globals.css";
import theme from "../styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
