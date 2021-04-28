import Constants from 'expo-constants';

export const statusBarHeight = Constants.statusBarHeight;
export const appBackgroundColor = '#C8DBD0';
export const titleAndDescriptionColor = '#333333';

export const categorylist = [
  {
    id: '1',
    categoryName: 'APOD',
    categoryDescription:
      "Astronomy Picture of the Day.\n Découvrez le cosmos!\n Chaque jour, une image ou une photographie différente de notre univers fascinant est présentée, accompagnée d'une brève explication écrite par un astronome professionnel.",
  },
  {
    id: '2',
    categoryName: 'EPIC',
    categoryDescription:
      "Earth Polychromatic Imaging Camera.\n Positionné de manière unique au point Terre-Soleil de Lagrange, EPIC fournit une imagerie disque complète de la Terre et capture des perspectives uniques de certains événements astronomiques tels que les transits lunaires.",
  },
  {
    id: '3',
    categoryName: 'AsteroidsNeWs',
    categoryDescription:
      "Near Earth Object Web Service.\n Avec NeoWs, un utilisateur peut: rechercher des astéroïdes en fonction de leur date d'approche la plus proche de la Terre, ainsi que parcourir l'ensemble de données.",
  },
];
