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
    icon: <img src={benchIcon}/>,
    description: <p>Полностью <br/> обустроенный</p>
  },
  {
    //иконка здания
    title: 'building',
    icon: <img src={buildingIcon}/>,
    description: <p>Полностью <br/> обустроенный</p>
  },
  {
    //иконка фонтана
    title: 'fountain',
    icon: <img src={fountainIcon}/>,
    description: <p>Полностью <br/> обустроенный</p>
  },
  {
    //иконка велосипеда
    title: 'bicycle',
    icon: <img src={bicycleIcon}/>,
    description: <p>Полностью <br/> обустроенный</p>
  }
]