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
    // console.log(JSON.stringify(myJson));
    const paragraph = document.getElementById('paragraph');

    if (typeof(paragraph) != 'undefined' && paragraph != null)
    {
      paragraph.innerHTML = myJson.acf['1yr_short_copy'];
    }
    const hoursoperation = document.getElementById('hours-operation'); 
    // if (typeof(hoursoperation) != 'undefined' && hoursoperation != null)
    // {
      console.log(myJson.acf['office_hours']);
      console.log(myJson.acf['office_hours'][1]);

      var d = new Date();
      var dayOfWeek = d.getDay();
      var hour = d.getHours();
      console.log(d);
      console.log(dayOfWeek);
      console.log(hour);

      // const now = new Date().toLocaleTimeString('en-CA', {
      //   timeZone: 'America/Vancouver', hour12: false, timeStyle: 'short'
      //   }).replace(':','');
      // console.log(now)
      //}

      // Show  element
      var show = function (hoursoperation) {
        hoursoperation.style.display = 'block';
      };
      // Hide an element
      var hide = function (hoursoperation) {
        hoursoperation.style.display = 'none';
      };
      
      // const isActive = starting_time <= closing_time   // test the shift type (normal or inverted)
      // ? (starting_time <= now && closing_time > now)   // normal comparison
      // : (starting_time <= now || closing_time > now);  // inverted comparison
      // console.log(isActive)

  });
});
