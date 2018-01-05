/* @flow */
import './vendor';

import Component from './component';

import './index.pcss';

window.document.body.appendChild(new Component().render());

Object.assign({}, { a: 1 });

function foo(x: ?string): string {
  if (x) {
    return x;
  }
  return 'default string';
}

console.log('foo:', foo);

window.document.body.innerHTML = foo('22');
