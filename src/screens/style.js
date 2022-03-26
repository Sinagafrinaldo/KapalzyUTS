import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        borderColor: 'black',
        flex: 1,
        marginTop: 30,
        marginBottom: 3,
        paddingHorizontal: 30,
        width: 360,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
        borderRadius: 9,
        alignSelf: 'center'
    },
    box_input: {
        padding: 10,
        backgroundColor: '#e9e9e9',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    box_opsi: {
        height: 30,
        width: 210,
        marginBottom: 10,
        backgroundColor: '#e9e9e9',
        borderColor: '#d5d5d5',
        borderRadius: 4,
        borderWidth: 1,
    },
    ikon_menu: {
        padding: 8
    },
    judul: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#00579c',
        fontSize: 28,
        marginVertical: 20
    },
    buat_tiket: {
        backgroundColor: '#f48221',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 270,
        alignSelf: 'center',
        marginVertical: 30
    },
    cari: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },
    kembali: {
        color: '#00579c',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },
    teks_biru: {
        textAlign: 'center',
        fontSize: 20,
        color: '#00579c',
        fontWeight: '700'
    },
    box_pesanan: {
        backgroundColor: '#e9e9e9',
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
    },
    tombol_kembali: {
        backgroundColor: 'white',
        borderColor: '#00579c',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginVertical: 20,
        marginRight: -30

    },
    tombol_lanjutkan: {
        backgroundColor: '#00579c',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginVertical: 20,
        marginLeft: -30
    },
    modall: {
        marginVertical: 250,
        flex: 1,
        backgroundColor: '#e9e9e9',
        alignSelf: 'center',
        borderRadius: 10,

    },
    pembayaran: {
        backgroundColor: '#f48221',
        paddingHorizontal: 80,
        paddingVertical: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5

    },
    box_tanggal: {
        backgroundColor: '#e9e9e9',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        height: 40,
        width: 210,
        marginVertical: 10,
        padding: 5
    },
    tombol_pembatalan: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        width: 130,
        marginTop: 10
    },

})
export default styles