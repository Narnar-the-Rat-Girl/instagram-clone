import type { ReactNode } from "react";
import { Pressable, type PressableProps } from "react-native";

type PropButtonProps = PressableProps & {
  children: ReactNode;
};

export default function PropButton({ children }: PropButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? "rgb(62, 63, 65)" : "transparent",
      })}
    >
      {children}
    </Pressable>
  );
}
