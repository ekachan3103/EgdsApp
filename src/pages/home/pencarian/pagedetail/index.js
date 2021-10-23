import React from 'react'
import { Image, StyleSheet, Text, View} from 'react-native'
import { bg } from '../../../../assest'

const DetailPelanggaran = () => {
    return (
        <View style = {styles.views}>
            <Image source = {bg} style = {styles.bg}/>
            <Text style = {styles.textHeader}>Davi Hanan Lutfi</Text>
            <View style = {styles.content}>
                <View style = {styles.headerContent}></View>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentCategory}>Tidak Memakai Dasi</Text>
                    <View style = {styles.recentTime}>
                        <Text style = {styles.recentDate}>30 September 2021</Text>
                        <View style = {styles.hours}>
                        <Text style = {styles.recentHours}>06:35</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentCategory}>Tidak Memakai Dasi</Text>
                    <View style = {styles.recentTime}>
                        <Text style = {styles.recentDate}>30 September 2021</Text>
                        <View style = {styles.hours}>
                        <Text style = {styles.recentHours}>06:35</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentCategory}>Tidak Memakai Dasi</Text>
                    <View style = {styles.recentTime}>
                        <Text style = {styles.recentDate}>30 September 2021</Text>
                        <View style = {styles.hours}>
                        <Text style = {styles.recentHours}>06:35</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.recentContent}>
                    <Text style = {styles.recentCategory}>Tidak Memakai Dasi</Text>
                    <View style = {styles.recentTime}>
                        <Text style = {styles.recentDate}>30 September 2021</Text>
                        <View style = {styles.hours}>
                        <Text style = {styles.recentHours}>06:35</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailPelanggaran

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
    headerContent : {
        width : '100%',
        height : 50
    },
    recentContent : {
        width : "100%",
        borderBottomWidth : 1,
        borderColor : '#D9D9D9',
        marginBottom : 20,
        paddingLeft : 28,
    },
    recentCategory : {
        fontSize : 14,
        color : '#4D5A69',
        fontWeight : '600',
        paddingBottom : 10
    },
    recentTime : {
        flexDirection : 'row',
        paddingBottom : 6
    },
    recentDate : {
        fontSize : 12,
        color : '#818A94'
    },
    recentHours : {
        fontSize : 11,
        color : '#574A4A',
    },
    hours : {
        flex : 1,
        alignItems : 'flex-end',
        marginRight : 20
    }
})