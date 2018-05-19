import React,{Component} from 'react';
import {View, Text} from 'react-native';
import axois from 'axios';

export default class AlbumList extends Component{
    state = { anime : []};

    // init
    componentWillMount(){
        const year = new Date().getFullYear();
        const season = 'spring';
        const url = 'https://api.jikan.moe/season/'+year+'/'+season;
        console.log(url);
        axois.get(url).then(response=>{
            if(response.status == 200){
                console.log(response);
                this.setState({anime:response.data.season})
            }
        });
    }
    
    render(){
        return(
            <View>
                <Text>AlbumList</Text>
            </View>
        )
    };
}