import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CoffeeCard from '../components/CoffeeCard';
import { getProductsAPI } from '../service/allAPI';
import FeatherIcons from 'react-native-vector-icons/Feather'
import FAIcons from 'react-native-vector-icons/FontAwesome6'





export default function Home({ navigation }) {
    const [filter,setFilter]=useState("hot")
    const [products,setProducts]=useState([])
    const [search,SetSearch]=useState("")
    const filterItems=(value)=>{
        setFilter(value)
    }
    const getProducts=async()=>{
        const result=await getProductsAPI(filter)
        if(result.status==200){
          if(result.data.error){
            setProducts([])
          }
          else{
            setProducts(result.data.filter(item=>item.title.toLowerCase().includes(search)))
          }
        }
        else{
            console.log(result);
        }
    }
    useEffect(()=>{
        getProducts()
    },[search,filter])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.rel}>
        <LinearGradient 
  start={{ x: 0, y: 0 }} 
  end={{ x: 1, y: 0 }} 
  colors={['#333333', '#222222', '#111111']}
  style={styles.gradient}
>
  <View style={styles.banner}>
    <View style={styles.bannerContainer}>
      <View>
        <Text style={styles.loc}>Location</Text>
        <Text style={styles.loca}>Bilzen, Tannjungbalai <FAIcons name='chevron-down' size={13}  /> </Text>
      </View>
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1661540953629-b99036ab0f55?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        style={styles.image}
      />
    </View>
    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#555555', '#444444', '#444444']} style={{ borderRadius: 15,marginHorizontal:15 }}>

    <View style={styles.inputContainer}>
      <FeatherIcons name='search' color='lightgrey' size={30} />
      <TextInput
        placeholder="Search coffee"
        placeholderTextColor="white" 
        value={search}
        onChangeText={text=>SetSearch(text.toLowerCase())}

        style={styles.input}
      />
      <TouchableOpacity style={styles.filterIconContainer}>
        <FAIcons name='sliders' size={30} style={{ backgroundColor: '#cc6d00', color: 'white', padding: 10, borderRadius: 10 }} />
      </TouchableOpacity>
    </View>
</LinearGradient>

  </View>
</LinearGradient>

            <View style={styles.imageContainer}>
                  <Image
                  source={require('../images/frame.png')}
                  style={styles.imageFrame}
                  />
              </View>
            <View style={styles.aaa}>

          </View>
        </View>
        <ScrollView horizontal style={styles.sv}>
          
        <TouchableOpacity onPress={()=>filterItems("hot")} style={filter=="hot"?styles.filter:styles.cappuccino}><Text style={filter=="hot"?styles.filterText:styles.cappuccinoText}>Hot</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=>filterItems("cappuccino")} style={filter=="cappuccino"?styles.filter:styles.cappuccino}><Text style={filter=="cappuccino"?styles.filterText:styles.cappuccinoText}>Cappuccino</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=>filterItems("machiato")} style={filter=="machiato"?styles.filter:styles.cappuccino}><Text style={filter=="machiato"?styles.filterText:styles.cappuccinoText}>Machiato</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterItems("latte")} style={filter=="latte"?styles.filter:styles.cappuccino}><Text style={filter=="latte"?styles.filterText:styles.cappuccinoText}>Latte</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterItems("americano")} style={filter=="americano"?styles.filter:styles.cappuccino}><Text style={filter=="americano"?styles.filterText:styles.cappuccinoText}>Americano</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterItems("expresso")} style={filter=="expresso"?styles.filter:styles.cappuccino}><Text style={filter=="expresso"?styles.filterText:styles.cappuccinoText}>Expresso</Text></TouchableOpacity>
        </ScrollView>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>

            
                <FlatList
                data={products}
                renderItem={({ item }) => 

                <CoffeeCard item={item} />
                
              }
                keyExtractor={(item, index) => index.toString()} // You should provide a unique key extractor
                ListEmptyComponent={<Text>Nothing to display</Text>}
                contentContainerStyle={{ justifyContent: 'space-evenly',flexDirection:"row",flexWrap:"wrap" }}

              />
            

        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
  },
  banner: {
    height: 315,
    padding:20,
  },
  gradient: {
    flex: 1,
  },
  loc: {
    color: "gray"
  },
  loca: {
    color: "white",
    fontSize:17
  },
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop:20
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius:10,
    marginTop:10
  },
  rel:{
    position:"relative"
  },
  inputContainer: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 5,
  },
  aaa:{
    height:80,
    backgroundColor:"#FAF9F6"

  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: 'white',
  },
  icon: {
    marginRight: 10,
  },
  filterIconContainer: {
    marginLeft: 'auto',
  },
  imageContainer:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
   width:"100%",
   top:230,
    zIndex:1
},
imageFrame:{
  width:370,
  height:160,
    
},
cappuccino:{
    backgroundColor:"white",
    alignItems:"baseline",
    padding:10,
    margin:10,
    borderRadius:10

},
cappuccinoText:{
    color:"black",
    fontSize:17,
    fontWeight:"500",
},
sv:{
    padding:20,
    paddingRight:30
},
filter:{
    backgroundColor:"#cc6d00",
    alignItems:"baseline",
    padding:10,
    margin:10,
    borderRadius:10
},
filterText:{
    color:"white",
    fontSize:17,
    fontWeight:"500",
}
});
