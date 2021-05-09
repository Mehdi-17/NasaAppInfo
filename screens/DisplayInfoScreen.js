import React from 'react';
import { View, Text } from 'react-native';
import { REACT_NATIVE_API_KEY_NASA } from 'react-native-dotenv';
import axios from 'axios';
import { useEffect } from 'react';

const DisplayInfoScreen = () => {
    const apodApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${REACT_NATIVE_API_KEY_NASA}`;

    const apodApiCall = async () => {
        const res = await axios.get(apodApiUrl);
        console.log('res', res);
    }

    useEffect(()=>{
        apodApiUrl();
    }, [])

    return (
        <View>
            <Text>Ecran info. Nasa api key = {REACT_NATIVE_API_KEY_NASA}</Text>
        </View>
    );
}

export default DisplayInfoScreen;