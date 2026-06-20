import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Login",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{ headerShown: true, headerBackVisible: true }}
      />
    </Stack>
  );
};

export default _layout;