import  React,{Component} from 'react';
import Video from 'react-native-af-video-player';
import {
StyleSheet,
View
} from 'react-native';
import Layout from '../components/layout';
const url = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';
class Player extends Component{
	render(){
		return(
			 <Layout
			 video={
			 	<Video
			 	source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
			 	style={styles.video}
			 	resizeMode="contain"
			 	/>
			 }
			 />
			)
	
	}
}
const styles = StyleSheet.create({
  video: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Player