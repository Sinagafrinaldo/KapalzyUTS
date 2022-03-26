import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Lainnya({ navigation }) {
    const [open, setOpen] = useState(true)
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' }}>
            <ScrollView style={[styles.content, { width: 400 }]}>
                <View style={{ flexDirection: 'row' }}>

                    <Ionicons style={[styles.ikon_menu, { borderWidth: 1, borderRadius: 50 }]} name={'person'} size={50} color={"brown"} />
                    <Text style={{ padding: 20, fontSize: 20, fontWeight: '400' }}>Frinaldo Sinaga</Text>
                </View>
                <View style={{
                    height: 1,
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignSelf: 'stretch'
                }} />
                <TouchableOpacity style={{
                    backgroundColor: '#2291C8', padding: 15, marginTop: 40,
                    borderRadius: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 14 }}>Bantuan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: '#2291C8', padding: 15, marginTop: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 14 }}>Notifikasi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: '#2291C8', padding: 15, marginTop: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 14 }}>Penyimpanan dan Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: '#2291C8', padding: 15, marginTop: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 14 }}>Hapus Data</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: '#2291C8', padding: 15, marginTop: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ color: 'white', fontSize: 14 }}>Keamanan</Text>
                </TouchableOpacity>


                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <Text>Copyright by Frinaldo Sinaga - 119140064</Text>
                </View>
            </ScrollView>
        </View>
    );
}