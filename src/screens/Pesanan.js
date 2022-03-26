import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from './style';


export default function Pesanan({ route, navigation }) {


    const [Data, setData] = useState([])
    const [DataPembatalan, setDataPembatalan] = useState([])

    const createDataPembatalan = (asal, tujuan, tanggal, jam, layanan) => {

        DataPembatalan.push({ asal: asal, tujuan: tujuan, jam: jam, tanggal: tanggal, layanan: layanan });
        setDataPembatalan(DataPembatalan)
        console.log('data pembatalan dibuat: ', DataPembatalan)

        saveDataPembatalan(DataPembatalan)
    }
    const saveDataPembatalan = async (nilai) => {
        try {
            await AsyncStorage.setItem('dbPembatalan', JSON.stringify(nilai))
        } catch (error) {
            console.log('Save error', error)
        }
    }

    const getDataPembatalan = async () => {
        try {
            let isi_data_pembatalan = await AsyncStorage.getItem('dbPembatalan')
            // console.log('isi pembatalan', isi_data_pembatalan)
            await AsyncStorage.setItem('dbPembatalan', JSON.stringify(DataPembatalan))
            isi_data_pembatalan = JSON.parse(isi_data_pembatalan);
            if (isi_data_pembatalan !== null) {
                // console.log('isi pembatalan', isi_data_pembatalan)
                setDataPembatalan(isi_data_pembatalan)
            }
        } catch (error) {
            console.log('Save error', error)
        }
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
            // await AsyncStorage.setItem('db', JSON.stringify(Data))
            isi_data = JSON.parse(isi_data);
            if (isi_data !== null) {
                // console.log('isi asynz di pesanan', isi_data)
                setData(isi_data)
            }
        } catch (error) {
            console.log('Save error', error)
        }
    }

    const deleteData = (Index) => {

        Data.splice(Index, 1)
        saveData(Data)
    }

    useEffect(() => {
        getData();
    });
    return (
        <ScrollView style={{ flex: 1, }}>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text>Daftar dari tiket pesanan anda akan muncul disini</Text>
            </View>
            {Data.map((item, index) => (

                <View key={index}>


                    <View style={[styles.box_pesanan, { marginVertical: 20 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", }} >
                            <Text>{item.asal}</Text>
                            <Ionicons name='arrow-forward-outline' size={20} />
                            <Text>{item.tujuan}</Text>
                        </View>
                        <Text style={{ fontWeight: '500', marginVertical: 5 }}>Jadwal Masuk Pelabuhan</Text>
                        <Text>{item.tanggal}</Text>
                        <Text>{item.jam}</Text>
                        <Text style={{ fontWeight: '500', marginVertical: 5 }}>Layanan</Text>
                        <Text>{item.layanan}</Text>
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
                        <TouchableOpacity
                            style={[styles.tombol_pembatalan, { width: 80, backgroundColor: 'orange', borderColor: 'red', textAlign: 'center' }]}
                            onPress={() => {
                                createDataPembatalan(item.asal, item.tujuan, item.tanggal, item.jam, item.layanan)
                                deleteData(index)
                                Alert.alert('Sukses Membatalkan Pesanan', 'Rincian ada di menu pembatalan..')

                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }} >Batalkan</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            ))
            }


        </ScrollView >
    );
}