import React from "react";
import { Linking } from "react-native";
import { CustomText } from "../../components/CustomText";
import { Flex } from "../../components/Flex";
import { MainButton } from "../../components/MainButton";
import { Container } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <CustomText size={24}>Vamos começar?</CustomText>
      </Flex>
      <MainButton
        isFooter
        onPress={() => Linking.openURL("https://www.github.com/lacerda53/")}
      >
        Github
      </MainButton>
    </Container>
  );
};
