import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Bikeframe from '../components/bikeinfo';


export default function shop({navigation}){
    return(
        <View>
            <View style ={styles.intro}>
            <FontAwesome5 name="grip-lines" size={24} color="black" />
                        <View style={styles.bike}> 
                            <Fontisto name="bicycle" size={24} color="black" />
                        </View> 

                        <View style={styles.bellsearch}>
                            <AntDesign name="search1" size={24} color="black" />
                                <View style={styles.bell}>
                                    <Fontisto name="bell" size={24} color="black" /> 
                                </View>
                        </View>
            </View>

            <View style={styles.Title}>
                        <Text style={styles.Title1}>The World's </Text>
                        <Text style={styles.Title2}>Best Bikes</Text>
            </View>
            
            
            <Text style={styles.Title3}>Categories</Text>
            <View>
            <FlatList
                    data={categoryType}
                    renderItem={({item}) => {
                        return <Categories text={item.text} />;
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
               
            </View>
            <View style={styles.bikes}>
            
                <FlatList
                    data={bikesInfo}
                    renderItem={({item}) => {
                        return (
                            <Bikeframe
                                bName={item.bName}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }}
                    keyExtractor={item => {
                        item.id;
                    }}
                    horizontal={false}
                    numColumns={2}
                />
            </View>
                        <Image
                                style={styles.bikeSize}
                                source={require("../assets/bmk.png")}>
                        </Image>



                    




        </View>
    );
}

const categoryType=[
    {id:"1", text:"All"},
    {id:"2", text:"Roadbike"},
    {id:"3", text:"Mountain"},
    {id:"4", text:"Urban"},
];

const Categories = ({text}) => {
    return (
      <View style={styles.tab}>
        <Text style={styles.Text}>{text}</Text>
      </View>
    );
   
  };

  const bikesInfo = [
        {
            id:"1",
            bName:"Mountain Rager",
            price:"1,700.00",
            image:require("../assets/bmk.png"),
        },

        {
            id:"2",
            bName:"Slime Bike",
            price:"1,500.00",
            image:require("../assets/bmnk.png"),
        },
        {
            id:"3",
            bName:"Narco Bike",
            price:"1,200.00",
            image:require("../assets/bmxmk.png"),

        },
        {
            id:"4",
            bName:"Legzus",
            price:"9800.00",
            image:require("../assets/hybrid.png"),

        }
  ];

const styles=StyleSheet.create({

    intro:{
        marginTop:35,
        margin:"4%",
        flexDirection:"row",
    
    },

    bike:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:130,
    },

    bellsearch:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:100,
    },

    bell:{
        flexDirection:"row",
        marginTop:0,
        marginLeft:18,
    },

    Title:{
        marginTop:25,
        flexDirection:"row",
    },

    Title1:{
        fontSize:20,
        marginTop:-25,
        marginLeft:20,
        color:"gray",

    },

    Title2:{
        fontSize:26,
        fontWeight:"bold",
        color:"#ff792f",
        marginTop: -30,
    },

    tab: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: "#e6e6e6",
        marginHorizontal: -3,
        marginVertical: 10,
        borderRadius: 12,
        marginTop: 10,
        marginLeft:20,

      },
    Text: {
        fontSize: 20,
        color: 'gray',

      },
    bikeSize: {
        width: 200,
        height: 160,
        borderRadius: 60,
        resizeMode: "contain",
        marginTop: 20,
        
    },
    Title3:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        marginLeft:20,
        marginTop: 15,
    }

    
});