import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appSecondaryColor, prefix } from '../utils/constants';

const BurgerMenuButton = () => {

    return (
        <TouchableOpacity style={{ marginLeft: 15 }}>
            <Ionicons name={`${prefix}-menu`} size={40} color={appSecondaryColor} />
        </TouchableOpacity>
    )
}

export default BurgerMenuButton;