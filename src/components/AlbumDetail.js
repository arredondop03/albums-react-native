import React from 'react'
import {Text, View, Image} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'



//This can be function based component because we will only display information.
//we dont need access to any states
const AlbumDetail = ({album}) => {
  //destructuring
  const {title, artist, thumbnail_image, image } = album
  const { 
    thumbnailStyle, 
    headerContentStyles, 
    thumbnailContainerStyles,
    headerTextStyle,
    imageStyle
    } = styles


return (

  <Card>
    <CardSection>
      <View style={thumbnailContainerStyles}>
        <Image 
        style={thumbnailStyle}
        source={{ uri: thumbnail_image }}
        />
      </View>

      <View style={headerContentStyles}>
        <Text style = {headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>

    </CardSection>



    <CardSection>
      <Image 
      style={imageStyle}
      source={{uri: image}} 
      />
    </CardSection>



    <CardSection>
      <Button onPress=/>
    </CardSection>

  </Card>
)

}


const styles = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyles:{
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
}

//exporting this component
export default AlbumDetail