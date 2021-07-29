import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Theme from '../styles/Theme';
import {Ionicons} from '@expo/vector-icons'; 


export function ItemGit({avatar_url, name, onPress }) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: avatar_url }}/>
      <Text style={styles.nickname}>{name}</Text>
      <View style={styles.separador}></View>  
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={ onPress } >
            <Ionicons name="ios-eye-outline" size={25} color={Theme.colors.gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
        marginTop:15,
        width: '95%',
        height: 50,
        backgroundColor:'#DEE4E4',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    
    nickname:{
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: Theme.fonts.rebotoRegular,
    },
     
    button:{
        padding:15,
    },

    avatar: {
      width: 40,
      height: 40,
      borderRadius:90,
    },
   
});
