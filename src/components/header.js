
//Import libraries for making a component
import React from 'react'
import {Text, View} from 'react-native' //view is to position objects


//make a component
const Header = (props) =>{      //we will name this function the same as the name of the file
  const {textStyle , viewStyle} = styles
  return ( 
    <View style = {viewStyle}>
  <Text style = { textStyle } >{props.headerText}</Text>
  </View>
  )
} 


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}


//make the component to other parts of the app
//we will not use AppRegistry here because we can only use it in App comonent which is the first view that will be rendered
//we refer to it as "root" , this component is a 'child' 
export default Header;



