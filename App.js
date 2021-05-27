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
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Modal,
    Button,
    TouchableOpacity
} from 'react-native';
import CustomButton from './Components/CustomButton'
import HeaderText from './Components/HeaderText'
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import NoteComponent from './Components/NoteComponent';

const App : () => Node = () => {
    const [modal,
        setmodal] = useState(false);
        const isDarkMode =true
    // const isDarkMode = useColorScheme() === 'dark';
    let backgroundCol=modal?"#d5e4ec":"#f3f3fb";
    return (
        <SafeAreaView style={{...styles.mainContainer,backgroundColor:backgroundCol}}>
        <StatusBar
            barStyle={isDarkMode
            ? 'light-content'
            : 'dark-content'}/>

        
        <View style={{...styles.sectionContainer,backgroundColor:backgroundCol}}>
          <View> 
        <HeaderText>
        Let's know your dietary preferences.
        </HeaderText>
        <HeaderText style={{fontSize:17, color:"#5a638b", paddingTop:10}}>
              Any ingredients you don't prefer or are allergic to?
        </HeaderText>
          </View>

            <CustomButton container_style ={styles.buttonContainer} 
                        data-test="callComp" 
                        title="save diet"  
                        color="#fff"
                        pressHandler={() => setmodal(true)} />
            <Modal
                animationType={"slide"}
         
                transparent={false}
                onRequestClose={() => setmodal(false)}
                transparent={true}
                visible={modal}>
                <TouchableOpacity  style={{flex:1,opacity:0}} onPressOut={() => {setmodal(false)}}/>          
                <View style ={styles.modal}>
                    <HeaderText>
                      Gluten
                    </HeaderText>
                    <HeaderText style={{fontSize:17, color:"#5a638b", paddingTop:10,}}>
                    Gluten is a hidden allergen and the general name for the proteins found in wheat, barley, and rye products.
                    </HeaderText>
                    <NoteComponent title="Eat">
                      Menu items with gluten in them will show up in your search and menus. Move the slider to filter out or note gluten as an allergen.
                    </NoteComponent>
                    <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly"}}>
                        <CustomButton container_style ={{...styles.buttonContainer, flex:3, alignItems:"flex-end", margin:10}} 
                            buttonStyle={{backgroundColor:"#464f7a"}}
                            data-test="saveComp" 
                            title="save choice"  
                            color="#fff"
                            pressHandler={() => setmodal(false)} />
                    <CustomButton container_style ={{...styles.buttonContainer,flex:1, alignItems:"flex-start"}} 
                            buttonStyle={{backgroundColor:"#464f7a", paddingHorizontal:13,paddingVertical:10,borderRadius:40}}
                            data-test="saveComp" 
                            title="X"  
                            color="#fff"
                            pressHandler={() => setmodal(false)} />
                    </View>
                </View>
     
            </Modal>
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

    modal: {
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
