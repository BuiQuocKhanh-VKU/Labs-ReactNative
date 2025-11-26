import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { questions } from "./data/questions";

export default function App() {
   const [index, setIndex] = useState(0);
   const [score, setScore] = useState(0);

   const handleAnswer = (choiceIndex: number) => {
      const correct = questions[index].answer;

      if (choiceIndex === correct) {
         setScore(score + 1);
      }

      if (index + 1 < questions.length) {
         setIndex(index + 1);
      } else {
         Alert.alert(
            "Hoàn Thành Quiz!",
            `Bạn trả lời đúng ${score + (choiceIndex === correct ? 1 : 0)} / ${questions.length}`,
            [
               {
                  text: "Làm lại",
                  onPress: resetQuiz,
               },
            ]
         );
      }
   };

   const resetQuiz = () => {
      setIndex(0);
      setScore(0);
   };

   return (
      <LinearGradient
         colors={["#49da4eff", "#4a854cff", "#0f2d8dff"]}
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 1 }}
         style={styles.container}
      >
         <Text style={styles.title}>IT Quiz - Khanh Bui</Text>

         <View style={styles.questionBox}>
            <Text style={styles.question}>{questions[index].question}</Text>
         </View>

         {questions[index].options.map((opt, i) => (
            <TouchableOpacity key={i} style={styles.option} onPress={() => handleAnswer(i)}>
               <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
         ))}

         <Text style={styles.progress}>
            Câu {index + 1} / {questions.length}
         </Text>

         <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
      </LinearGradient>
   );
}

// ---- STYLES ----
const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      color: "white",
      fontSize: 28,
      marginBottom: 20,
      fontWeight: "bold",
   },
   questionBox: {
      backgroundColor: "rgba(0,0,0,0.25)",
      padding: 20,
      borderRadius: 12,
      marginBottom: 30,
      width: "100%",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.2)",
   },
   question: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
   },
   option: {
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.15)",
      padding: 15,
      marginVertical: 8,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.2)",
   },
   optionText: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
   },
   progress: {
      color: "white",
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
