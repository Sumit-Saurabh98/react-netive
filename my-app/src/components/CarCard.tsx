import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CarCard = () => {
  return (
    <View style={{ display:'flex', alignItems:'center', paddingTop:"50%"}}>
      <Text style={{fontWeight:'bold', fontSize:20}}>Hello World!</Text>
      <View>
        <Image source={{uri: 'https://images.unsplash.com/photo-1697136646544-c9bd04d8bf98?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
  style={{width: 200, height: 200}} />
      </View>
      <View style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:10 }}>
        <Text>Car Name</Text>
        <Text>Rating: 4.5</Text>
      </View>
       <Text>This is the best car in the world.</Text>
       <Button title="Buy now" />
    </View>
  )
}

export default CarCard