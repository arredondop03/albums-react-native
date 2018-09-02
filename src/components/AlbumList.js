import React, {Component} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'


//Definition of state: A plain JavaScript object (only works with class based components) used to 
//record and respond to user-triggered events
//props is a way to communicate from a parent component to a child component


class AlbumList extends Component {

  state = { albums: [] } //this is to update the data overtime

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')   //this is the http request
    .then( response => this.setState({albums: response.data}))  //after we get the response fro the API we update the state of albums and the AlbumsList component rerenders
  } 

  renderAlbums() {
    return this.state.albums.map( album => <Text>{album.title}</Text>)
  }

  render() {
    console.log(this.state)

    return(
      <View>
      {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList;