import "styled-components";
import { theme } from "../global/theme";

type ColorsProps = typeof theme.colors & {
  [key: string]: string;
};

type FontsProps = typeof theme.fonts & {
  [key: string]: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsProps;
    fonts: FontsProps;
  }
}
