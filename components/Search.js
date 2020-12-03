import React from 'react';
import {StyleSheet, View, FlatList,TouchableOpacity, TextInput, Button, Text } from 'react-native';
import films from '../assets/filmsData';
import FilmItem from './FilmItem';
import {getMoviesFromSearch} from './API/TMDBApi';


class Search extends React.Component{
    constructor(props){
        super(props)
        this.searchedText = "";
        this.state ={
            films:[]
        }
    }
    _loadFilmsfromAPI(text){
        if (this.searchedText.length > 0) { 
            getMoviesFromSearch(this.searchedText).then(data =>{
                this.setState({
                    films : data.results
                });
                
            });
        }
    }
    _searchMovie(text){
        this.searchedText = text;
    }
    
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.textinput} onChangeText={(text)=>{this._searchMovie(text)}} placeholder="Tap to Search"/>
                <TouchableOpacity style={styles.button}>
                <Button title="Search" onPress={()=>{this._loadFilmsfromAPI()}}></Button>
                </TouchableOpacity>
                <FlatList data={this.state.films} renderItem={({item}) => <FilmItem film={item}/>} keyExtractor={(item) => item.id.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    }, 
    textinput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      },
    container:{
        marginTop:20,
        flex: 1,
        paddingRight:2,
        borderColor: '#f9c2ff',

    },
    textinput:{
        marginTop:20,
        borderWidth: 1,
        paddingLeft: 1,
        borderRadius : 20,
        width:200,
        height:40
    },
    button:{
        marginTop:20,
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius : 20,
        width:100,
        height:40

    },
    
})

export default Search;