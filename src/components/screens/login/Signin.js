import React, {memo, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {usersignup} from '../../redux/action/useraction'
import { useSelector, useDispatch } from 'react-redux';
import {signupfetch, error, error_msg,user_id} from '../../redux/selector/userselector';
import {signup} from "../../../constants/validate"
import {signerror} from '../../../constants/alertmsg';
import AlertScreen from '../../CustomComponents/AlertScreen';
import Spinner from 'react-native-loading-spinner-overlay';
const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const fetchstatus = useSelector(signupfetch);
  const errorstatus = useSelector(error);
  const uid = useSelector(user_id);
  const errormsg = useSelector(error_msg);
  const [alertscreen, setalertscreen] = useState('');
  const [alertmsg, setalertmsg] = useState('');
  const [visiblemodal, setvisiblemodal] = useState(false);
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [copass, setcopass] = useState("")
  const [mobileno, setmobileno] = useState("")



  // function n(){
  //   if (uid != '') {
  //     navigation.navigate('main', {screen: 'TabNav'});
  //   } else if (errorstatus) {
  //     setalertmsg(errormsg);
  //     setalertscreen(loginerror);
  //     setvisiblemodal(true);
  //   } else {
  //   }
  // }

  // n()

  const onmodalchange = () => {
    setvisiblemodal(false);
  };
  
  const handleconfirmpassword=(pass)=>{
    setcopass(pass)
    if(password==""){
      setalertmsg("Please Enter password to confirm");
      setalertscreen(signerror);
      setvisiblemodal(true);
    }
    else if(password==pass){
      console.log("sucess")
      
    }
    else{
      console.log("error")
    }
   
  }

  const signupsubmit=()=>{
    const valid=signup(email,password,name,mobileno)
    if (valid.acceptance) {
      // dispatch(usersignup({
      //   email,
      //   password,
      //   name,
      //   mobileno
      //  }),
      // );
      navigation.navigate('main', {screen: 'TabNav'});
    } else {
      setalertmsg(valid.msg);
      setalertscreen(signerror);
      setvisiblemodal(true);
    }


  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <SafeAreaView backgroundColor={colors.themeColor}>
      {visiblemodal ? (
          <AlertScreen
            screen={alertscreen}
            message={alertmsg}
            fun={onmodalchange}
          />
        ) : (
          <></>
        )}
        <ScrollView>
          <View style={[styles.signupContainer]}>
          <Spinner
              visible={fetchstatus}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>User Name</Text>
              <TextInput
                style={[styles.Textinput]}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(value)=>setname(value)}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
              
              />
            </View>
            
            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>Email</Text>
              <TextInput
                style={[styles.Textinput]}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(value)=>setemail(value)}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
               
              />
            </View>

            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>Mobile no</Text>
              <TextInput
                style={[styles.Textinput]}
                keyboardType="default"
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                value={mobileno}
                onChangeText={(value)=>setmobileno(value)}
                clearTextOnFocus={true}
                maxLength={15}
              />
            </View>
            
            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>Password</Text>
              <TextInput
                style={[styles.Textinput]}
                keyboardType="default"
                secureTextEntry={true}
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                value={password}
                onChangeText={(value)=>setpassword(value)}
                clearTextOnFocus={true}
                maxLength={15}
              />
            </View>
            
            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>Confirm Password</Text>
              <TextInput
                style={[styles.Textinput]}
                keyboardType="default"
                secureTextEntry={true}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                value={copass}
                onChangeText={(value)=>handleconfirmpassword(value)}
                clearTextOnFocus={true}
                maxLength={15}
              />
            </View>
            
          </View>
          <View style={[styles.conditionView]}>
            <Text style={[styles.conditionText]}>
              By Creating an account you agree to our
            </Text>
            <View style={[styles.conditionBtnView]}>
              <TouchableOpacity>
                <Text style={[styles.conditionBtnText]}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
              <Text style={[styles.conditionText]}>and</Text>
              <TouchableOpacity>
                <Text style={[styles.conditionBtnText]}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.Btncontainer]}>
            <TouchableOpacity
              onPress={() => signupsubmit()}
              style={[styles.button]}>
              <LinearGradient
                colors={['#DDBA76', '#A7884F']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.gradient]}>
                <Text style={[styles.text]}>SIGN UP NOW</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(Signin);
