import { DarkTheme, Stack, Theme, ThemeProvider } from "expo-router";

const instatheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    card: "#000000",
    text: "#ffffff",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={instatheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="dms" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
