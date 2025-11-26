import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    setDice1(random1);
    setDice2(random2);
  };

  const getDiceImage = (value: number) => {
    switch (value) {
      case 1: return require('./assets/dice1.png');
      case 2: return require('./assets/dice2.png');
      case 3: return require('./assets/dice3.png');
      case 4: return require('./assets/dice4.png');
      case 5: return require('./assets/dice5.png');
      case 6: return require('./assets/dice6.png');
      default: return require('./assets/dice1.png');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Dice Game 🎲</Text>

      <View style={styles.diceContainer}>
        <Image style={styles.dice} source={getDiceImage(dice1)} />
        <Image style={styles.dice} source={getDiceImage(dice2)} />
      </View>

      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.btnText}>Roll Dice</Text>
      </TouchableOpacity>

      {/* Watermark */}
      <Text style={styles.watermark}>Bùi Quốc Khánh - 23IT.B095</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  diceContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dice: {
    width: 120,
    height: 120,
    borderRadius:25,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#26a69a',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  btnText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  watermark: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    color: 'white',
    opacity: 0.6,
    fontSize: 12,
  },
});
