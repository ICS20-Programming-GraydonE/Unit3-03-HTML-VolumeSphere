
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume of a Sphere.
 */
function calculate () {
  // input
  let radius = parseInt(document.getElementById('radius-of-sphere').value);

  // process
  let volume = 4/3*Math.PI*radius**3;

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
