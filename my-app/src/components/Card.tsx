import { View, Text, Image, Button } from 'react-native'
import React, { useState } from 'react'

const Card = () => {
  const[name, setName] = useState("Sumit Saurabh")
  const [color, setColor] = useState(false)
  return (
    <View style={{flexDirection: 'column', alignItems: 'center', paddingTop: "50%"}}>
        <View style={{borderColor: 'black', borderWidth: 1, borderRadius: 100, shadowColor: '#001', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
  style={{width: 200, height: 200}} />
        </View>
  <Text style={{paddingTop: 30, paddingBottom: 10, fontWeight: 'bold', fontSize: 20, color: !color ? 'red' : 'black'}}>{name}</Text>
  <Text>Hi, I am Sumit Saurabh. I love coding.</Text>
  <View style={{paddingTop: 10}}>
    <Button title="View Profile" onPress={() => setColor(!color)} />
  </View>
    </View>
  )
}

export default Card
