import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native'
import { bg, Search } from '../../../../assest'

const Info = (props) => {
    return (
        <View style = {styles.views}>
            <Image source = {bg} style = {styles.bg}/>
            <View style = {styles.content}>
                <Text style = {styles.textHeader}>Barang Milik Davi Hanan</Text>
                <View style = {styles.alert}>
                    <Text style = {styles.textAlert}>Data Siswa Yang Terkena Razia</Text>
                </View> 
                <View style = {styles.deskripsi}>
                    <Text style = {styles.text}>Tanggal</Text>
                    <Text style = {styles.colon}>:</Text>
                    <Text style = {styles.category}>31 Oktober 2021</Text>
                </View>
                <View style = {styles.deskripsi}>
                    <Text style = {styles.text}>Pukul</Text>
                    <Text style = {styles.colon}>:</Text>
                    <Text style = {styles.category}>09 : 00</Text>
                </View>
                <View style = {styles.deskripsi}>
                    <Text style = {styles.text}>Status Barang</Text>
                    <Text style = {styles.colon}>:</Text>
                    <Text style = {styles.category}>Bisa Diambil Kembali</Text>
                </View>
                <View style = {styles.deskripsi}>
                    <Text style = {styles.text}>Nama Barang</Text>
                    <Text style = {styles.colon}>:</Text>
                    <Text style = {styles.category}>Sepatu Kets Putih</Text>
                </View>
                <View style = {styles.deskripsi}>
                    <Text style = {styles.text}>Poin Berkurang</Text>
                    <Text style = {styles.colon}>:</Text>
                    <Text style = {styles.category}>-5 Poin</Text>
                </View>
                <View style = {styles.antrian}>
                    <Text>Berikut Tiket Pengambilan Barang Anda :</Text>
                    <View style = {styles.kotakAntrian}>
                        <Text style = {styles.noAntrian}>05</Text>
                    </View>
                </View>
                <View style = {styles.button}>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                props.navigation.navigate('GantiPassword')}}>
                <View style = {styles.buttonsubmit}>   
                    <Text style = {styles.detail}>Submit</Text>
                </View>
                </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    bg : {
        width : 170,
        height : 200,
        position : 'absolute',
        right : 0,
        padding : 0,
        margin : 0,
    },
    views : {
        flex : 1,
        backgroundColor : '#23272B',
    },
    content : {
        flex : 1,
        backgroundColor : '#F2F2F2',
        top : 94,
        borderTopLeftRadius : 41,
        borderTopRightRadius : 41
    },
    textHeader : {
        fontSize : 28,
        fontWeight : '700',
        top : 38,
        left : 28
    },
    name : {
        flexDirection : 'row',
        top : 55,
        left : 28
    },
    textHi : {
        fontSize : 18,
        fontWeight : '500'
    },
    textName : {
        fontSize : 18,
        fontWeight : '500',
        left : 3
    },
    alert : {
        top : 58,
        marginLeft : 28
    },
    textAlert : {
        fontSize : 18,
        fontWeight : '500'
    },
    deskripsi : {
        top : 75,
        marginLeft : 28,
        flexDirection : 'row'
    },
    text : {
        fontSize : 15,
        fontWeight : '400'
    },
    colon : {
        position : 'absolute',
        fontSize : 15,
        fontWeight : '400',
        left : 115
    },
    category : {
        position : 'absolute',
        fontSize : 15,
        fontWeight : '400',
        left : 135
    },
    antrian : {
        marginTop : 95,
        marginLeft : 25,
        fontWeight : '400',
        width : "90%"
    },
    kotakAntrian : {
        top : 15,
        width : 119,
        height : 88,
        backgroundColor : '#ffffff',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    noAntrian : {
        fontSize : 50,
        fontWeight : '400'
    },
    textAntrian : {
        top : 22,
        fontWeight : '400'
    },
    buttonsubmit : {
        width : 90,
        height : 35,
        backgroundColor : '#23272B',
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 73
    },
    detail : {
        fontSize : 15,
        color : '#FFFFFF',
        fontWeight : "600"
    },
    button : {
        width : "100%",
        flexDirection : 'row',
        flex : 1,
        justifyContent : 'flex-end',
        paddingRight : 32
    },
})
