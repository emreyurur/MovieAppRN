/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import movie_data from './components/movie_data.json'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'



const App=()=>{
  const [list,setList]=useState(movie_data)

  const renderMovie=({item}:{item:any})=><MovieCard movie={item}/>

  const renderSeperator=()=> <View style={styles.seperator}/>

  const handleSearch=(text:string)=>{
    const filteredList=movie_data.filter(movie=>{
    const searchedText=text.toLowerCase()
    const currentTitle=movie.title.toLowerCase()
    
    return currentTitle.indexOf(searchedText)> -1
    
    })
    setList(filteredList)
  }

  return(
    <SafeAreaView style={styles.container}>
       <SearchBar onSearch={handleSearch} />
      <FlatList
      keyExtractor={item=>item.id}
      data={list}     
      renderItem={renderMovie}
      ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  }
})

export default App;
