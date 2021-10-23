import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { LogoSvg } from '../../assest'

const Login = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    return (
    <ScrollView style = {styles.views}>
    <View style = {styles.container}> 
        <LogoSvg style = {styles.draw}/>
    <Text style = {styles.textSelamat}>
        Selamat Datang
    </Text>
    <View style = {styles.input}>
        <TextInput style = {styles.inputText} placeholder="Email/NIS/NIP/NISN" onChangeText = {(text) => {setEmail(text)}}/>
    </View>
    <View style = {styles.input}>
        <TextInput style={styles.inputText} placeholder="Password" onChangeText = {(text) => {setPassword(text)}} secureTextEntry/>
    </View>
    <TouchableOpacity style = {styles.forgot} onPress = {() =>{
        console.log("Forgot Password")}}>
    <Text>Lupa Password</Text>
    </TouchableOpacity>
    <TouchableNativeFeedback  useForeground = {false} onPress = {() => {
        props.navigation.navigate('MainApp')}}>
    <View style = {styles.masuk}>
    <Text style = {styles.textmasuk}>Masuk</Text>
    </View>
    </TouchableNativeFeedback>
    <Text style = {styles.permission}>dengan membuat akun, Anda menyetujui</Text>
    <Text style = {styles.permission2} onPress = {() => {props.navigation.navigate('MainApp')}}>Persyaratan Layanan kami</Text>
    </View>
    </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : "#F8F8F8",
    },
    draw : {
        marginTop : 65,
        alignItems : 'center'
    },
    input : {
        width : "85%",
        backgroundColor : '#CDCDCD',
        borderRadius : 8,
        marginTop : 22,
        paddingLeft : 20,
        height : 58,
        justifyContent : 'center'
    },
    inputText : {
        color : '#000000',
        fontSize : 15,
    },
    textSelamat : {
        fontSize : 29,
        fontWeight : 'bold',
        fontFamily : 'Poppins-Regular',
        marginTop : 41,
        marginBottom : 80,
    },
    forgot : {
        right : 0,
        left : 0,
        marginLeft : "50%",
        paddingTop : 15
    },
    views : {
        flex : 1
    },
    masuk : {
        backgroundColor : '#343434',
        width : "85%",
        height : 58,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginTop : 68,
    },
    textmasuk : {
        color : '#FFFFFF',
        fontWeight : 'bold'
    },
    permission : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        color : '#5B5B5B',
        marginTop : 110,
    },
    permission2 : {
        marginBottom : 46
    }
})
