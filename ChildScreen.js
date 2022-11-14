import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Context from './Context';
class ChildScreen extends Component {
    render(){
        return(
            <Context.Consumer>
            {data=>( 
            <View>
                <Text>Child screen  : {data}</Text>
            </View>
            )}
            </Context.Consumer>
        )
    }
}
export default ChildScreen;