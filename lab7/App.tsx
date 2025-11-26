import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { storyData } from "./data/story";

export default function App() {
   const [index, setIndex] = useState(0);

   const chooseOption = (nextIndex: number) => {
      if (nextIndex === -1) {
         setIndex(0);
      } else {
         setIndex(nextIndex);
      }
   };

   const story = storyData[index];

   return (
      <View style={styles.container}>
         <Text style={styles.story}>{story.storyText}</Text>

         <TouchableOpacity style={[styles.button, styles.btn1]} onPress={() => chooseOption(story.next1)}>
            <Text style={styles.btnText}>{story.choice1}</Text>
         </TouchableOpacity>

         {story.choice2 !== "" && (
            <TouchableOpacity style={[styles.button, styles.btn2]} onPress={() => chooseOption(story.next2)}>
               <Text style={styles.btnText}>{story.choice2}</Text>
            </TouchableOpacity>
         )}

         <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#222831",
      padding: 20,
      justifyContent: "center",
   },
   story: {
      color: "white",
      fontSize: 24,
      textAlign: "center",
      marginBottom: 40,
   },
   button: {
      padding: 15,
      borderRadius: 10,
      width: "100%",
      marginVertical: 10,
   },
   btn1: {
      backgroundColor: "#00ADB5",
   },
   btn2: {
      backgroundColor: "#393E46",
   },
   btnText: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
   },
   watermark: {
      position: "absolute",
      bottom: 10,
      right: 10,
      color: "white",
      opacity: 0.5,
      fontSize: 12,
   },
});
