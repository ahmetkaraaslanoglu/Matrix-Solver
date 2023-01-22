import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const SelectionButton = ({dataName}) => {
    return(
        <View
            style={{
                display: 'flex',
                height: 60,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                width: 300,
                backgroundColor: '#2AC062',
                shadowColor: '#2AC062',
                shadowOpacity: 0.5,
                shadowOffset: {
                    height: 10,
                    width: 0
                },
                elevation: 10,
                shadowRadius: 5,
                marginTop:10
        }}>
            <Text>{dataName}</Text>
        </View>

    );
}
export  default  SelectionButton;
