import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { stateChanger } from './../src/plant.js';


$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    $('#feed').click(function() {
      const newState = stateChanger(superFood);
      $('#soil-value').text(newState.soil);
    });
  
    $('#hydrate').click(function() {
      const newState = stateChanger(vitaminWater);
      $('#water-value').text(newState.water);
    });
    
    $('#give-light').click(function() {
      const newState = stateChanger(happyLamp);
      $('#light-value').text(newState.light);
    });
  });