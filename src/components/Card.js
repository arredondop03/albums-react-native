import React from 'react'
import {View} from 'react-native'


//this component will be kind of like a div and we will write all the styles here
//so we dont have to write them again everytime that we create a new component 

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}
 
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, //here we are saying that we dont want any shadows
    //to the left or right of the card , only in the bottom
    shadowOpacity: 0.1, //this can be from 0 to 1
    shadowRadius: 2, //this is the same as border radius but for the shadow, so it looks just like the 
    //card
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10

  }
}



export default Card
