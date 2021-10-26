import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() 
{
  return (
    <View style={styles.container}>
     <Image
      style={styles.imageStyle}
      source={require("./assets/biking.jpg")}>
      </Image>
      <Text style={styles.welcomeText}>
      Welcome to 
    </Text>
      <Text style={styles.powerText}>
      Power Bike Shop
    </Text>
    <TouchableOpacity style={styles.googleButton}>
      <Text style={styles.buttonText}>
      Login with Gmail
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.appleTextBox}>
      <Text style={styles.secondButtonText}>
      Login with Apple
      </Text>
    </TouchableOpacity>
    <View style={styles.bottomView}>
    <Text style={styles.bottomText}>Not a member? </Text>
    <Text style={styles.orangeText}> Sign up </Text>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  imageStyle: {
    width: 210,
    height: 230,
    borderRadius: 20,
    transform: [{ rotate: "-30deg" }],
    marginBottom: 70,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  powerText: {
    fontSize: 32,
    textAlign: "center", 
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center", 
    
  },
  googleButton: {
    backgroundColor: "#D3D3D3",
    padding: 12,
    borderRadius: 13,
    marginTop: 20,
    width: "77%" ,

  },
  appleTextBox: {
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 13,
    marginTop: 20,
    width: "77%" ,

  },
  secondButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center", 
  },
  bottomText: {
    marginTop: 15,
    color: "#808080"
  },
  bottomView: {
    flexDirection: "row",
  },
  orangeText: {
    marginTop: 15,
    color: "#FF5733",
  },
}
);
 