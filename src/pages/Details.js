import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Global from '../styles/Global';
import Theme from '../styles/Theme';
import api from '../services/api';
import {FontAwesome5} from '@expo/vector-icons'; 
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import {AsyncStorage} from 'react-native';

export function Details({ navigation, route }) {
  
  const keyAsyncStorage = "@GIT.NETWORK:users";
  const [user, setUser] = useState({});

  async function carregarUsuarios( nickname ){
    try {
      response = await api.get('/users/' + nickname);
      const {data} = response;

      const obj = {
        id: data.id,
        name: data.name,
        login: data.login,
        company: data.company,
        bio: data.bio,
        avatar_url: data.avatar_url,
        url: data.url,
        followers: data.followers,
        public_repos: data.public_repos,
      }

      setUser(obj);
      console.log(obj);

    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try{
    const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const teste = JSON.parse(retorno);
            const newData = teste.filter(item => item.id != id);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));

            navigation.navigate('home');

        } catch(error) {
            console.error(error);
        }
    }
  
  useEffect(()=>{
      const {user} = route.params;
      carregarUsuarios(user);
    
  },[]);

  return (
    <View style={Global.container}>
         <View style={styles.perfil}>
            <Image style={styles.avatar} source={{uri: user.avatar_url }}/>
            <Text style={ styles.title }>{ user.name}</Text> 
            <Text style={styles.textUrl }>{ user.url}</Text>
            {user.company  && <Text style={styles.textRegular}>Empresa: { user.company }</Text> }
            <Text style={styles.textRegular}> Bio: { user.bio }</Text> 

         </View>

         <View style={styles.info}> 
            <View >
              <Text style={styles.titleInfo}>Repositórios</Text>
              <View style={ styles.infoCount }>
                <MaterialCommunityIcons name="source-repository" size={50} color="black" />
                <Text style={ styles.textCount}>{ user.public_repos }</Text>
              </View>  
            </View>

            <View >
              <Text style={styles.titleInfo}>Seguidores</Text>
              <View style={ styles.infoCount }>
                <FontAwesome5 name="users" size={40} color="black" />
                <Text style={ styles.textCount}>{ user.followers }</Text>
              </View>
            </View>
         </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {handleDelete(user.id); }}>
            <Text style={styles.buttonText}>Remover</Text>
          </TouchableOpacity> 
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  perfil:{
    alignItems:'center',
  },
  
  avatar: {
    width: 140,
    height: 140,
    borderRadius:90,
  },

  title:{
    fontSize: 30,
    fontFamily: Theme.fonts.robotoBold,
    color: '#6A5ACD',
  },

  textUrl:{
    fontSize: 14,
    fontFamily: Theme.fonts.rebotoRegular,
    color: Theme.colors.gray,
  },

  info:{
    marginTop:70,
    width: '75%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
 
  titleInfo:{
    fontSize:22,
    fontFamily: Theme.fonts.rebotoRegular,
  },

  infoCount:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  textCount:{
    fontSize: 25,
    fontFamily: Theme.fonts.robotoBold,
    color: Theme.colors.black
  },
  
  textRegular:{
    marginTop: 20,
    fontSize: 20,
    fontFamily: Theme.fonts.rebotoRegular,
    color: Theme.colors.gray,
    textAlign: 'center',
  },

  button: {
    height: 40,
    width: 220,
    backgroundColor:'#6A5ACD',
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
  }

})
