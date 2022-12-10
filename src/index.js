import _ from 'lodash';

function component(){
  const element = document.createElement('div');

  // Lodash now imported bby this script
  element.innerHTML = _.join(['Hello', 'webpack','newbie'], ' ');

  return element;
}

document.body.appendChild(component());