/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node}
from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import ModalContainer from './Components/ModalCotainer';
import HeaderText from './Components/HeaderText';
import CustomButton from './Components/CustomButton';

const App : () => Node = () => {
    const [isModal, setisModal] = useState(false);
    const isDarkMode =true;
    const modalHeader="Gluten";
    const dietaryDescription=" Gluten is a hidden allergen and the general name for the proteins found in wheat, barley, and rye products.";
    const optionDescription="Menu items with gluten in them will show up in your search and menus. Move the slider to filter out or note gluten as an allergen.";
    const optionHeader="Eat";
    // const isDarkMode = useColorScheme() === 'dark';
    console.log("ismodal", isModal)
    let backgroundCol=isModal?"#b0b0b0":"#f3f3fb";
    return (
        <SafeAreaView style={{...styles.mainContainer,backgroundColor:backgroundCol}}>
            <StatusBar
            barStyle={isDarkMode
            ? 'light-content'
            : 'dark-content'}/>
            <View style={{...styles.sectionContainer,backgroundColor:backgroundCol}}>
                <HeaderText>
                    Let's know your dietary preferences.
                </HeaderText>
                <HeaderText style={{fontSize:17, color:"#5a638b", paddingTop:10}}>
                    Any ingredients you don't prefer or are allergic to?
                </HeaderText>

                <CustomButton container_style ={styles.buttonContainer} 
                        data-test="callComp" 
                        title="save diet"  
                        color="#fff"
                        pressHandler={() => setisModal(true)} />
        <ModalContainer 
            isModal={isModal}
            actionClick={()=>{setisModal(false)}} 
            modalHeader={modalHeader} 
            dietaryDescription={dietaryDescription}
            optionDescription={optionDescription}
            optionHeader={optionHeader}/>    
        </View>
      
        </SafeAreaView>
    );
};

// const App : () => Node = () => {
//     // const isDarkMode = useColorScheme() === 'dark';
//     const isDarkMode =true

//     return (
     
//                     <Section/>

//     );
// };

const styles = StyleSheet.create({

    isModal: {
      flex:2.8,
      paddingHorizontal:40,
      paddingTop:40,
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      backgroundColor: '#f4f4fc',
 
   },
   buttonContainer: {
     flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,

}, 
    mainContainer: {
      flex:1,
    },
    sectionContainer: {
      flex:1,
        marginTop: 64,
        paddingHorizontal: 48,
        backgroundColor:"#f3f3fb"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
});

export default App;
