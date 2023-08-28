import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  // import Icon from 'react-native-vector-icons/Ionicons'
  
  import Icon from 'react-native-vector-icons/Ionicons';
  
  import {deviceWidth, deviceHeight} from './Dimensions';
  import Cards from './Cards';
  
  const Home = (props,style) => {
    const [city, setCity] = useState('');
  
    const cities = [
  
      {
        name:"Mumbai",
        image :require('..\\assets\\images\\image1.jpg')
      },
  
      {
        name:"New  Delhi",
        image :require('..\\assets\\images\\image2.jpg')
      },
  
      {
        name:"New york",
        image :require('..\\assets\\images\\image3.jpg')
      },
  
      {
        name:"Sao Paulo",
        image :require('..\\assets\\images\\image4.jpg')
      },
  
      {
        name:"Lisbon",
        image :require('..\\assets\\images\\image5.jpg')
      },
  
      {
        name:"Frankfrut",
        image :require('..\\assets\\images\\image7.jpg')
      }
  
    ];
  
    return (
  
       
  
      <View>
        
        <StatusBar barStyle="light-content" backgroundColor="red" />
  
        <ImageBackground
          source={require('..\\assets\\images\\image2.jpg')}
          style={styles.imageBackground}
        />
  
        <View
          style={{
            position: 'absolute',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <View style={styles.innerView}>
  
            <Icon name="menu" size={46} color="white" />
  
            <Image
              source={require('..\\assets\\images\\user.jpg')}
              style={styles.profilePhoto}
            />
  
          </View>
  
          <View style={{paddingHorizontal: 20, marginTop: 100}}>
            <Text style={styles.nameText}>Hello Shubham</Text>
  
            <Text style={styles.searchText}>Search the City By Name</Text>
  
            <View style={styles.searchBox}>
  
              <TextInput
                value={city}
                onChangeText={(val) => setCity(val)}
                placeholder="Enter Your City"
                placeholderTextColor="white"
                style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
              />
  
              <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name : city} )} >
                <Icon name="search" size={20} color="white" />
              </TouchableOpacity>
  
            </View>
  
            <Text style = {styles.savedCities}>My Cities</Text>
  
             <FlatList
             horizontal
             data = {cities}
             renderItem={
               ({item}) => (
                <Cards name={item.name} image={item.image} navigation={props.navigation}/>
               )
             }
             
             
             />
  
                
               
        
  
  
  
  
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    imageBackground: {
      width: deviceWidth,
      height: deviceHeight,
  
      imageStyle: {opacity: 0.5, backgroundColor: 'rgba(0,0,0,0.5)'},
    },
  
    innerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: deviceWidth - 20,
    },
  
    profilePhoto: {
      height: 46,
      width: 46,
      borderRadius: 50,
    },
  
    nameText: {
      fontSize: 40,
      color: 'white',
    },
  
    searchText: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
  
    searchInput: {
      paddingHorizontal: 10,
      color: 'white',
    },
  
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: 'white',
      borderRadius: 50,
      marginTop: 16,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
    },
  
    savedCities : {
      color : "white",
      fontSize : 26,
      paddingHorizontal : 10,
      marginTop: 220,
      marginBottom: 20,
      
      
    }
  
  });
  
  export default Home;
  