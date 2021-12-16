import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,Pressable,DateTimePicker } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'


export default function UpdateProfile({ navigation }) {
  const [name, setName] = useState({ value: ''})
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})
  const [mobile, setMobile] = useState({ value: '' })


  const onUpdatePressed = () => {
      setName({ ...name})
      setEmail({ ...email})
      setPassword({ ...password})
      setMobile({ ...mobile })
      navigation.goBack();
      return
  }
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Update Profile</Header>
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
      <Button
        mode="contained"
        onPress={() => navigation.navigate('PasswordUpdate')}
        style={{ marginTop: 24 }}
      >
        Update Password
      </Button>
      <Button
        mode="contained"
        onPress={onUpdatePressed}
        style={{ marginTop: 24 }}
      >
        Update
      </Button>
    </Background>
  );
}

