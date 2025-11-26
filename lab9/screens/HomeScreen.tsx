import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import * as Location from "expo-location";
import { fetchWeather } from "../utils/weatherApi";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation, route }: any) {
   const [weather, setWeather] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [errorMsg, setErrorMsg] = useState("");

   // ⚡ UPDATE khi người dùng nhập thành phố mới
   useEffect(() => {
      if (route?.params?.customWeather) {
         setWeather(route.params.customWeather);
         setLoading(false);
         return;
      }

      getCurrentWeather();
   }, [route?.params?.customWeather]);

   const getCurrentWeather = async () => {
      try {
         setLoading(true);

         const { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            setErrorMsg("Không có quyền truy cập vị trí.");
            setLoading(false);
            return;
         }

         const loc = await Location.getCurrentPositionAsync({});
         const query = `${loc.coords.latitude},${loc.coords.longitude}`;

         const data = await fetchWeather(query);

         if (data.error) {
            setErrorMsg(data.error.message);
         } else {
            setWeather(data);
         }
      } catch (e) {
         setErrorMsg("Không thể tải dữ liệu.");
      } finally {
         setLoading(false);
      }
   };

   if (loading) {
      return (
         <LinearGradient colors={["#74ebd5", "#ACB6E5"]} style={styles.container}>
            <ActivityIndicator size="large" color="white" />
         </LinearGradient>
      );
   }

   if (errorMsg) {
      return (
         <LinearGradient colors={["#74ebd5", "#ACB6E5"]} style={styles.container}>
            <Text style={styles.error}>{errorMsg}</Text>
            <TouchableOpacity style={styles.button} onPress={getCurrentWeather}>
               <Text style={styles.btnText}>Thử lại</Text>
            </TouchableOpacity>
         </LinearGradient>
      );
   }

   return (
      <LinearGradient colors={["#74ebd5", "#ACB6E5"]} style={styles.container}>
         <View style={styles.card}>
            <Text style={styles.city}>{weather.location.name}</Text>
            <Text style={styles.region}>{weather.location.region}</Text>

            <Text style={styles.temp}>{weather.current.temp_c}°C</Text>

            <Image source={{ uri: "https:" + weather.current.condition.icon }} style={styles.icon} />
            <Text style={styles.desc}>{weather.current.condition.text}</Text>

            <Text style={styles.info}>Độ ẩm: {weather.current.humidity}%</Text>
            <Text style={styles.info}>Gió: {weather.current.wind_kph} km/h</Text>
         </View>

         <TouchableOpacity onPress={() => navigation.navigate("City")} style={styles.button}>
            <Text style={styles.btnText}>Tìm thành phố khác</Text>
         </TouchableOpacity>

         <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: { flex: 1, alignItems: "center", justifyContent: "center" },

   card: {
      width: "85%",
      backgroundColor: "rgba(255,255,255,0.25)",
      padding: 20,
      borderRadius: 20,
      alignItems: "center",
      marginBottom: 20,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 10,
   },

   city: { fontSize: 34, color: "white", fontWeight: "bold" },
   region: { fontSize: 18, color: "white", marginBottom: 10 },
   temp: { fontSize: 80, color: "white", fontWeight: "300" },
   icon: { width: 90, height: 90 },
   desc: { fontSize: 20, color: "white", marginTop: 8 },
   info: { fontSize: 18, color: "white", marginTop: 6 },

   button: {
      backgroundColor: "rgba(255,255,255,0.3)",
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 14,
      marginTop: 15,
   },

   btnText: { color: "white", fontSize: 18 },
   error: { color: "white", fontSize: 20, marginBottom: 20 },

   watermark: {
      position: "absolute",
      bottom: 10,
      right: 10,
      color: "rgba(255,255,255,0.6)",
   },
});
