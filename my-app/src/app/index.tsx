import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Greeting from '../components/Greeting'
import Card from '../components/Card'
import CarCard from '../components/CarCard'
import InternalStyleSheet from '../components/InternalStyleSheet'
import Subject from '../components/Subject'

const index = () => {
  const [subject, setSubject] = useState<string>("React Native")
  return (
    <>
      {/* <Text>Hello, World!</Text> */}
      {/* <Card/> */}
      {/* <Greeting /> */}
      {/* <CarCard/> */}
      {/* <InternalStyleSheet/> */}
      <View style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: 'white', padding:10}}>
        <Subject subject={subject}/>
      </View>
      </>
  )
}




export default index