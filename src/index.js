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
    const paragraph = document.getElementById('paragraph');

    if (typeof(paragraph) != 'undefined' && paragraph != null)
    {
      paragraph.innerHTML = myJson.acf['1yr_short_copy'];
    }
    console.log(myJson.acf['office_hours']);

    var d = new Date(); 
    var dayOfWeek = d.getDay();
    var hour = d.getHours();

    var d = new Date();
    var day = d.getDay()
    
    var weekDay = myJson.acf['office_hours'].filter(x =>  x.day == day )
    
    var n = d.getHours();
    var m = d.getMinutes();
    
    var starting_time = (parseInt(weekDay[0].starting_time) / 100) * 3600;
    var closing_time  = (parseInt(weekDay[0].starting_time) / 100) * 3600; 
    var now           = (parseInt(n+""+m) /100) * 3600
                
          const hoursoperation = document.getElementById('hours-operation')
           
          if(now>starting_time && now<closing_time){
            
           hoursoperation.style.display = 'block';
            
            
          } else{
             hoursoperation.style.display = 'none';
          }

  });
});
