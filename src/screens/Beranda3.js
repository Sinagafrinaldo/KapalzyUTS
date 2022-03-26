import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Beranda1 from './Beranda1'





const Stack = createStackNavigator();
import styles from './style';

export default function Beranda3({ route, navigation }) {
    const [showModal, setShowModal] = useState(false);
    const { asal, tujuan, layanan, tanggal, jam, cek_data } = route.params;
    const [nama, setNama] = useState('');
    const [identitas, setIdentitas] = useState('');
    const [umur, setUmur] = useState('');

    const [Data, setData] = useState([])
    const [Nilai, setNilai] = useState('')


    const createData = (asal, tujuan, tanggal, jam, layanan) => {

        Data.push({ asal: asal, tujuan: tujuan, jam: jam, tanggal: tanggal, layanan: layanan });
        setData(Data)
        // console.log('data', Data)

        saveData(Data)
    }

    const saveData = async (Data) => {
        try {
            await AsyncStorage.setItem('db', JSON.stringify(Data))
        } catch (error) {
            console.log('Save error', error)
        }
    }
    const getData = async () => {
        try {
            let isi_data = await AsyncStorage.getItem('db')
            // console.log('isi full', isi_data)
            await AsyncStorage.setItem('db', JSON.stringify(Data))
            isi_data = JSON.parse(isi_data);
            if (isi_data !== null) {
                // console.log('isi asynz', isi_data)
                setData(isi_data)
            }
        } catch (error) {
            console.log('Save error', error)
        }
    }


    useEffect(() => {
        getData();
    }, []);



    return (

        <View style={[{ flex: 1, }, showModal ? { backgroundColor: '#C6C6C6' } : '']}>
            <ScrollView style={[styles.content, showModal ? { backgroundColor: '#C6C6C6' } : '']}>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        color: '#00579c',
                        fontSize: 22,
                    }}>Kapalzy</Text>
                </View>

                <Text style={{ fontWeight: '500', marginVertical: 5 }}>Informasi Pemesanan</Text>


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

                <Text style={{ fontWeight: '500', marginVertical: 5 }}>Data Pemesan</Text>
                <View style={{ marginVertical: 2 }}>
                    <Text>Nama Lengkap</Text>
                    <TextInput placeholder='Frinaldo Sinaga'
                        onChangeText={nama => setNama(nama)}
                        defaultValue={nama}
                        style={[styles.box_input, showModal ? { backgroundColor: '#BEBEBE' } : '']}
                    ></TextInput>
                </View>

                <View style={{ marginVertical: 2 }}>
                    <Text>Identitas</Text>
                    <TextInput placeholder='Laki-laki'
                        onChangeText={identitas => setIdentitas(identitas)}
                        defaultValue={identitas}
                        style={[styles.box_input, showModal ? { backgroundColor: '#BEBEBE' } : '']}
                    ></TextInput>
                </View>

                <View style={{ marginVertical: 2 }}>
                    <Text>Umur</Text>
                    <TextInput placeholder='20 Tahun'
                        onChangeText={umur => setUmur(umur)}
                        defaultValue={umur}
                        style={[styles.box_input, showModal ? { backgroundColor: '#BEBEBE' } : '']}
                    ></TextInput>
                </View>

                <TouchableWithoutFeedback >

                    <Modal
                        animationType={'fade'}
                        transparent={true}
                        backdropOpacity={0.3}
                        visible={showModal}

                        onRequestClose={() => {
                            console.log('Modal has been closed.');
                            setShowModal(!showModal);
                        }}>
                        <View style={styles.modall}>
                            <View style={styles.pembayaran}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Pembayaran</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontWeight: '700', marginVertical: 5 }}>TRANSFER KE NOMOR REKENING</Text>
                                <Text style={{ fontWeight: '700', marginVertical: 5 }}>89172xxxxxx</Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#f48221',
                                    borderRadius: 5,
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    width: 100,
                                    marginBottom: 10
                                }}
                                onPress={() => {
                                    setShowModal(!showModal);

                                    createData(asal, tujuan, tanggal, jam, layanan)
                                    navigation.navigate('Pesanan')
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }} >Selesai</Text>
                            </TouchableOpacity>


                        </View>
                    </Modal>
                </TouchableWithoutFeedback>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={[styles.tombol_kembali, showModal ? { backgroundColor: '#BEBEBE' } : '']}
                        onPress={() => navigation.goBack()}

                    >
                        <Text style={{ color: '#00579c', fontWeight: '600', fontSize: 14 }} >Kembali</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tombol_lanjutkan, showModal ? { backgroundColor: '#25679F' } : '']}
                        onPress={() => {
                            Alert.alert('Sukses Menambah Pesanan', 'SILAHKAN TRANSFER KE NOMOR REKENING : \n 89172xxxxxx')
                            createData(asal, tujuan, tanggal, jam, layanan)
                            navigation.navigate('Pesanan')

                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }} >Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    );
}