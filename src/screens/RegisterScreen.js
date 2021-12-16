import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: ''})
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})
  const [mobile, setMobile] = useState({ value: '' })


  const onSignUpPressed = () => {
      setName({ ...name})
      setEmail({ ...email})
      setPassword({ ...password})
      setMobile({ ...mobile })
      return
  }
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Create Account</Header>
      <TextInput
        label="Mobile"
        returnKeyType="next"
        value={mobile.value}
        onChangeText={(text) => setMobile({ value: text })}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text})}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text})}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text})}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
    </Background>
  );
}

