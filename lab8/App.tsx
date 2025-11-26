import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function App() {
   const [height, setHeight] = useState("");
   const [weight, setWeight] = useState("");
   const [bmi, setBmi] = useState<null | number>(null);
   const [status, setStatus] = useState("");

   const calculateBMI = () => {
      const h = parseFloat(height);
      const w = parseFloat(weight);

      if (!h || !w || h <= 0 || w <= 0) {
         setStatus("Vui lòng nhập đúng dữ liệu!");
         setBmi(null);
         return;
      }

      const result = w / Math.pow(h / 100, 2);
      setBmi(result);

      if (result < 18.5) setStatus("Thiếu cân");
      else if (result < 25) setStatus("Bình thường");
      else setStatus("Thừa cân");
   };

   return (
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
         <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.wrapper}>
            <Text style={styles.title}>BMI Calculator</Text>

            {/* card */}
            <View style={styles.card}>
               <Text style={styles.label}>Chiều cao (cm)</Text>
               <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Ví dụ: 170"
                  placeholderTextColor="#8aa0b3"
                  value={height}
                  onChangeText={setHeight}
               />

               <Text style={styles.label}>Cân nặng (kg)</Text>
               <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Ví dụ: 60"
                  placeholderTextColor="#8aa0b3"
                  value={weight}
                  onChangeText={setWeight}
               />

               <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                  <Text style={styles.buttonText}>Tính BMI</Text>
               </TouchableOpacity>
            </View>

            {/* result*/}
            {bmi !== null && (
               <View style={styles.resultBox}>
                  <Text style={styles.resultTitle}>Kết quả</Text>
                  <Text style={styles.result}>BMI: {bmi.toFixed(1)}</Text>
                  <Text style={styles.status}>{status}</Text>
               </View>
            )}

            <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
         </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#e9f5ff",
   },
   wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
   },
   title: {
      fontSize: 34,
      color: "#0e4a7b",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 30,
   },

   card: {
      backgroundColor: "rgba(255,255,255,0.9)",
      padding: 20,
      borderRadius: 18,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 4,
   },

   label: {
      color: "#0e4a7b",
      fontSize: 16,
      marginTop: 10,
      fontWeight: "600",
   },

   input: {
      backgroundColor: "#f5faff",
      borderWidth: 1,
      borderColor: "#b6d9ff",
      marginTop: 6,
      padding: 12,
      borderRadius: 10,
      color: "#0e4a7b",
      fontSize: 18,
   },

   button: {
      backgroundColor: "#3ab4f2",
      padding: 14,
      borderRadius: 14,
      marginTop: 20,
   },
   buttonText: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
   },

   resultBox: {
      marginTop: 25,
      backgroundColor: "white",
      padding: 20,
      borderRadius: 18,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
   },
   resultTitle: {
      fontSize: 22,
      color: "#0e4a7b",
      fontWeight: "bold",
      textAlign: "center",
   },
   result: {
      fontSize: 28,
      color: "#3ab4f2",
      textAlign: "center",
      marginTop: 10,
      fontWeight: "700",
   },
   status: {
      fontSize: 22,
      textAlign: "center",
      marginTop: 10,
      color: "#0e4a7b",
   },

   watermark: {
      position: "absolute",
      bottom: 14,
      right: 10,
      color: "#447a9c",
      fontSize: 12,
   },
});
