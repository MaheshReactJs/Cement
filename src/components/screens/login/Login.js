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
  Alert,
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {app_info_action} from '../../redux/action/appinfoaction';
import {useSelector, useDispatch} from 'react-redux';
// import {
//   loginfetch,
//   error,
//   error_msg,
//   user_id,
// } from '../../redux/selector/userselector';
import {appname,appinfofetch,appinfoerror,appinfoerrormsg} from '../../redux/selector/appinfoselector';
import {login} from '../../../constants/validate';
import {loginerror} from '../../../constants/alertmsg';
import AlertScreen from '../../CustomComponents/AlertScreen';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const fetchstatus = useSelector(appinfofetch);
  const errorstatus = useSelector(appinfoerror);
  const errormsg = useSelector(appinfoerrormsg);
  // const uid = useSelector(user_id);
  const application_name =useSelector(appname)
  const [alertscreen, setalertscreen] = useState('');
  const [alertmsg, setalertmsg] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [visiblemodal, setvisiblemodal] = useState(false);

  const onmodalchange = () => {
    setvisiblemodal(false);
  };
  function n(){
    if (application_name != '') {
      navigation.navigate('main', {screen: 'TabNav'});
    } else if (errorstatus) {
      setalertmsg(errormsg);
      setalertscreen(loginerror);
      setvisiblemodal(true);
    } else {
    }
  }
 
  n();


  const submit =  () => {
    const code = email.slice(0, 4)
    const femail= email.split(code)[1]
    const valid = login(femail, password);
    if (valid.acceptance) {
    dispatch(
        app_info_action({
          code,
          navigation


        }),
       
      );
      
    } else {
      setalertmsg(valid.msg);
      setalertscreen(loginerror);
      setvisiblemodal(true);
    }
  };

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
          <View style={[styles.container]}>
            <Spinner
              visible={fetchstatus}
              textContent={'Loading...'}
              // textStyle={styles.spinnerTextStyle}
            />
            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>User Name / Email Id</Text>
              <TextInput
                style={[styles.Textinput]}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                onChangeText={(value) => setemail(value)}
                // placeholder="ANDJGFYINA"
                // placeholderTextColor={colors.white}
              />
            </View>
            {/* <View style={[styles.warnTextView]}>
              <Text style={[styles.warnText]}>Field Can't be Empty</Text>
            </View> */}
            <View style={[styles.textContainer]}>
              <Text style={[styles.label]}>Password</Text>
              <TextInput
                style={[styles.Textinput]}
                value={password}
                keyboardType="default"
                secureTextEntry={true}
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                clearTextOnFocus={true}
                onChangeText={(value) => setpassword(value)}
                maxLength={15}
              />
            </View>
            {/* <View style={[styles.warnTextView]}>
              <Text style={[styles.warnText]}>Field Can't be Empty</Text>
            </View> */}
            <View style={[styles.reset]}>
              <Text style={[styles.resetText]}>Forgot Password ?</Text>
              <TouchableOpacity>
                <Text style={[styles.btnText]}>Rest your Password</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.signup]}>
              <Text style={[styles.resetText]}>Don't have an account ?</Text>
              <TouchableOpacity>
                <Text style={[styles.btnText]}>Sign Up Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.Btncontainer]}>
            <TouchableOpacity onPress={() => submit()} style={[styles.button]}>
              <LinearGradient
                colors={['#DDBA76', '#A7884F']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.gradient]}>
                <Text style={[styles.text]}>LOGIN NOW</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default memo(Login);
