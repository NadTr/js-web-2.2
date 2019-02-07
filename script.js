
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

//import axios
import axios from 'axios';

/*
  Put the JavaScript code you want below.
*/
var inside = document.querySelector(".inside");
//fonction asynchrone car sinon, il ne recharge pas l'API
async function getoneBeer() {
         let response = await axios.get('https://api.punkapi.com/v2/beers/random') //then attend que await soit fini

          var beer= new Array();
console.log(response.data[0]);
            beer[0] =response.data[0].name;
            beer[1] = response.data[0].tagline;
            beer[2] = response.data[0].first_brewed;
            beer[3] = response.data[0].image_url;
            let li = document.createElement("li");
            li.className="beerCase"
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let img= new Image();
            let beerName= document.createTextNode(beer[0]);
            let beerTag= document.createTextNode(beer[1]);
            let beerBrew= document.createTextNode(beer[2]);
            img.src=beer[3];
            h2.appendChild(beerName);
            h3.appendChild(beerTag);
            p.appendChild(beerBrew);
            li.appendChild(h2);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(img);
            inside.appendChild(li);
            getoneBeer();
    }
getoneBeer();
