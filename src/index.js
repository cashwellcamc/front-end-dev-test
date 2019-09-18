// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
  // fetch('https://www.algaecal.com/wp-json/acf/v3/options/options')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(obj) {
  //     const paragraph = document.getElementById('paragraph');
  //     if (paragraph !== null && obj.hasOwnProperty("1yr_short_copy") {
  //         paragraph.textContent = obj['1yr_short_copy'];
  //     } 
  //   });
});
