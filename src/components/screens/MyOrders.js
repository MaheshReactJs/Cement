// Mahesh

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App5() {
    return (
        <View style={{ margin: 20 }}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <TouchableOpacity  >
                    <Image source={require('../../assests/images/arrowback.png')} style={{ marginTop: 8, tintColor: 'black' }} />
                </TouchableOpacity>
                <Text style={styles.heading}>Track Order
            </Text>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}>

                <View style={styles.date}>
                    <Text>Sep 21, 2020</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View style={{ margin: 20 }}>
                                <Text>OD 42496548-N</Text>
                                <Text style={{ color: '#00C569', marginTop: 10 }}>Rs 4250</Text>
                                <View style={{ height: 30, width: 80, backgroundColor: '#FFB900', borderRadius: 5, top: 20 }}>
                                    <Text style={styles.status_text}>In Transit</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: ('10%')}}>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.date}>
                    <Text>Jan 21, 2020</Text>
                </View>


                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View style={{ margin: 20 }}>
                                <Text>OD 42400145-N</Text>
                                <Text style={{ color: '#00C569', marginTop: 10 }}>Rs 1870</Text>
                                <View style={{ height: 30, width: 80, backgroundColor: '#00C569', borderRadius: 5, top: 20 }}>
                                    <Text style={styles.status_text}>Delivered</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: ('10%')}}>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.date}>
                    <Text>Jan 21, 2020</Text>
                </View>


                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View style={{ margin: 20 }}>
                                <Text>OD 42400145-N</Text>
                                <Text style={{ color: '#00C569', marginTop: 10 }}>Rs 1870</Text>
                                <View style={{ height: 30, width: 80, backgroundColor: '#00C569', borderRadius: 5, top: 20 }}>
                                    <Text style={styles.status_text}>Delivered</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: ('10%')}}>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.date}>
                    <Text>Jan 21, 2020</Text>
                </View>


                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View style={{ margin: 20 }}>
                                <Text>OD 42400145-N</Text>
                                <Text style={{ color: '#00C569', marginTop: 10 }}>Rs 1870</Text>
                                <View style={{ height: 30, width: 80, backgroundColor: '#00C569', borderRadius: 5, top: 20 }}>
                                    <Text style={styles.status_text}>Delivered</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: ('10%')}}>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                            <View style={styles.I_View}>
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                                <Image style={styles.image} source={require('../../assests/images/small_img.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>


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
    status_text:{
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
