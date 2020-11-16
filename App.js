/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';
// import { blue, grey, white } from 'ansi-colors';

const App: () => React$Node = () => {
const [randomColor, setRandomColor] = useState("rgb(32,0,126)");
const [anotherVar, setAnother] = useState(true);

const changeBG=()=>{
  let color = "rgb("+
   Math.floor(Math.random() *256)+
   ","+
   Math.floor(Math.random() *256)+
   ","+
   Math.floor(Math.random() *256)+
   ")";
 setRandomColor(color);
}

const changeReset=()=>{
  let color = "black";
 setRandomColor(color);
}

  return (
    <>
      <StatusBar backgroundColor={randomColor}></StatusBar>
      <View style={[styles.container,{backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={changeBG}>
      <Text style={{color:"red",textAlign:"center"}}>Mahesh Lakkapally</Text>
      <Text style={styles.text}>Change BG-COLOR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeReset}>
      <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
  justifyContent:"center",  },
  text:{
    fontSize:30,
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal:40,
    color: "#FFFFFF",
    borderRadius:15,
    textTransform: "uppercase"
  },
  reset:{
    fontSize:30,
    backgroundColor: "lightgrey",
    paddingVertical: 10,
    paddingHorizontal:40,
    color: "black",
    borderRadius:15,
    textTransform: "uppercase"
  }
});

export default App;
