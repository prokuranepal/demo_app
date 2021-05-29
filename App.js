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
import {dummy_preference} from './data/dummy_data'
const App  = () => {
    const [isModal, setisModal] = useState(false);
    const isDarkMode =true;
    const modalHeader="Gluten";
    const dietaryDescription="Gluten is a hidden allergen and the general name for the proteins found in wheat, barley, and rye products.";
    // const optionDescription="Menu items with gluten in them will show up in your search and menus. Move the slider to filter out or note gluten as an allergen.";
    // const optionHeader="Eat";
    const [preferenceOption, setpreferenceoption] = useState(dummy_preference[0]);

    // const isDarkMode = useColorScheme() === 'dark';
    let backgroundCol=isModal?"#b0b0b0":"#f3f3fb";
    const optionSelectHandler=(value)=>{
        setpreferenceoption(dummy_preference[value])

    }

    return (
        <SafeAreaView style={{...styles.mainContainer,backgroundColor:backgroundCol}}>
            <StatusBar
            barStyle={isDarkMode
            ? 'light-content'
            : 'dark-content'}/>
        <LandingComp backgroundCol={backgroundCol} setisModal={setisModal}>
            <ModalContainer 
                isModal={isModal}
                actionClick={()=>{setisModal(false)}} 
                modalHeader={modalHeader} 
                preferenceOption={preferenceOption}
                selectState={optionSelectHandler}
                dietaryDescription={dietaryDescription}
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
