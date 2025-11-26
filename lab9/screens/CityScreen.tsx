import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { fetchWeather } from "../utils/weatherApi";
import { LinearGradient } from "expo-linear-gradient";

export default function CityScreen({ navigation }: any) {
   const [city, setCity] = useState("");
   const [error, setError] = useState("");

   const searchCity = async () => {
      if (!city) return;

      const data = await fetchWeather(city);

      if (data.error) {
         setError("Không tìm thấy địa điểm.");
         return;
      }

      navigation.navigate("Home", { customWeather: data });
   };

   return (
      <LinearGradient colors={["#89f7fe", "#66a6ff"]} style={styles.container}>
         <Text style={styles.title}>Nhập tỉnh / thành phố</Text>

         <TextInput
            style={styles.input}
            placeholder="ví dụ: phu yen, dak lak, ha noi"
            placeholderTextColor="#ddd"
            value={city}
            onChangeText={(t) => {
               setCity(t);
               setError("");
            }}
         />

         {error !== "" && <Text style={styles.error}>{error}</Text>}

         <TouchableOpacity style={styles.button} onPress={searchCity}>
            <Text style={styles.btnText}>Xác nhận</Text>
         </TouchableOpacity>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: { flex: 1, padding: 30, justifyContent: "center" },
   title: { color: "white", fontSize: 28, textAlign: "center", marginBottom: 20 },

   input: {
      backgroundColor: "rgba(255,255,255,0.2)",
      padding: 14,
      borderRadius: 12,
      color: "white",
      fontSize: 18,
   },

   button: {
      marginTop: 20,
      backgroundColor: "rgba(255,255,255,0.3)",
      padding: 14,
      borderRadius: 14,
   },

   btnText: { color: "white", textAlign: "center", fontSize: 20 },
   error: { color: "yellow", marginTop: 10, textAlign: "center" },
});
