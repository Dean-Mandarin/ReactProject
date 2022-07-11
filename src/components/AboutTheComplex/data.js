import '../../assets/styles/media.css';
// images
import benchIcon from '../../assets/svg_icons/bench.svg';
import buildingIcon from '../../assets/svg_icons/building.svg';
import fountainIcon from '../../assets/svg_icons/fountain.svg';
import bicycleIcon from '../../assets/svg_icons/bicycle.svg';

const br = document.createElement('br');

export const AboutList = [
  {
    //иконка свера
    title: 'bench',
    icon: benchIcon,
    description: 'Рядом исторические парки и скверы'
  },
  {
    //иконка здания
    title: 'building',
    icon: buildingIcon,
    description: 'Полностью обустроенный'
  },
  {
    //иконка фонтана
    title: 'fountain',
    icon: fountainIcon,
    description: '10 фонтанов на территории'
  },
  {
    //иконка велосипеда
    title: 'bicycle',
    icon: bicycleIcon,
    description: '6 км велодорожек'
  }
]