import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { storyData } from "./data/story";

export default function App() {
  const [index, setIndex] = useState(0);
  const story = storyData[index];

  const chooseOption = (nextIndex: number) => {
    if (nextIndex === -1) {
      setIndex(0); // reset
    } else {
      setIndex(nextIndex);
    }
  };

  const isEnding = story.choice2 === "" || story.next2 === -1;

  return (
    <ImageBackground
      source={require("./assets/forest_bg.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Lớp mờ + gradient trên nền */}
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,40,20,0.9)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Mystery Forest</Text>

          {/* Hộp câu chuyện */}
          <View style={styles.storyBox}>
            <Text style={styles.storyText}>{story.storyText}</Text>
          </View>

          {/* Lựa chọn 1 */}
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => chooseOption(story.next1)}
          >
            <Text style={styles.buttonText}>{story.choice1}</Text>
          </TouchableOpacity>

          {/* Lựa chọn 2 (ẩn nếu ending) */}
          {!isEnding && (
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={() => chooseOption(story.next2)}
            >
              <Text style={styles.buttonText}>{story.choice2}</Text>
            </TouchableOpacity>
          )}

          {/* Progress (chỉ hiển thị nếu chưa ending) */}
          {!isEnding && (
            <Text style={styles.progress}>
              Cảnh {index + 1} / {storyData.length}
            </Text>
          )}

          <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    color: "#E0F2F1",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  storyBox: {
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(200,255,230,0.2)",
  },
  storyText: {
    color: "#E8F5E9",
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 6,
  },
  buttonPrimary: {
    backgroundColor: "rgba(30, 131, 35, 0.9)", // xanh lá đậm
  },
  buttonSecondary: {
    backgroundColor: "#247f29b3",
  },
  buttonText: {
    color: "#E8F5E9",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  progress: {
    marginTop: 16,
    textAlign: "center",
    color: "#B2DFDB",
    fontSize: 14,
  },
  watermark: {
    position: "absolute",
    bottom: 12,
    right: 10,
    color: "rgba(224,242,241,0.7)",
    fontSize: 11,
  },
});
