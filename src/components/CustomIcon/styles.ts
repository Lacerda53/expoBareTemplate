import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export type CustomIconStylesProps = {
  margin: string;
  color: string;
};

export const MaterialIcon = styled(MaterialIcons)<CustomIconStylesProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray};
  margin: ${({ margin }) => margin || 0};
`;

export const MaterialCommunityIcon = styled(
  MaterialCommunityIcons
)<CustomIconStylesProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray};
  margin: ${({ margin }) => margin || 0};
`;
