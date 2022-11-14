import React, { useEffect } from "react";
import { Text, View } from "react-native";


const abcde = ()=>{

    function abc(x,y,z){
      
      let a =x
      let b = y
      let c = a+b

      console.log(c)
    }

    useEffect(()=>{
        abc(2,3,3)  
    },[])

return(
    <View>
        <Text>in abcde screen</Text>
    </View>
)

}

export default abcde;