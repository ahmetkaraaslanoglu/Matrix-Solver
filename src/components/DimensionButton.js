import {Text, TouchableOpacity, View} from 'react-native';

const DimensionButton = ({text, onPress}) => {
    return (
        <View style={{backgroundColor:'#2fb081', width:52 , height: 52, borderRadius:50}}>
            <TouchableOpacity
                onPress={onPress}
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            >
                <Text style={{color: '#fff', fontSize: 36}}>{text}</Text>
            </TouchableOpacity>
        </View>
    );

}
export default DimensionButton;
