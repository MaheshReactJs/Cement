import { StyleSheet, } from 'react-native';

import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
    widthPercentageToDP,
    heightPercentageToDP,
} from '../../../assests/styles/stylesheet/responsiveSize';
import { flexVariable } from '../../../assests/styles/stylesheet/flexVariable';
import { fontFamily } from '../../../assests/styles/stylesheet/fonts';
import colors from '../../../assests/styles/stylesheet/colors';

const styles = StyleSheet.create({
    container:{ justifyContent: 'flex-end',
    paddingTop:responsiveVerticalSize(43.5) 
},
    textContainer: {
        paddingTop: responsiveVerticalSize(0),
        paddingLeft:responsiveHorizontalSize(3.5),
        paddingRight:responsiveHorizontalSize(3.5),
        width: '98%',
    },
    label: {
        color: colors.brown,
        alignSelf: flexVariable.flexStart,
        fontFamily: fontFamily.segoeuiRegular,
        fontSize: responsiveFontSize(18),
    },
    Textinput: {
        fontFamily: fontFamily.segoeuiRegular,
        fontSize: responsiveFontSize(17),
        borderBottomColor: colors.dimGrey,
        borderBottomWidth: 1.5,
        color: colors.white,
        paddingTop: 0
    },
    warnTextView:{
        paddingRight:responsiveHorizontalSize(3.5),
        width: '98%',
        alignItems:'flex-end'
    },
    warnText:{
        color:colors.white,
        fontSize:responsiveFontSize(15),
        fontFamily:fontFamily.segoeuiRegular,
    },
    reset:{
        padding:15,
        width: '98%',
        alignItems:'flex-start',
       // justifyContent:'center',
        flexDirection:'row'
    },
    resetText:{
        color:colors.dimGrey,
        fontSize:responsiveFontSize(15),
        fontFamily:fontFamily.segoeuiRegular,
    },
    btnText:{
        color:colors.brown,
        fontSize:responsiveFontSize(15),
        fontFamily:fontFamily.segoeuiRegular,
        paddingLeft:responsiveHorizontalSize(2)
    },
    signup:{
        paddingLeft:responsiveHorizontalSize(3.5),
        paddingBottom:responsiveVerticalSize(3.5),
        width: '98%',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    
    Btncontainer: {
      //  alignSelf:flexVariable.flexEnd,
        alignItems: flexVariable.center,
        justifyContent: flexVariable.center,
       // padding: 18
    },
    gradient: {
        flex: 1,
        justifyContent: flexVariable.center,
        alignItems: flexVariable.center,
        //borderRadius: 5
    },
    button: {
        width: '100%',
        height: 60,
    },
    text: {
        color: colors.black,
        fontFamily: fontFamily.segoeuiSemiBold,
        fontSize: responsiveFontSize(22)
    },
    signupContainer:{
        paddingTop:responsiveVerticalSize(22.5) 
    },
    conditionView:{
        flexDirection:'column',
        width:'80%',
        paddingLeft:responsiveHorizontalSize(3.5),
        paddingTop:responsiveVerticalSize(2),
        paddingBottom:responsiveVerticalSize(5)

    },
    conditionText:{
        color: colors.dimGrey,
        fontFamily: fontFamily.segoeuiRegular,
        fontSize: responsiveFontSize(16),
        paddingRight:responsiveVerticalSize(2)
    },
    conditionBtnView:{
        flexDirection:'row'
    },
    conditionBtnText:{
        color:colors.brown,
        fontSize:responsiveFontSize(15),
        fontFamily:fontFamily.segoeuiRegular,
        paddingRight:responsiveHorizontalSize(2)
    }
});
export default styles;