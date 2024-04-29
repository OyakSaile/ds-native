import { Pressable, StyleSheet } from "react-native";
import { ButtonPropsI } from "./types";

export default function Button({ ...props }: ButtonPropsI) {
  return <Pressable {...props} style={styles.button}></Pressable>;
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: "blue",
    color: "white",
  },
});
