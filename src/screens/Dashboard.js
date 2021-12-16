import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>


      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('NewOrder')
        }
      >
        New Order
      </Button>
       <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('UpdateProfile')
        }
      >
        Update Porofile
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
