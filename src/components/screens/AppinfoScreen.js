import React, {useState,useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  scolor,
  pcolor,
  appname,
  rsacode,
  appinfofetch,
  appinfoerror,
  appinfoerrormsg,
  statt,
} from '../redux/selector/appinfoselector';
import {app_info_update} from '../redux/action/appinfoaction';
import Spinner from 'react-native-loading-spinner-overlay';

import tinycolor from 'tinycolor2';
import ColorPicker from 'react-native-material-color-picker';


const AppinfoScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const primary_color = useSelector(pcolor);
  const secondary_color = useSelector(scolor);
  const app_name = useSelector(appname);
  const rsa_code = useSelector(rsacode);
  const stat = useSelector(statt);
  const fetchstatus = useSelector(appinfofetch);
  const errorstatus = useSelector(appinfoerror);
  const errormsg = useSelector(appinfoerrormsg);
  const [name, setname] = useState(app_name);
  const [prcolor, setprcolor] = useState("000000");
  const [secolor, setsecolor] = useState("ffffff");

  useEffect(() => {
   setprcolor(primary_color)
   setsecolor(secondary_color)
  }, [])

  function nee(){
    if (stat) {
        navigation.navigate('Home')
    } else if (errorstatus) {
        Alert.alert(
            "Error",
            "Check ur inputs",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    } else {
    }
  }

  nee()


   const onsubmitapp=()=>{
       if(name==""||prcolor==""||secolor==""){
        Alert.alert(
            "Error",
            "Enter all values",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
       }
       else{
        // console.log(typeof(prcolor)+secolor+rsa_code)
        dispatch(
            app_info_update({
              name,
              prcolor,
              secolor,
              rsa_code
            }),
          );
       }

   }


  const  pchangeColor = (colorRgb ) =>{
    
    //  console.log("pri",colorRgb )
      setprcolor( colorRgb)
    
  } 
  const schangecolor=(colorRgb)=>{
    setsecolor(colorRgb)
    // console.log("sec",colorRgb )
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <Spinner
              visible={fetchstatus}
              textContent={'Loading...'}
            //   textStyle={styles.spinnerTextStyle}
            />
       
      <Text style={{ margin: 20, fontSize: 30 }}>App Info</Text>
      <View>
        <Text style={{ fontSize: 20 }}>App Name</Text>
        <TextInput
          placeholder="App Name"
          value={name}
          onChangeText={(value) => setname(value)}
          style={{ borderWidth: 1, borderColor: "black", margin: 20 }}
        />
        <Text style={{ fontSize: 20 }}>Primary Color</Text>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center" }}>
 <View>
 <TextInput
          placeholder="Primary Color"
          value={prcolor}
          style={{height:50,borderWidth: 1, borderColor: "black", margin: 20}}
        />
 </View>
 <View style={{height:50,width:100,backgroundColor:prcolor}}>

 </View>
        </View>
        <View style={{backgroundColor:"black",alignItems:"center",justifyContent:"center" }}>
      {/* --------------------------------------------------------------------------- */}
                {/* Primary picker */}
                <ColorPicker
                    //  ref={colorPicker}
                    oldColor={prcolor}
                    onColorChange={(color)=>{pchangeColor(color)}}
                    style={{width: 200, height: 200}}/>
      {/* -------------------------------------------------------------------------------------- */}
        </View>
        <Text style={{ fontSize: 20,marginTop:"2%" }}>Secondary Color</Text>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center" }}>
 <View>
 <TextInput
          placeholder="secondary Color"
          value={secolor}
          style={{height:50,borderWidth: 1, borderColor: "black", margin: 20}}
        />
 </View>
 <View style={{height:50,width:100,backgroundColor:secolor}}>

 </View>
        </View>
        <View style={{backgroundColor:"black",alignItems:"center",justifyContent:"center" }}>
       {/* --------------------------------------------------------------------------- */}
                {/* secondary picker */}
                <ColorPicker
                    //  ref={colorPicker}
                    oldColor={secolor}
                    onColorChange={(color)=>{schangecolor(color)}}
                    style={{width: 200, height: 200}}/>
      {/* -------------------------------------------------------------------------------------- */}
        </View>
      </View>
     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:'2%'}}>
         <View>
         <TouchableOpacity
            style={{
              marginTop: 5,
              height: 45,
              width: 150,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              backgroundColor: "#508CF5",
            }}
            onPress={()=>{navigation.navigate('Home')}}>
            <Text style={styles.addToCardBtnText}> Cancel </Text>
          </TouchableOpacity>
         </View>
<View style={{width:"7%"}}></View>
         <View>
         <TouchableOpacity
            style={{
              marginTop: 5,
              height: 45,
              width: 150,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              backgroundColor: "#508CF5",
            }}
             onPress={()=>{onsubmitapp()}}>
            <Text style={styles.addToCardBtnText}>Submit  </Text>
          </TouchableOpacity>

         </View>

     </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  addToCardBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AppinfoScreen;
