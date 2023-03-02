'use strict';
import { form, input } from './views.js';

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (input.value === '') {
    return
  }

  console.log(input.value);
})
