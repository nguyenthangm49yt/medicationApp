import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
import Slider from '@react-native-community/slider';

 export const Music = () => {
   return (
       <View style={styles.container}>
           <Image
            source={require('../../../assets/images/bgShape7.png')}
            style={styles.bgImage1}
            />
            <Image
                source={require('../../../assets/images/bgShape8.png')}
                style={styles.bgImage2}
            />
            <Image
                source={require('../../../assets/images/bgShape9.png')}
                style={styles.bgImage3}
            />
          
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/images/backWhite.png')} />
                </TouchableOpacity>
                <View style={styles.headerRightBtnsWrapper}>
                <TouchableOpacity>
                    <Image
                    style={{marginRight: 15}}
                    source={require('../../../assets/images/heartGray.png')}
                    ></Image>
                </TouchableOpacity>
                    
                </View>
            </View>

            <View style={styles.songContent}>
                <Image source={require('../../../assets/images/album.png')}
                style={{height:250,width:250, }}/>
                <Text style={styles.title}>Focuss Attention</Text>
                <Text style={styles.subTitle}>7 DAYS OF CALM</Text>
            </View>
            <View style={styles.playerControlWrapper}>
                <View style={styles.playerControl}>
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/fastBackward.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/playOrStop.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../../assets/images/fastForward.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.progressBar}>
               
                <Slider
                style={{width: 350, height: 40, }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#8E97FD"
                maximumTrackTintColor= "#dddddd"
                />
                <View style={styles.timerWrapper}>
                    <Text>1:30</Text>
                    <Text>45:00</Text>
                </View>

            </View>
       </View>
   );  
 };