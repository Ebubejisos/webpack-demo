import _ from 'lodash';
import printMe from './print.js';
import './styles/main.scss';
import Icon from './images/lighthouse-ga44c26762_1920.jpg'

function component(){
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack','newbie'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 50;
  myIcon.height = 30;
  myIcon.style = 'border-radius: 50px;'
  btn.appendChild(myIcon);

  element.appendChild(btn);
  
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
 document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // Re-render the "component" to update the click handler
     document.body.appendChild(element);
    })
  }