//Import a library to help create a component
import React from 'react'; //knows how a component should behave and how to make it work with other components
import { Text, AppRegistry , View} from 'react-native'; //takes the output and puts it in a screen
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

    //we import to have access to code that lives elsewhere 
    //to make something appear in the screen we use tags that look like html tags but are not
    //that is jsx (our way to communcate with react native) which is what we use instead of writing every single function that we would need to display 
    //information on the screen


//Create a component 
    //A component is a javascript function that returns some amount of jsx


const App = () =>{

  return (
    // <Text>Some text</Text> //this a variable that is undefined because we dont have automatic acces to it
    //we need to implement something called import destructuring where we will say that we dont actually need 
    //to import the whole library, we only need access to the variable Text and AppRegistry
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
  );
  //Since we cannot return two jsx tags we will wrap them in a view tag to satisfy the requirement


};



//Render it to the device

    //when we write a fat arrow function without the curly braces it is implied that
    //what follows is what is being returned

    //In any react native application that we create we have to register at least one component
    //to the application
    //WE are telling here to react native that it is about to render an application called albums
    //the first argument is the name that we gave to the app in the cli

    //the second argument is the function that returns the first component to render in the application

AppRegistry.registerComponent('albums' , () => App) 