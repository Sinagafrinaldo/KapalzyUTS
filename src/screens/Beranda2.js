import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Beranda1 from './Beranda1'
import { Picker } from '@react-native-picker/picker';
const Stack = createStackNavigator();
import styles from './style';

const data_json = require('../json/kapalzy.json')

// Screen Detail
export default function Beranda2({ route, navigation }) {
    const { asal, tujuan, layanan, tanggal, jam } = route.params;

    let [status, setStatus] = useState(false)
    const cek_data = data_json.filter(item => {
        return item.asal == asal && item.tujuan == tujuan && item.tanggal == tanggal && item.jam == jam && item.layanan == layanan
    })
    if (cek_data.length != 0) {
        status = true
    } else {
        status = false
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.content}>
                {!status && (
                    <View>
                        <View>
                            <Text style={styles.judul}>Kapalzy</Text>
                        </View>

                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 20,
                            textAlign: 'center',
                            borderColor: '#d5d5d5',
                            padding: 20,
                            marginHorizontal: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                        }
                        }>
                            <Ionicons name='sad-outline' size={40} />
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#00579c', textAlign: 'center' }}>Maaf kuota tidak tersedia</Text>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#00579c', textAlign: 'center' }}>Silahkan Pilih Jadwal Lain.</Text>
                            <TouchableOpacity
                                style={[styles.tombol_kembali, { marginLeft: -30 }]}
                                onPress={() => navigation.goBack()}

                            >
                                <Text style={{ color: '#00579c', fontWeight: '600', fontSize: 14 }} >Kembali</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {status && (
                    <View>
                        <View>
                            <Text style={styles.judul}>Kapalzy</Text>
                        </View>


                        <Text style={{ fontWeight: '500', marginVertical: 5 }}>Kuota Tersedia (1000)</Text>
                        <Text style={{ fontWeight: '500', marginVertical: 5 }}>Rincian Tiket</Text>

                        <View style={{
                            backgroundColor: '#e9e9e9',
                            borderColor: '#d5d5d5',
                            padding: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", }} >
                                <Text>{asal}</Text>
                                <Ionicons name='arrow-forward-outline' size={20} />
                                <Text>{tujuan}</Text>
                            </View>
                            <Text style={{ fontWeight: '500', marginVertical: 5 }}>Jadwal Masuk Pelabuhan</Text>
                            <Text>{tanggal}</Text>
                            <Text>{jam}</Text>
                            <Text style={{ fontWeight: '500', marginVertical: 5 }}>Layanan</Text>
                            <Text>{layanan}</Text>
                            <View style={{
                                height: 1,
                                marginVertical: 5,
                                backgroundColor: 'black',
                                alignSelf: 'stretch'
                            }} />
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text>Dewasa x 1</Text>
                                <Text>Rp 65.000,00</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: '500', marginVertical: 5 }}>Total</Text>
                            <Text style={{ fontWeight: '500', marginVertical: 5 }}>Rp 65.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                style={styles.tombol_kembali}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={{ color: '#00579c', fontWeight: '600', fontSize: 14 }} >Kembali</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.tombol_lanjutkan}
                                onPress={() => {
                                    if (asal != tujuan) {
                                        navigation.navigate('Beranda3', {
                                            asal: asal,
                                            tujuan: tujuan,
                                            layanan: layanan,
                                            tanggal: tanggal,
                                            jam: jam,
                                            cek_data: cek_data
                                        })
                                    } else {
                                        alert('Asal dan tujuan tidak boleh sama');
                                    }
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }} >Lanjutkan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            </View>



        </ScrollView >
    );
}
