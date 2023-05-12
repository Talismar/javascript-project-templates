import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

interface StyleContextProps {
  children: ReactNode;
}

export default function StyleContext({ children }: StyleContextProps) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
