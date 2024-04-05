import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FAIcons from 'react-native-vector-icons/FontAwesome6'


export default function CoffeeCard({item}) {
  return (
    <View style={styles.card}>
        <View style={styles.imgRel}>
            <Image
            source={{
                uri:item.image
            }}
            style={styles.cardImg}
            
            />
<View style={styles.rating}>
                <Text style={styles.ratingText}><FAIcons name='star' size={13} style={{color:"#FFAA33"}} solid  /> 4.5</Text>
    
</View>       
 </View>
 <Text style={styles.title}> {item.title}</Text>
 <Text style={{marginLeft:7}}>with Chocolate</Text>
 <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:5}}>
    <Text style={styles.price}>$ 4.53</Text>
    <TouchableOpacity style={styles.add}>
        <Text style={{color:"white",fontSize:17}}>+</Text>
    </TouchableOpacity>
 </View>


    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        width:170,
        height:260,
        borderRadius:21,
        backgroundColor:"white",
        padding:10,
        marginTop:10
    },
    cardImg:{
        width:"100%",
        height:150,
        borderRadius:20

    },
    imgRel:{
        position:"relative"
    },
    rating:{
        color:"white",
        fontWeight:"600",
        position:"absolute",
       borderTopLeftRadius:20,
        fontSize:18,
        backgroundColor:"#00000030",
        width:60,
        height:30,
        borderBottomRightRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    ratingText:{
        fontSize:16,
        color:"white",
        marginTop:5
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        marginTop:5,
        marginLeft:1
    },
    price:{
        fontSize:22,
        color:"black",
        fontWeight:"bold",
        marginLeft:6,
        marginTop:3
    },
    add:{
        backgroundColor:"#cc6d00",
        justifyContent:"center",
        alignItems:"center",
        width:35,
        height:35,
        borderRadius:10
    }
})