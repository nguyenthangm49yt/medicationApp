import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../config/colors';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FindForm } from '../../components/forms/FindForm/FindForm';
import { validateEmail, URL } from '../../utils';
import useAxios from 'axios-hooks'
import axios from 'axios'
import Toast from 'react-native-toast-message';
export const FindScreen = () => {
    const [keyword, setKeyword] = useState('');
    let list = ``;
    const onSearch = (text) => {
        setKeyword(text)
    }
    const [{ data, loading, error }, refetch] = useAxios(
        `${URL}/songs-search?search=${keyword}`
    )
    if (data) {
        if(data.songs.length==0) {
            <Text style={styles.contentTitle}>
                Not Found
            </Text>
        }
        else {
            let songs = data.songs[`\u0000*\u0000items`]
            console.log(songs)
            list = songs.map((item, index) =>{
                return (
                    <TouchableOpacity style={styles.recommendItem} 
                    // onPress={onPlay} 
                    >
                        <View >
                            <Image source={item.path_img} style={styles.imageMusic}/>
                        </View>           
                        <Text
                            style={styles.title}>
                            {item.songTitle}
                        </Text>
                        <Text
                            style={styles.author}>
                            {item.artists[0] ? item.artists[0].artistName :''}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
    }
    return (
        <View style={styles.container}>
              <Toast ref={(ref) => Toast.setRef(ref)} />
              
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}>

                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>

                <View style={styles.form}>
                    <FindForm
                        onSearch={(text) => onSearch(text)}
                        placeHolder={"Search"}

                        value={"find something"}
                    />
                </View>
            </View>
            
            <View style={styles.content}>
            {list}
                <ScrollView style={styles.contentResult}>

                </ScrollView>
            </View>
        </View>
    );
};