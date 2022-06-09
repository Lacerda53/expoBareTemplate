import React from "react";
import { theme } from "../../global/theme";
import { MaterialCommunityIcon, MaterialIcon } from "./styles";

export type CustomIconProps = {
  name: string;
  color?: keyof typeof theme.colors;
  typeIcon?: "material" | "materialCommunity";
  margin?: string;
  size?: number;
};

export const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  color = "gray",
  margin = "0",
  typeIcon,
  size = 24,
  ...rest
}) => {
  switch (typeIcon) {
    case "materialCommunity":
      return (
        <MaterialCommunityIcon
          name={name}
          color={color}
          size={size}
          margin={margin}
          {...rest}
        />
      );

    default:
      return (
        <MaterialIcon
          name={name}
          color={color}
          size={size}
          margin={margin}
          {...rest}
        />
      );
  }
};
