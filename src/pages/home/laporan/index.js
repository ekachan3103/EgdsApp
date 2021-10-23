import React, {useState} from 'react'
import { Image, ScrollView, StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { Book } from '../../../assest'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Ion from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import { Fumi } from 'react-native-textinput-effects';

const Pencarian = (props) => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <ScrollView>
        <View style = {styles.views}>
            <Image source = {Book} style = {styles.bg}/>
            <Text style = {styles.textHeader}>Laporkan Pelanggaran</Text>
            <View style = {styles.content}>
                <View style = {styles.viewContent}>
                    <Text style = {styles.title}>Jurusan</Text>
                    <View style = {styles.pickerstyle}>
                    <Picker style = {styles.box} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Pilih Jurusan"/>
                        <Picker.Item label="Akuntansi Keuangan Lembaga" value="" />
                        <Picker.Item label="Bisnis Daring dan Pemasaran" value="" />
                        <Picker.Item label="Otomatisasi Tata Kelola dan Perkantoran" value=""/>
                        <Picker.Item label="Farmasi Klinis dan Komunitas" value=""/>
                        <Picker.Item label="Teknik Labolatorium Medik" value=""/>
                        <Picker.Item label="Multimedia" value=""/>
                        <Picker.Item label="Teknik Komputer dan Jaringan" value=""/>
                        <Picker.Item label="Sistem Informatika Jaringan dan Aplikasi" value=""/>
                        <Picker.Item label="Manajemen Logistik" value=""/>
                        <Picker.Item label="Teknik Energi Terbarukan" value=""/>
                    </Picker>
                    </View>
                </View>
                <View style = {styles.viewContent}>
                    <Text style = {styles.title}>Nama</Text>
                    <View style = {styles.pickerstyle}>
                    <View style = {styles.inputBox}>
                        <TextInput style = {styles.textInput} placeholder="Masukkan Nama" placeholderTextColor = "#757575">
                        </TextInput>
                    </View>
                    </View>
                </View>
                <View style = {styles.viewContent}>
                    <Text style = {styles.title}>Kategori Pelanggaran</Text>
                    <View style = {styles.pickerstyle}>
                    <Picker style = {styles.box} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Pilih Kategori Pelanggaran"/>
                        <Picker.Item label="Kedisiplinan" value="" />
                        <Picker.Item label="Kekerasan" value="" />
                    </Picker>
                    </View>
                </View>
                <View style = {styles.viewContent}>
                    <Text style = {styles.title}>Jenis Pelanggaran</Text>
                    <View style = {styles.pickerstyle}>
                    <View style = {styles.inputBox}>
                        <TextInput style = {styles.textInput} placeholder="Masukkan Jenis Pelanggaran" placeholderTextColor = "#757575">
                        </TextInput>
                    </View>
                    </View>
                </View>
                <View style = {styles.viewContent}>
                    <Text style = {styles.title}>Masukkan Bukti</Text>
                    <View style = {styles.uploadFoto}>
                    <FontAwesome name = "plus" size = {24} style = {styles.icons}/>
                    </View>
                </View>
                <View style = {styles.button}>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                props.navigation.navigate('GantiPassword')}}>
                <View style = {styles.buttoncancel}>   
                    <Text style = {styles.detail}>Reset</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                props.navigation.navigate('GantiPassword')}}>
                <View style = {styles.buttonsubmit}>   
                    <Text style = {styles.detail}>Submit</Text>
                </View>
                </TouchableNativeFeedback>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Pencarian

const styles = StyleSheet.create({
    bg : {
        position : 'absolute',
        top : 15,
        right : 10,
        padding : 0,
        margin : 0,
    },
    views : {
        flex : 1,
        backgroundColor : '#23272B',
        marginBottom : 30
    },
    textHeader : {
        fontSize : 24,
        color : '#F8F8F8',
        top : 39,
        left : 20
    },
    content : {
        flex : 1,
        backgroundColor : '#F2F2F2',
        top : 94,
        borderTopLeftRadius : 41,
        borderTopRightRadius : 41,
        paddingBottom : 100
    },
    header : {
        height : 19
    },
    title : {
        fontSize : 15,
        fontWeight : '700',
        marginLeft : 28
    },
    viewContent : {
        marginTop : 20,
    },
    pickerstyle : {
        alignItems : 'center'
    },
    inputBox : {
        width : "89%",
        height : 50,
        backgroundColor : '#ffffff',
        borderRadius : 6,
        marginTop : 12,
        justifyContent : 'center'
    },
    textInput : {
        fontSize : 15,
        paddingLeft : 15,
        color : "#000000"
    },
    box : {
        width : "89%",
        height : 29,
        backgroundColor : '#ffffff',
        borderRadius : 10,
        justifyContent : 'center',
        marginTop : 12,
        marginBottom : 12
    },
    text : {
        fontSize : 13,
        fontWeight : '500',
        paddingLeft : 15
    },
    uploadFoto : {
        width : 117,
        height : 117,
        backgroundColor : '#ffffff',
        marginTop : 12,
        marginLeft : 35,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    button : {
        width : "100%",
        marginTop : 50,
        flexDirection : 'row',
        flex : 1,
        justifyContent : 'flex-end',
        paddingRight : 32
    },
    buttoncancel : {
        width : 90,
        height : 35,
        backgroundColor : '#D21616',
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        paddingRight : 3,
        marginRight : 18
    },
    buttonsubmit : {
        width : 90,
        height : 35,
        backgroundColor : '#23272B',
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        paddingRight : 3
    },
    detail : {
        fontSize : 15,
        color : '#FFFFFF',
        fontWeight : "600"
    },
    leftButton : {
        marginLeft : 13,
        elevation : 0
    },
    rightButton : {
        marginLeft : 15
    }
})
