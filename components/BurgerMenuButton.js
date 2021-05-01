import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appSecondaryColor, prefix } from '../utils/constants';

//TODO: trouver une technique pour l'afficher
const BurgerMenuButton = ()=>{
    return(
        <TouchableOpacity >
            <Ionicons name={`${prefix}-menu`} size={24} color={appSecondaryColor}/>
        </TouchableOpacity>
    )
}

export default BurgerMenuButton;