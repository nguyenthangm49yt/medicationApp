import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity, Alert} from 'react-native';
import {colors} from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from './styles'
import {PrimaryInput} from '../../components/forms/PrimaryInput'
const InfoBox = ({title, iconame, color}) => {
    
    return(
        <View style={styles.infoBox}>
                    <PrimaryInput
                          placeHolder={'User Name'}
                          isValid={true}
                          value={"name"}
                      />
                      <PrimaryInput
                          placeHolder={'Email'}
                          isValid={true}
                          value={"name@gmail.com"}
                      />
                      <PrimaryInput
                          placeHolder={'Phone Number'}
                          isValid={true}
                          value={"0355646464"}
                      />
        </View>
    )
}

export default class EditProfile extends React.Component {
    handleSave = () => {
        // TODO: Firebase stuff...
        Alert.alert(
            "Save",
            "Are you sure?",
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
      }
    handleAction = () => {
        // TODO: Firebase stuff...
        this.props.navigation.navigate('Playlists')
      }
    render(){
    return (
        <SafeAreaView style={styles.container}>
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}>
                    
                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>  
                <Text style={styles.headerTitle}>Edit your Infomation</Text>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
                onPress={this.handleSave}>
               
                    <MaterialCommunityIcons name="content-save-edit-outline" color="#36454f" size={30} />
                </TouchableOpacity>
            </View>

             {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:30}}>
                      {/* user info */}
                <View style={styles.userWrapper}>
                     
                        <Image style={styles.image} source={require('../../../assets/images/user.png')}/>
                    
                    <View style={styles.profileInfos}>
                        <View style={styles.nameSection}>
                            <Text style={styles.nameSectionAcc}>Name</Text>
                            <Text style={{color: colors.white}}>name@gmail.com</Text>
                        </View>
                    </View>
                </View>
                  {/* action */}
                  <TouchableOpacity style={styles.actions}
                    onPress={this.handleAction}>
                        <InfoBox title={'Like'} iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                  </TouchableOpacity>
               
                
                
            </ScrollView>
        </SafeAreaView>
    );
    }
};
