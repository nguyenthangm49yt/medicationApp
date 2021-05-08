import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../config/colors';


export const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>
                Profile screen
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#FCFCFC',
      padding: 20,
      width: '100%',
    }
});