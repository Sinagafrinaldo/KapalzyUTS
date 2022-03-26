import React, { useState, useEffect } from 'react';
import { View, Alert, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './style';


export default function Pembatalan({ navigation }) {

    const [DataPembatalan, setDataPembatalan] = useState([])
    const [Trigger, setTrigger] = useState(true)

    const saveDataPembatalan = async (DataPembatalan) => {
        try {
            await AsyncStorage.setItem('dbPembatalan', JSON.stringify(DataPembatalan))
        } catch (error) {
            console.log('Save error', error)
        }
    }

    const getDataPembatalan = async () => {
        try {
            let isi_data_pembatalan = await AsyncStorage.getItem('dbPembatalan')
            // console.log('isi pembatalan', isi_data_pembatalan)
            // await AsyncStorage.setItem('dbPembatalan', JSON.stringify(DataPembatalan))
            isi_data_pembatalan = JSON.parse(isi_data_pembatalan);
            if (isi_data_pembatalan !== null) {
                // console.log('isi pembatalan', isi_data_pembatalan)
                setDataPembatalan(isi_data_pembatalan)
            }
        } catch (error) {
            console.log('Save error', error)
        }
    }
    const deleteDataPembatalan = (Index) => {

        DataPembatalan.splice(Index, 1)
        saveDataPembatalan(DataPembatalan)
    }

    useEffect(() => {

        getDataPembatalan();
    });



    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text>Daftar dari tiket pembatalan anda akan muncul disini</Text>
            </View>
            {DataPembatalan.map((item, index) => (

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
                            style={[styles.tombol_pembatalan, { borderColor: 'orange', textAlign: 'center' }]}
                            onPress={() => {
                                Alert.alert('Dihapus', 'Sukses menghapus data permanen')
                                deleteDataPembatalan(index)
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }} >Hapus Permanen</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            ))}


        </ScrollView>
    );
}