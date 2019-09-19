// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => { 
  loadSVGs();
  fetch('https://www.algaecal.com/wp-json/acf/v3/options/options')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    const paragraph = document.getElementById('paragraph');
    if (typeof(paragraph) != 'undefined' && paragraph != null)
    {
      paragraph.innerHTML = myJson.acf['1yr_short_copy'];
    }
  });
});
