import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import {colors} from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from './styles'

const Action = ({title, iconame, color}) => {
    
    return(
        <View style={styles.actions}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name={iconame} color={color} size={30} />
                
                </View>
                
                <Text style={styles.actionTitle}>{title}</Text>
            
                <MaterialCommunityIcons name="chevron-right" color={color} size={30} style={styles.moreIcon}/> 
        </View>
    )
}

export default class Profile extends React.Component {
    handleSetting = () => {
        // TODO: Firebase stuff...
        this.props.navigation.navigate('Setting')
      }
    render(){
    return (
        <SafeAreaView style={styles.container}>
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}>
                    
                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>  
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
                onPress={this.handleSetting}>
               
                    <MaterialCommunityIcons name="cog-outline" color="#36454f" size={30} />
                </TouchableOpacity>
            </View>

             {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:30}}>
                      {/* user info */}
                <View style={styles.userWrapper}>
                    <View style={styles.image}>
                        
                    </View>
                    <View style={styles.profileInfos}>
                        <View style={styles.nameSection}>
                            <Text style={styles.nameSectionAcc}>Name</Text>
                            <Text>name@gmail.com</Text>
                        </View>
                    </View>
                </View>
                  {/* action */}
                <TouchableOpacity style={styles.actions}>
                    <Action title={'Like'} iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actions}>
                    <Action title={'Playlists'} iconame={'playlist-music-outline'} color={'#283655'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actions}>
                    <Action title={'Edit Profile'} iconame={'account-edit-outline'} color={'#88d8b0'}/>
                </TouchableOpacity>
                
                
            </ScrollView>
        </SafeAreaView>
    );
    }
};
