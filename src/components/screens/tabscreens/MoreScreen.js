/* ==================================
   NAME : Suchith Ponnuru
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */ 
   

import React, { Component } from "react";
import { View,Text,StyleSheet,SafeAreaView } from "react-native";

const MoreScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text 
          style={{ 
            fontSize: 25, 
            textAlign: 'center', 
            marginBottom: 16
            }}>
              More Screen!
              </Text>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MoreScreen;