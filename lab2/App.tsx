import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
   return (
      <View style={styles.container}>
         <Image source={require("./assets/avatar.jpg")} style={styles.avatar} />

         <Text style={styles.name}>Bùi Quốc Khánh</Text>

         <Text style={styles.studentId}>23IT.B095</Text>

         <View style={styles.divider} />

         <View style={styles.infoBox}>
            <Text style={styles.infoText}>📞 0796 992 146</Text>
         </View>

         <View style={styles.infoBox}>
            <Text style={styles.infoText}>✉️ khanhbq.23itb@vku.udn.vn</Text>
         </View>

         {/* Watermark */}
         <Text style={styles.watermark}>Bui Quoc Khanh - 23IT.B095</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#166f88ff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
   },

   avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: "#c7e469ff",
   },

   name: {
      fontSize: 32,
      fontWeight: "bold",
      color: "white",
      marginTop: 20,
   },

   studentId: {
      fontSize: 20,
      color: "#d0e6f7",
      marginBottom: 10,
   },

   divider: {
      width: 200,
      height: 1,
      backgroundColor: "#fff",
      marginVertical: 20,
   },

   infoBox: {
      backgroundColor: "white",
      padding: 12,
      width: "90%",
      borderRadius: 8,
      marginTop: 10,
      alignItems: "center",
   },

   infoText: {
      fontSize: 16,
      color: "#333",
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
