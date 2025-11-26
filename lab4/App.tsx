import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
   const [ballNumber, setBallNumber] = useState(1);

   // Random ball from 1 → 5
   const shakeBall = () => {
      const random = Math.floor(Math.random() * 5) + 1;
      setBallNumber(random);
   };

   const getBallImage = (value: number) => {
      switch (value) {
         case 1:
            return require("./assets/ball1.png");
         case 2:
            return require("./assets/ball2.png");
         case 3:
            return require("./assets/ball3.png");
         case 4:
            return require("./assets/ball4.png");
         case 5:
            return require("./assets/ball5.png");
         default:
            return require("./assets/ball1.png");
      }
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Magic 8 Ball</Text>

         <TouchableOpacity onPress={shakeBall}>
            <Image style={styles.ball} source={getBallImage(ballNumber)} />
         </TouchableOpacity>

         <Text style={styles.hint}>Tap the ball to get your answer!</Text>

         {/* Watermark */}
         <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#964545ff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
   },
   title: {
      fontSize: 32,
      color: "white",
      marginBottom: 20,
      fontWeight: "bold",
   },
   ball: {
      width: 250,
      height: 250,
   },
   hint: {
      color: "#ccc",
      marginTop: 20,
      fontSize: 16,
   },
   watermark: {
      position: "absolute",
      bottom: 20,
      right: 10,
      color: "white",
      opacity: 0.6,
      fontSize: 12,
   },
});
