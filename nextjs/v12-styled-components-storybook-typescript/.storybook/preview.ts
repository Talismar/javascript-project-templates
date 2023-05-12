import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/globalStyles";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: "default",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
