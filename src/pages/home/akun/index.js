import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { Profile } from  '../../../assest'
import GantiPassword from './pagepassword'
import Ion from 'react-native-vector-icons/Ionicons'

const Akun = (props) => {
    return (
        <ScrollView>
        <View style = {styles.container}>
        <View style = {styles.head}>
            <View style = {styles.profile}>
                <Image source = {Profile}/>
                <TouchableOpacity style = {styles.changePicture} activeOpacity = {0.7} >
                <View style = {{justifyContent : 'center', alignItems : 'center', flex : 1}}>
                <Ion name = "add" size = {23}/>
                </View>
                </TouchableOpacity>
            </View>
        <View style = {styles.statusname}>
            <Text style = {styles.name}>Yofi Ilham Fauzi</Text>
            <Text style = {styles.status}>Wali Kelas</Text>
        </View>
        </View>
        <View style = {styles.isi}>
        <View style = {styles.bordername}>
            <Text style = {styles.nameposition}>Nama</Text>
            <Text style = {styles.nameposition2}>Yofi Ilham Fauzi</Text>
        </View>
        <View style = {styles.border}>
            <Text style = {styles.nameposition}>Jenis Kelamin</Text>
            <Text style = {styles.nameposition2}>Laki Laki</Text>
        </View>
        <View style = {styles.border}>
            <Text style = {styles.nameposition}>Kelas</Text>
            <Text style = {styles.nameposition2}>XIII SIJ</Text>
        </View>
        <View style = {styles.border}>
            <Text style = {styles.nameposition}>NISN</Text>
            <Text style = {styles.nameposition2}>09102934812938</Text>
        </View>
        <View style = {styles.border}>
            <Text style = {styles.nameposition}>NIS</Text>
            <Text style = {styles.nameposition2}>203949234</Text>
        </View>
        <View style = {styles.border}>
            <Text style = {styles.nameposition}>Tempat Lahir</Text>
            <Text style = {styles.nameposition2}>Garut</Text>
        </View>
        </View>
        <TouchableNativeFeedback  useForeground = {false} onPress = {() => {
        props.navigation.navigate('GantiPassword')}}>
        <View style = {styles.changepw}>
        <Text style = {styles.textchangepw}>Ganti Password</Text>
        </View>
        </TouchableNativeFeedback>
        </View>
        </ScrollView>
    )
}

export default Akun

const styles = StyleSheet.create({
    views : {
        flex : 1,
    },
    container : {
        flex : 1,
        marginBottom : 20
    },
    profile : {
        top : 25,
        borderRadius : 65
    },
    head : {
        alignItems : 'center'
    },
    changePicture : {
        width : 28,
        height : 28,
        backgroundColor : '#E4E4E4',
        borderRadius : 14,
        position : 'absolute',
        top : 87,
        left : 100
    },
    statusname : {
        alignItems : 'center'
    },
    isi : {
        marginTop : 20
    },
    name : {
        fontSize : 16,
        fontWeight : '500',
        marginTop : 40
    },
    status : {
        fontSize : 14,
        fontWeight : '300',
        marginTop : 18
    },
    bordername : {
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderBottomColor : '#DFE0EB',
        borderTopColor : '#DFE0EB'
    },
    border : {
        borderBottomWidth : 1,
        borderBottomColor : '#DFE0EB',
    },
    nameposition : {
        marginLeft : 25.51,
        marginBottom : 10,
        marginTop : 10,
        fontSize : 14,
        fontWeight : 'bold'
    },
    nameposition2 : {
        marginLeft : 25.51,
        marginBottom : 10,
    },
    changepw : {
        marginTop : 19.64,
        width : 414,
        height : 60,
        flex : 1,
        justifyContent : 'center',
        backgroundColor : '#E7E7E7'
    },
    textchangepw : {
        marginLeft : 25.51,
        fontWeight : 'bold'
    }
})
