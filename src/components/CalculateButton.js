import {Text, TouchableOpacity} from 'react-native';

const CalculateButton = ({text, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: "60%",
                height: 45,
                backgroundColor: "#2fb081",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
            }}
        >
            <Text style={{fontSize:18,color:'white'}}>{text}</Text>
        </TouchableOpacity>
    );
}
export default CalculateButton;
