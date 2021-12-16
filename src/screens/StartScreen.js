import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Assignment</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
