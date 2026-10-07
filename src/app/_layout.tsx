import { DarkTheme, Stack, Theme, ThemeProvider } from "expo-router";

const instatheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#0b0e15",
    card: "#0b0e15",
    text: "#ffffff",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={instatheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
