import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Alert, Modal, } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DatePicker from 'react-native-modern-datepicker';

const Stack = createStackNavigator();
import styles from './style';


export default function Beranda1({ navigation }) {
    const [selectedAsal, setSelectedAsal] = useState("Merak");
    const [selectedTujuan, setSelectedTujuan] = useState("Bakauheni");
    const [selectedLayanan, setSelectedLayanan] = useState("VIP");
    const [selectedJam, setSelectedJam] = useState("15.30 WIB");
    const [pelabuhan] = useState(['Merak', 'Bakauheni', 'Belawan', 'Jambi']).sort()
    const [layanan] = useState(['Ekonomi', 'Eksekutif', 'VIP', 'VVIP'])
    const [Jam] = useState(['07.00 WIB', '09.00 WIB', '12.00 WIB', '15.30 WIB', '18.00 WIB'])
    const [selectedDate, setSelectedDate] = useState('2022/03/28');
    const [open, setOpen] = useState(false)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' }}>
            <ScrollView style={styles.content}>
                <View>
                    <Text style={styles.judul}>Kapalzy</Text>
                </View>



                <View>
                    <Text>Pelabuhan Awal</Text>


                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Ionicons style={styles.ikon_menu} name={'boat'} size={40} color={"brown"} />
                        <Picker
                            selectedValue={selectedAsal}
                            style={styles.box_opsi}
                            onValueChange={(itemVal) => {
                                setSelectedAsal(itemVal);
                            }}
                        >

                            {
                                pelabuhan.map((p) => (
                                    <Picker.Item key={p} label={p} value={p} />
                                ))
                            }
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text>Pelabuhan Tujuan</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Ionicons style={styles.ikon_menu} name={'boat-outline'} size={40} color={"brown"} />
                        <Picker
                            selectedValue={selectedTujuan}
                            style={styles.box_opsi}
                            onValueChange={(itemVal) => {
                                setSelectedTujuan(itemVal);
                            }}
                        >

                            {
                                pelabuhan.map((p) => (
                                    <Picker.Item key={p} label={p} value={p} />
                                ))
                            }
                        </Picker>
                    </View>
                </View>
                <View>


                    <Text style={{}}>Kelas Layanan</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Ionicons style={styles.ikon_menu} name={'ios-information-circle'} size={40} color={"brown"} />
                        <Picker

                            selectedValue={selectedLayanan}
                            style={styles.box_opsi}
                            onValueChange={(itemVal) => {
                                setSelectedLayanan(itemVal);
                            }}
                        >

                            {
                                layanan.map((p) => (
                                    <Picker.Item key={p} label={p} value={p} />
                                ))
                            }
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text style={{}}>Tanggal Masuk Pelabuhan</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Ionicons style={styles.ikon_menu} name={'albums'} size={40} color={"brown"} />
                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                            style={styles.box_tanggal}
                        >
                            <Text>{selectedDate}</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            backdropOpacity={0.3}
                            visible={open}
                            onRequestClose={() => {
                                console.log('Modal has been closed.');
                            }}>

                            <DatePicker
                                options={{
                                    backgroundColor: '#090C08',
                                    textHeaderColor: '#FFA25B',
                                    textDefaultColor: '#F6E7C1',
                                    selectedTextColor: '#fff',
                                    mainColor: '#F4722B',
                                    textSecondaryColor: '#D6C7A1',
                                    borderColor: 'rgba(122, 146, 165, 0.1)',
                                }}
                                current="2022-03-28"
                                selected="2022-03-28"
                                mode="calendar"
                                minuteInterval={30}
                                style={{
                                    borderRadius: 10, height: 200, width: 200, marginVertical: 250,
                                    flex: 1,
                                    alignSelf: 'center',
                                }}
                                onDateChange={(date) => {
                                    setOpen(false)
                                    setSelectedDate(date)
                                }}
                            />
                        </Modal>
                    </View>
                </View>

                <View>
                    <Text>Jam Masuk Pelabuhan</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Ionicons style={styles.ikon_menu} name={'time'} size={40} color={"brown"} />
                        <Picker
                            selectedValue={selectedJam}
                            style={styles.box_opsi}
                            onValueChange={(itemVal) => {
                                setSelectedJam(itemVal);
                            }}
                        >

                            {
                                Jam.map((p) => (
                                    <Picker.Item key={p} label={p} value={p} />
                                ))
                            }
                        </Picker>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e9e9e9',
                    borderColor: '#d5d5d5',
                    borderWidth: 1,
                    height: 40,
                    width: 300,
                    marginVertical: 10,
                    padding: 5,
                    alignSelf: 'center'
                }}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Dewasa</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>1 Orang</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.buat_tiket}

                        onPress={() => {
                            if (selectedAsal != selectedTujuan) {
                                navigation.navigate('Beranda2', {
                                    asal: selectedAsal,
                                    tujuan: selectedTujuan,
                                    layanan: selectedLayanan,
                                    tanggal: selectedDate,
                                    jam: selectedJam
                                })
                            } else {
                                alert('Asal dan tujuan tidak boleh sama');
                            }
                        }}

                    >
                        <Ionicons name='search' size={25} color='white' />
                        <Text style={styles.cari}>Buat Tiket</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    );
}

