import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";

export default function App() {
   const playSound = async (note: number) => {
      const sound = new Audio.Sound();

      try {
         await sound.loadAsync(getSoundFile(note));
         await sound.playAsync();
      } catch (error) {
         console.log("Error playing sound", error);
      }
   };

   // Lấy file âm thanh theo số
   const getSoundFile = (note: number) => {
      switch (note) {
         case 1:
            return require("./assets/note1.wav");
         case 2:
            return require("./assets/note2.wav");
         case 3:
            return require("./assets/note3.wav");
         case 4:
            return require("./assets/note4.wav");
         case 5:
            return require("./assets/note5.wav");
         case 6:
            return require("./assets/note6.wav");
         case 7:
            return require("./assets/note7.wav");
         default:
            return require("./assets/note1.wav");
      }
   };

   // Tạo phím màu (Button)
   const buildKey = (color: string, note: number) => (
      <TouchableOpacity
         style={[styles.key, { backgroundColor: color }]}
         onPress={() => playSound(note)}
      ></TouchableOpacity>
   );

   return (
      <View style={styles.container}>
         {buildKey("#FF5252", 1)}
         {buildKey("#FF9800", 2)}
         {buildKey("#FFEB3B", 3)}
         {buildKey("#4CAF50", 4)}
         {buildKey("#03A9F4", 5)}
         {buildKey("#3F51B5", 6)}
         {buildKey("#9C27B0", 7)}

         <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
   },
   key: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   keyText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
   },
   watermark: {
      position: "absolute",
      bottom: 10,
      right: 10,
      color: "black",
      opacity: 0.6,
      fontSize: 12,
   },
});
