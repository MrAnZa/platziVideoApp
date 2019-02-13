import  React,{Component} from 'react';
import Video from 'react-native-af-video-player';
import {
StyleSheet,
ActivityIndicator
} from 'react-native';
import Layout from '../components/layout';
const url = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';
class Player extends Component{
	state={
		loading:true,
	}
	onBuffer=({isBuffering}) =>{
		this.setState({
			loading: isBuffering
		})
	}
	onLoad=()=>{
		this.setState({
			loading: false
		})
	}
	render(){
		return(
			 <Layout
			 loading={this.state.loading}
			 video={
			 	<Video
			 	source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
			 	style={styles.video}
			 	resizeMode="contain"
			 	onBuffer={this.onBuffer}
			 	onLoad={this.onLoad}
			 	/>
			 }
			 loader={
			 	<ActivityIndicator color="red"/>
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