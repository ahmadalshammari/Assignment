import React, { useState,Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'


export default function NewOrder({ navigation }) {
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>New Order</Header>
      <Button
        mode="contained"
        onPress={()=>{navigation.goBack()}}
        style={{ marginTop: 24 }}
      >
        Submit Order
      </Button>
    </Background>
  );
}

