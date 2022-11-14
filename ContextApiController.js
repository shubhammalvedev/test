import React from "react";
import { Text,View } from "react-native";


//class will always extends React.Component
class ContextApiController extends React.Component{
    //contructor always need to define
    constructor(){
        super()
        this.state = {
            //our state variable here
            variableFromAnotherClass :'im in another class'
        }
    }

    componentDidMount(){
        console.log('im in component did mount!!!!!')
    }


    functionfromantoherclass = ()=>{
        console.log('im in another class')
    }
   
}

export default ContextApiController;