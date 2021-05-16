import React  from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet,Image, BackHandler} from 'react-native';
import {colors} from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { AppStatus } from '../../../AppStatus';
import { useNavigation } from '@react-navigation/native';

const Recommend = [
      {
          id: '1',
          title: 'Wild Dream',
          author: 'Taylor Swift',
          imageUrl: require('../../../assets/images/album.png'),
          musicUrl: require('../../../assets/music/wild-dream.mp3'),
      },
      {
          id: '2',
          title: 'See You Again',
          author: 'Charlie Puth',
          imageUrl: require('../../../assets/images/album1.jpg'),
          musicUrl: require('../../../assets/music/see-you-again.mp3'),
      },
      {
          id: '3',
          title: 'A Thousand Year',
          author: 'Christina Perri',
          imageUrl: require('../../../assets/images/album2.jpg'),
          musicUrl: require('../../../assets/music/A-Thousand-Years.mp3'),
      },
      
  ]
const PlayComponent = () => {

    const [song, setSong] = React.useState();
    const [isPlaying , setIsPlaying ] = React.useState(true);
    const [isLiked , setIsLike ] = React.useState(false);
    const [sound, setSound] = React.useState();
    const [duration, setDuration] = React.useState();
    const [position, setPosition] = React.useState();

    const { songId } = React.useContext(AppStatus);
    const navigation = useNavigation();
  
    React.useEffect(() =>   {
      const fetchSong = async () => {
              const data  =  Recommend.filter((Recommendsong) => {
                return Recommendsong.id === songId
              })
              setSong(data[0]);
          
          }

      fetchSong();
      }, [songId])


    const onPlaybackStatusUpdate = async (status) =>  {
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
     
    }
      
    // phat nhac
    async function playCurrentSong() {
     
        if (sound) {
          console.log('Unloading Sound');
        await sound.unloadAsync();
        }
         
        const  { sound: newSound  } =   await  Audio.Sound.createAsync(
          song.musicUrl ,
          { shouldPlay: isPlaying },
          onPlaybackStatusUpdate
      
         );
       
        setSound(newSound );
        
    }
    ////////////////////////////////////////
    React.useEffect(() => {
      if (song) {
          playCurrentSong();
        
      }
    }, [song]);
       
     
       // play pause music
    const handlePlayPauseButton = async () => {
         
        if (!sound) {
                return;
            }
        
        if (isPlaying) {
         
          await sound.pauseAsync();
              
        }
        else {
         
            await sound.playAsync();
        }
    }

    /// functions of component in the playwidget bar
    
    function handleLikebtn() {
        setIsLike( !isLiked )
    
    }
    
    ////
    const getProgress = () => {
        if(sound === null || duration === null || position === null)
        {return 0;}
        return (position / duration) * 100;
    }
   
    if (!song) {
    return null;
    }

    return (
        <View style={styles.container}>
                <View style={[styles.progressBar ,{width: `${getProgress()}%`}]} />
                    <TouchableOpacity onPress={() => navigation.navigate('Music')}>
                        <Image source={song.imageUrl} style={styles.imgSong}></Image>
                    </TouchableOpacity>
                    <View style={styles.rightContainer}>
                        <Text style={styles.titleSong}>{song.title}</Text>
                        <Text style={styles.authorSong}>{song.author}</Text>
                    </View>
                <View style={styles.leftContainer}>

                    {/* nut like */}
                    <TouchableOpacity style={styles.likeBtn}
                    onPress={handleLikebtn}>
                        <MaterialCommunityIcons name={isLiked ? 'cards-heart' :  'heart-outline'} color="#000" size={33} />   
                    </TouchableOpacity>

                    {/* nut play  */}
                <TouchableOpacity style={styles.playBtn}
                onPress={handlePlayPauseButton }>
                        <MaterialCommunityIcons name={isPlaying ? 'pause' : 'play'} color="#000" size={33} />
                </TouchableOpacity>
                 </View>
        </View>
    );
};
export default class PlayWidget extends React.Component {
  // handleTouch = () => {
        
  //   const navigation = useNavigation();

  //     return (
  //       <Button
  //         title="Back"
  //         onPress={() => {
  //           navigation.goBack();
  //         }}
  //       />
  //     );
  //   }   
  render (){
       
        
        return (
           
            <SafeAreaView>
               
                
                <PlayComponent />
            </SafeAreaView>
          );
      }
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.secondaryBg,
    flexDirection:'row',
    height: 55,
    width: '100%',
    padding: 6,
    paddingRight:0,
    paddingLeft:0,
    marginTop: 5,
},
    progressBar:{
    
      position: 'absolute',
      width: '100%',
      height: 3,
      backgroundColor: colors.facebookBg,  
    },
  rightContainer:{
    flexDirection: 'column',
   // backgroundColor: "#cecece",
  },
  imgSong:{
      width:45,
      height: 45,
      borderRadius:90,
      marginRight: 10,
      marginLeft: 15,
  },
  titleSong:{
      fontSize: 16,
      fontWeight: 'bold',
  },
  authorSong:{
    fontSize: 14,
  },
  leftContainer:{
      position: 'absolute',
      
      right: 15,
      flexDirection: 'row',
   //   marginTop: 10,
  },
  playBtn:{
    //backgroundColor: "#464564",
    padding:10,
    
    
  },
  likeBtn:{
    padding:10,
   // backgroundColor: "#464564",
    marginRight: 5,
  },
  touch:{
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: "#464564",
    bottom: 50,
  }
});