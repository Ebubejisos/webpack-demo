import _ from 'lodash';
import './style.css';
import Icon from './stones-g6116d4560_1280.jpg';

function component(){
  const element = document.createElement('div');

  // Lodash now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack','newbie'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());