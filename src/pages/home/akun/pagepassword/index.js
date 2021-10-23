import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'

const GantiPassword = (props) => {
    const [password, setPassword] = useState()
    const [passwordbaru, setPasswordbaru] = useState()
    
    return (
        <View style = {styles.container}>
        <View style = {styles.password}>
            <Text style = {styles.textpassword}>Masukan Password Lama</Text>
            <View style = {styles.input}>
            <TextInput style = {styles.inputText} placeholder="Masukan Password Anda" onChangeText = {(text) => {setPassword(text)}}/>
            </View>
        </View>
        <View style = {styles.passwordganti}>
            <Text style = {styles.textpassword}>Masukan Password Baru</Text>
            <View style = {styles.input}>
            <TextInput style = {styles.inputText} placeholder="Masukan Password Baru" onChangeText = {(text) => {setPasswordbaru(text)}}/>
            </View>
        </View>
        <View style = {styles.passwordconfirm}>
            <Text style = {styles.textpassword}>Konfirmasi Password Baru</Text>
            <View style = {styles.input}>
            <TextInput style = {styles.inputText} placeholder="Konfirmasi Password" onChangeText = {(text) => {setPasswordbaru(text)}}/>
            </View>
        </View>
        <TouchableNativeFeedback useForeground = {false} onPress = {() => {
        props.navigation.navigate('MainApp')}}>
        <View style = {styles.masuk}>
        <Text style = {styles.textmasuk}>Simpan</Text>
        </View>
        </TouchableNativeFeedback>
        </View>
    )
}

export default GantiPassword

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#F8F8F8",
        alignItems : 'center'
    },
    password : {
        width : 331,
        height : 85,
        left : 11
    },
    passwordganti : {
        width : 331,
        height : 85,
        marginTop : 34,
        left : 11
    },
    passwordconfirm : {
        width : 331,
        height : 85,
        marginTop : 11,
        left : 11
    },
    textpassword : {
        marginTop : 27,
        fontWeight : "600"
    },
    input : {
        width : 310,
        backgroundColor : '#CDCDCD',
        borderRadius : 8,
        marginTop : 7,
        paddingLeft : 20,
        height : 58,
        justifyContent : 'center'
    },
    inputText : {
        color : '#000000',
    },
    masuk : {
        backgroundColor : '#343434',
        width : 310,
        height : 58,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginTop : 75
    },
    textmasuk : {
        color : '#FFFFFF',
        fontWeight : 'bold'
    },
    buttonmasuk : {
        width : 331,
        height : 85,
        left : 25,
        
    }
})
