import React, {useEffect} from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { SplashBackground, Logo  } from '../assest'
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Login');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground  source = {SplashBackground} style = {styles.background}>
        <LottieView style = {styles.logo} source = { require ('../assest/animate/Splash.json')} autoPlay loop />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    logo : {
        width : 200,
        height : 280,
    }
})
