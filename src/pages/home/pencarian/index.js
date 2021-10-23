import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native'
import { bg, Search } from '../../../assest'
import Ion from 'react-native-vector-icons/Ionicons'

const Pencarian = (props) => {
    return (
        <View style = {styles.views}>
            <Image source = {bg} style = {styles.bg}/>
            <Text style = {styles.textHeader}>Cari Nama Siswa</Text>
            <View style = {styles.content}>
                <View style = {styles.searchBox}>
                    <TextInput style = {styles.inputText} placeholder="Cari Siswa..." placeholderTextColor ="#A7A7A7"/>
                    <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('')}}>
                    <View style = {styles.iconBox}>
                    <Ion name = "search-outline" color = "#FFFFFF" size = {22} style = {styles.iconsearch}/>
                    </View>
                    </TouchableNativeFeedback>
                </View>
                <ScrollView style = {styles.scroll}>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Dandi Eka</Text>
                    <Text style = {styles.recentCategory}>XII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Davi Hanan Lutfi</Text>
                    <Text style = {styles.recentCategory}>XIII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Rakandiya</Text>
                    <Text style = {styles.recentCategory}>XIII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Dandi Eka</Text>
                    <Text style = {styles.recentCategory}>XII SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Davi Hanan Lutfi</Text>
                    <Text style = {styles.recentCategory}>XI SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Rakandiya</Text>
                    <Text style = {styles.recentCategory}>XI SIJ</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII WIBU</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII WIBU</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII WIBU</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground = {false} onPress = {() => {
                        props.navigation.navigate('DetailPelanggaran')}}>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentName}>Ilham</Text>
                    <Text style = {styles.recentCategory}>XIII WIBU</Text>
                </View>
                </TouchableNativeFeedback>
                </ScrollView>
            </View>
        </View>
    )
}

export default Pencarian

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
    scroll : {
        flex : 1,
        width : "100%",
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
        alignItems : 'center'
    },
    searchBox : {
        width : "90%",
        height : 55,
        backgroundColor : '#E9E9E9',
        justifyContent : 'center',
        borderRadius : 12,
        marginTop : 35,
        marginBottom : 16
    },
    inputText : {
        fontSize : 18,
        color : '#A7A7A7',
        fontWeight : '600',
        paddingLeft : 17
    },
    iconBox : {
        width : 39,
        height : 39,
        backgroundColor : '#23272B',
        position : 'absolute',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 7,
        marginLeft : 275
    },
    recentContent : {
        width : "100%",
        borderBottomWidth : 1,
        borderColor : '#D9D9D9',
        paddingTop : 16,
        paddingLeft : 28
    },
    recentName : {
        fontSize : 14,
        color : '#4D5A69',
        fontWeight : '600',
        paddingBottom : 10
    },
    recentCategory : {
        fontSize : 12,
        color : '#818A94',
        paddingBottom : 16
    },

})
