import React  from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image, BackHandler} from 'react-native';
import {colors} from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';


const song_ =     {
        title: 'Wild Dream',
        author: 'Taylor Swift',
        imageUrl: require('../../../assets/images/album.png'),
        musicUrl: require('../../../assets/music/wild-dream.mp3'),
    }

const PlayComponent = () => {
    const [song, setSong] = React.useState(song_);
    const [isPlaying , setIsPlaying ] = React.useState(false);
    const [isLiked , setIsLike ] = React.useState('heart-outline');
    const [sound, setSound] = React.useState();
    const [duration, setDuration] = React.useState();
    const [position, setPosition] = React.useState();
    
    React.useEffect(() => {
        const fetchSong = async () => {
          setSong(song_);
        }
          fetchSong();
      }, [])


      const onPlaybackStatusUpdate = async (status) =>  {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        //console.log(status)
      }
      

    // phat nhac
    async function playCurrentSong() {
            if (sound) {
            await sound.unloadAsync();
            }

           // console.log('Loading Sound');
           const { sound } =  await  Audio.Sound.createAsync(
                song.musicUrl ,
                { shouldPlay: isPlaying },
                onPlaybackStatusUpdate
           
            );
           
            setSound(sound);
           // console.log(newsound);
        
    }
    ////////////////////////////////////////
        React.useEffect(() => {
            if (song) {
                playCurrentSong();
              
            }
        }, [song]);
       
     
       // play pause music
        const handlePlayPauseButton = async () => {
              //console.log(isPlaying)
             
            if (!sound) {
                    return;
                }
           
            if (isPlaying) {
             // setIsPlaying(!isPlaying)
              await sound.pauseAsync();
                 
            }
            else {
             // setIsPlaying(!isPlaying)
                await sound.playAsync();
            }
        }


        function handleLikebtn() {
            setIsLike( (isLiked === 'heart-outline' ? 'cards-heart': 'heart-outline'))
        
        }
        const getProgress = () => {
            if(sound === null || duration === null || position === null)
            {return 0;}
            return (position / duration) * 100;
        }
   
        // if (!song) {
        // return null;
        // }




    return (
        <View style={styles.container}>
                <View style={[styles.progressBar ,{width: `${getProgress()}%`}]} />
                    <TouchableOpacity>
                        <Image source={song_.imageUrl} style={styles.imgSong}></Image>
                    </TouchableOpacity>
                    <View style={styles.rightContainer}>
                        <Text style={styles.titleSong}>{song_.title}</Text>
                        <Text style={styles.authorSong}>{song_.author}</Text>
                    </View>
                <View style={styles.leftContainer}>

                    {/* nut like */}
                    <TouchableOpacity style={styles.likeBtn}
                    onPress={handleLikebtn}>
                        <MaterialCommunityIcons name={isLiked} color="#000" size={33} />   
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
   
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         isplay: 'play',
    //         isLiked: 'heart-outline',
    //     }
    //  }
    
    // handleLikebtn = () => {
    //     this.setState({ isLiked: (this.state.isLiked === 'heart-outline' ? 'cards-heart': 'heart-outline'),})
    //     //console.log(this.state)
    //   }
      render (){
        return (
            // <View style={styles.container}>
            //     <View style={[styles.progressBar ,{width: `${PlayButton.getProgress()}%`}]} />
            //     <TouchableOpacity>
            //         <Image source={song.imageUrl} style={styles.imgSong}></Image>
            //     </TouchableOpacity>
            //     <View style={styles.rightContainer}>
            //         <Text style={styles.titleSong}>{song.title}</Text>
            //         <Text style={styles.authorSong}>{song.author}</Text>
            //     </View>
            //     <View style={styles.leftContainer}>

            //         {/* nut like */}
            //         <TouchableOpacity style={styles.likeBtn}
            //         onPress={this.handleLikebtn}>
            //               <MaterialCommunityIcons name={this.state.isLiked} color="#000" size={33} />   
            //         </TouchableOpacity>

            //          {/* nut play  */}
            //         <PlayComponent/>
            //     </View>
                
            // </View>
            <View>
                <PlayComponent/>
            </View>
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
});