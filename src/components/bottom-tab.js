import React from 'react';
import { Text, View } from 'react-native'

const Tabs = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={ textStyle }>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    textStyle:{
        color:'white',
    },
    viewStyle:{
        backgroundColor :'##3d2a4e',
        alignItems : 'center',
        justifyContent : 'center',
        height : 50,
        shadowColor : '#000',
        shadowOffset : { width:0, height: 2 },
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative' 
    }
};

export default Header;