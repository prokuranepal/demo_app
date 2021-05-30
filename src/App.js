/**
 * Demo React Native App
 * https://github.com/prokuranepal/demo_app
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import ModalContainer from './components/ModalContainer';
import LandingComp from './components/LandingComp';
import {gluten_data} from './data/dummy_data';
import {colors} from './ThemeColors/themeColors';
const App  = () => {
    const [isModal, setisModal] = useState(false);
    const isDarkMode =true;

    // const isDarkMode = useColorScheme() === 'dark';
    const selectionHandler = (choice, type) => {
        console.log(choice, type);
        setisModal(false);
    }

    let backgroundCol=isModal?colors.background:colors.backgroundDim;
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
                diet={gluten_data}
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
