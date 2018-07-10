import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
    const { inputStyle, labelSize, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelSize}>
                {label}
            </Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }, 
    labelSize: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };