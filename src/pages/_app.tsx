import { StyledTheme } from "@/app/core/theme/StyledTheme";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "../app/globals.scss";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={StyledTheme}>
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </>
  );
}
