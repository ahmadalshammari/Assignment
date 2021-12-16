import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'


export default function PasswordUpdate({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Update Password</Header>
      <TextInput
        label="Old Password"
        returnKeyType="done"
        secureTextEntry
      />
      <TextInput
        label="New Password"
        returnKeyType="done"
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={()=>{navigation.goBack()}}
        style={{ marginTop: 24 }}
      >
        Update Password
      </Button>
    </Background>
  );
}

