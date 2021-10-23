import { CurrentRenderContext } from '@react-navigation/core'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { bg } from '../../../assest'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Home = (props) => {
    return (
        <ScrollView>
        <View style = {styles.views}>
            <Image source = {bg} style = {styles.bg}/>
            <View style = {styles.name}>
            <Text style = {styles.textname}>Yofi Ilham Fauzi</Text>
            <Text style = {styles.textpoint}>Wali Kelas</Text>
            </View>
            <View style = {styles.containisi}>
                <View style = {styles.recent}>
                    <Text style = {styles.recentTitle}>Bulan Ini</Text>
                    <TouchableNativeFeedback  useForeground = {false} onPress = {() => {props.navigation.navigate('Info')}}>
                    <View style = {styles.recentContent}>    
                        <Text style = {styles.recentName}>Dendi Eka</Text>
                        <Text style = {styles.recentCategory}>Baju Keluar</Text>
                        <Text style = {styles.recentDate}>1 Oktober 2021</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback  useForeground = {false} onPress = {() => {props.navigation.navigate('Info')}}>
                    <View style = {styles.recentContent}>    
                        <Text style = {styles.recentName}>Dendi Eka</Text>
                        <Text style = {styles.recentCategory}>Baju Keluar</Text>
                        <Text style = {styles.recentDate}>1 Oktober 2021</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback  useForeground = {false} onPress = {() => {props.navigation.navigate('Info')}}>
                    <View style = {styles.recentContent}>    
                        <Text style = {styles.recentName}>Dendi Eka</Text>
                        <Text style = {styles.recentCategory}>Baju Keluar</Text>
                        <Text style = {styles.recentDate}>1 Oktober 2021</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback  useForeground = {false} onPress = {() => {props.navigation.navigate('Info')}}>
                    <View style = {styles.recentContent}>    
                        <Text style = {styles.recentName}>Dendi Eka</Text>
                        <Text style = {styles.recentCategory}>Baju Keluar</Text>
                        <Text style = {styles.recentDate}>1 Oktober 2021</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <View style = {styles.containerdetail}>
                    <TouchableNativeFeedback  useForeground = {false} onPress = {() => {props.navigation.navigate('DetailPelanggaran')}}>
                    <View style = {styles.button}>    
                    <Text style = {styles.detail}>Detail</Text>
                    </View>
                    </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
            </View>
            </ScrollView>
    )
}

export default Home

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
        backgroundColor : '#23272B',
    },
    name : {
        marginLeft : 25,
        marginTop : 60
    },
    containisi : {
        width : "100%",
        height : 560,
        backgroundColor : '#F8F8F8',
        position : 'relative',
        marginTop : 29,
        flex : 1,
        alignItems : 'center',
        borderTopRightRadius : 41,
        borderTopLeftRadius : 41,
    },
    textname : {
        fontSize : 24,
        color : '#F8F8F8',
    },
    textpoint : {
        fontSize : 15,
        color : '#EAF4FF',
    },
    recent : {
        width : "85%",
        height : 500,
        backgroundColor : "#ffffff",
        top : 34,
        borderRadius : 35,
        elevation : 4
    },
    recentTitle : {
        fontWeight : 'bold',
        fontSize : 26,
        marginTop : 22,
        marginLeft : 31,
        marginBottom : 25
    },
    recentContent : {
        width : "100%",
        flexDirection : 'column',
        position : 'relative',
        borderBottomWidth : 1,
        borderColor : '#EEEEEE'
    },
    recentName : {
        fontSize : 14,
        color : '#74889E',
        fontWeight : '600',
        paddingBottom : 10,
        marginLeft : 31,
        marginTop : 10
    },
    recentCategory : {
        fontSize : 11,
        color : '#818A94',
        fontWeight : '400',
        marginLeft : 31
    },
    recentDate : {
        fontSize : 10,
        color : '#818A94',
        textAlign : 'right',
        marginBottom : 7,
        marginRight : 19,
        fontWeight : '400'
    },
    containerdetail : {
        alignItems : 'flex-end',
        marginRight : 30,
        marginTop : 55,
    },
    button : {
        width : 69,
        height : 29,
        backgroundColor : '#23272B',
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center'
    },
    detail : {
        fontSize : 13,
        color : '#FFFFFF',
        fontWeight : "500"
    }
})
