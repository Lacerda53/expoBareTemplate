import React from "react";
import { useTheme } from "styled-components";
import { Onboarding } from "../screens/Onboarding";
import { Home } from "../screens/Home";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const { Navigator, Screen } = createSharedElementStackNavigator();

export const StackRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};
