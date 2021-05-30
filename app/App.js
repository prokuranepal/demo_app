/**
 * Demo React Native App
 * https://github.com/prokuranepal/demo_app
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';

import LandingComp from './components/LandingComp';
import ModalContainer from './components/ModalContainer';

import {colors} from './theme/themeColors';
import {gluten_data} from './data/dummy_data';

const App  = () => {
    const [isModal, setisModal] = useState(false);
    const isDarkMode =true;

    // const isDarkMode = useColorScheme() === 'dark';
    const selectionHandler = (choice, type) => {
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
        ...Platform.select({

            ios: {
       
              fontFamily: 'Arial',
       
            },
       
            android: {
       
              fontFamily: 'Roboto',
       
            },
       
          })
    },
});

export default App;
