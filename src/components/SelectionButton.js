import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface buttonProps {
    name: string;
    goToSolver: () => void;
}
const SelectionButton = ({name,goToSolver}:buttonProps) => {


    return (
        <TouchableOpacity
            onPress={goToSolver}
            style={{
                width: "60%",
                height: 45,
                backgroundColor: "#2fb081",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginBottom: 10,
                shadowColor: '#2AC062',
                shadowOpacity: 0.5,
                shadowOffset: {
                    height: 10,
                    width: 0
                },
                elevation: 10,
                shadowRadius: 5,
            }}
        >
            <Text style={{fontSize:18,color:'white'}}>{name}</Text>
        </TouchableOpacity>
    );
}
export  default  SelectionButton;
