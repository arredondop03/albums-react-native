import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

//Definition of state: A plain JavaScript object (only works with class based components) used to 
//record and respond to user-triggered events
//props is a way to communicate from a parent component to a child component


class AlbumList extends Component {

  state = { albums: [] } //this is to update the data overtime

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')   //this is the http request
    .then( response => this.setState({albums: response.data}))  //after we get the response fro the API we update the state of albums and the AlbumsList component rerenders
  } //here we are also producing an array

  renderAlbums() {
    return this.state.albums.map( album => 
    <AlbumDetail key={album.title} album={album}/>// we need to pass the infromation to a child component(in this case the albumdetail component) so we
    //need to pass it as a prop

    )
  } //the key has to be unique so it is better if we put something that might me unique
  //like the albums name or if we have access to the albums ID would be better to use that

  render() {
    console.log(this.state)

    return(
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;