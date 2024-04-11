import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

export default function Notification() {
  const theme=useTheme()
  return (
<View style={{backgroundColor:theme.colors.background, padding:20, height:"100%"}}>
      <View style={{ backgroundColor: theme.colors.primary, margin:5, padding:20 }}>
        <Text style={{color:theme.colors.title}}>Notification</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.secondary, margin:5, padding:20 }}>
        <Text style={{color:theme.colors.title}}>Notification</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.error, margin:5, padding:20 }}>
        <Text style={{color:theme.colors.title}}>Notification</Text>
      </View>

      <View style={{ backgroundColor: theme.colors.tertiary, margin:5, padding:20 }}>
        <Text style={{color:theme.colors.title}}>Notification</Text>
      </View>
</View>
  )
}

const styles = StyleSheet.create({})