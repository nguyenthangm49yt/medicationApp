import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const EditForm = (props) => {
    const {placeHolder, value} = props;
    const [text, onChangeText] = React.useState(value);
    
    return (
        <View style={styles.container}>
            <TextInput value={text}
                onChangeText={onChangeText}
                style={styles.input}
                placeHolder={placeHolder}
            />
              <TouchableOpacity style={styles.clearBtn}
                  onPress={ () => onChangeText({text:""})} >
                <MaterialCommunityIcons name="close" color="#cccccc" size={20} />
              </TouchableOpacity> 
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#eeeeee',
      borderRadius: 15,
      justifyContent: 'space-between',
      borderColor: '#dddddd',
      borderWidth: 1,
    },
    input: {
      padding: 20,
    },
    clearBtn:{
      width:40,
      height:40,
      color: "#d6d7da",
      position: 'absolute',
      left:300,
      top:8,  
      padding:10,
      
    },
  });