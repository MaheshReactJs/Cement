// Mahesh
// npm install react-native-datepicker 

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker'

export default function App7() {
    return (
        <View style={{ margin: 20 }}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <TouchableOpacity  >
                    <Image source={require('../../assests/images/arrowback.png')} style={{ marginTop: 8, tintColor: 'black' }} />
                </TouchableOpacity>
                <Text style={styles.heading}>DashBoard
            </Text>
            </View>

           <View style={{flexDirection:'row', marginTop:50}}>
               <Text>From</Text>
            <View>
                <DatePicker
                    style={{ width: 140, }}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4},
                    }}/>
            </View>
            <Text style={{marginLeft:10}}>To</Text>
            <View>
                <DatePicker
                    style={{ width: 140}}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                           },
                    }}/>
            </View>
            </View>
            


            <View style={styles.card}>
                <View style={{ flexDirection: 'row', margin: ('5%'), justifyContent: 'space-between' }}>
                    <View>
                        <Text>OD 42496548-N</Text>
                        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 25 }}>Rapid Tech</Text>
                    </View>

                    <View>
                        <Text style={{ color: '#00C569' }}>Rs 1870</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    heading: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 110

    },
    date: {
        marginTop: 50
    },
    status_text: {
        textAlign: 'center',
        top: 5,
        color: '#FFFFFF'
    },
    card: {
        height: hp('20%'),
        width: wp('85%'),
        backgroundColor: 'white',
        borderRadius: 5,
        top: 20
    },
    image: {
        marginLeft: 10,
        borderRadius: 5,
        height: hp('7.5%'),
        width: wp('15%')
    },
    I_View: {
        flexDirection: 'row',
        paddingTop: 10
    }
});
