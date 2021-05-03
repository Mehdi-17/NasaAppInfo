import { DefaultTheme } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const statusBarHeight = Constants.statusBarHeight;
export const appBackgroundColor = '#C8DBD0';
export const appSecondaryColor = '#B0C2B8';
export const titleAndDescriptionColor = '#333333';
export const prefix = Platform.OS === 'ios' ? 'ios' : 'md';

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: appBackgroundColor
  }
}

export const categorylist = [
  {
    id: '1',
    iconName: 'camera',
    categoryName: 'APOD',
    categoryDescription:
      "Astronomy Picture of the Day.\n Découvrez le cosmos!\n Chaque jour, une image ou une photographie différente de notre univers fascinant est présentée, accompagnée d'une brève explication écrite par un astronome professionnel.",
  },
  {
    id: '2',
    iconName: 'earth',
    categoryName: 'EPIC',
    categoryDescription:
      'Earth Polychromatic Imaging Camera.\n Positionné de manière unique au point Terre-Soleil de Lagrange, EPIC fournit une imagerie disque complète de la Terre et capture des perspectives uniques de certains événements astronomiques tels que les transits lunaires.',
  },
  {
    id: '3',
    iconName: 'rocket',
    categoryName: 'AsteroidsNeWs',
    categoryDescription:
      "Near Earth Object Web Service.\n Avec NeoWs, un utilisateur peut: rechercher des astéroïdes en fonction de leur date d'approche la plus proche de la Terre, ainsi que parcourir l'ensemble de données.",
  },
];
