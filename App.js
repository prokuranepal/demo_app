/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import ModalContainer from './components/ModalContainer';
import LandingComp from './components/LandingComp';
import {preference_data} from './data/dummy_data'
const App  = () => {
    const [isModal, setisModal] = useState(false);
    const isDarkMode =true;

    // const isDarkMode = useColorScheme() === 'dark';
    const selectionHandler = (choice, type) => {
        console.log(choice, type);
        setisModal(false);
    }
    
    let backgroundCol=isModal?"#b0b0b0":"#f3f3fb";
    return (
        <SafeAreaView style={{...styles.mainContainer,backgroundColor:backgroundCol}}>
            <StatusBar
            barStyle={isDarkMode
            ? 'light-content'
            : 'dark-content'}/>
        <LandingComp backgroundCol={backgroundCol} setisModal={setisModal}>
            <ModalContainer 
                isModal={isModal}
                actionClick={selectionHandler} 
                diet={preference_data}
                />    
        </LandingComp> 
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

    mainContainer: {
        flex:1,
    },
});

export default App;
