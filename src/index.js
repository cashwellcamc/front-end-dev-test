// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
  document.getElementById("play-button-overlay-zwflowymel").addEventListener('click', () => {
    _wq.push({
      id: 'zwflowymel', onReady: function (video) {
          video.play();
      }
     });
    console.log('pressed Play');
  });


  
});
