import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      setDisplay("");
      //calculateResult();
      setResult("");
    } else if (value === "⌫") {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      const formattedDisplay = display.replace(/÷/g, "/").replace(/×/g, "*");
      const evalResult = eval(formattedDisplay);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const renderButton = (value, style = styles.button) => (
    <TouchableOpacity style={style} onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display || "0"}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton("AC", styles.functionButton)}
          {renderButton("%", styles.functionButton)}
          {renderButton("⌫", styles.functionButton)}
          {renderButton("÷", styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {["7", "8", "9"].map((num) => renderButton(num))}
          {renderButton("×", styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {["4", "5", "6"].map((num) => renderButton(num))}
          {renderButton("-", styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {["1", "2", "3"].map((num) => renderButton(num))}
          {renderButton("+", styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton("00")}
          {renderButton("0")}
          {renderButton(".")}
          {renderButton("=", styles.equalsButton)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignContent: "center",
    backgroundColor: "#e6e6e6",
    padding: 20,
  },
  displayContainer: {
    backgroundColor: "#e6e6e6",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "flex-end",
  },
  displayText: {
    fontSize: 40,
    color: "#333",
  },
  resultText: {
    fontSize: 28,
    color: "#666",
    marginTop: 10,
    //backgroundColor: "#dcdcdc",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 80,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  functionButton: {
    flex: 1,
    height: 80,
    margin: 5,
    backgroundColor: "#dcdcdc",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  operatorButton: {
    flex: 1,
    height: 80,
    margin: 5,
    backgroundColor: "#f2a33a",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  equalsButton: {
    flex: 1,
    height: 80,
    margin: 5,
    backgroundColor: "#3cba54",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    //color: "#333",
  },
  buttonText: {
    fontSize: 28,
    color: "#333",
  },
});

