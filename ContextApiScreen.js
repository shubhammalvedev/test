import React, { Component } from "react";
import { View , Text, TouchableOpacity} from "react-native";
import ContextApiController from "./ContextApiController";
import Controller2 from "./Controller2";

const stranger = new Controller2()

class ContextApiScreen extends ContextApiController{

    



    render(){
        return(
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity 
                onPress={()=>{
                  stranger.funtioninController2()
                }}
                style={{backgroundColor:"cyan", padding:10}}>
                    <Text>Btn</Text>
                </TouchableOpacity>

                <Text>{stranger.state.variable2}</Text>
            </View>
        )
    }
}



export default ContextApiScreen;
