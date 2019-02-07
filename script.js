
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
        await axios.get('https://api.punkapi.com/v2/beers/random') //then attend que await soit fini
        .then(function (response) {
          var beer= new Array();

            beer[0] = "bonjour"//response.data.name;
            beer[1] = response.data.tagline;
            beer[2] = response.data.first_brewed;
            beer[3] = response.data.image_url;
            return beer;
        })
        .catch(function (error) {
            error.innerHTML = "(An error has occurred.)";
        });
    }


  for (let i = 0; i < 16; i++){
		let li = document.createElement("li");
    li.className="beerCase"
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
		let p = document.createElement("p");
		let oneBeer = getoneBeer();
    let beerName= document.createTextNode("bière");//oneBeer[0]);
    let beerTag= document.createTextNode(JSON.stringify(oneBeer[1]));
    let beerBrew= document.createTextNode(JSON.stringify(oneBeer[2]));
    //let beerImf= document.createTextNode(oneBeer[0]);

    h2.appendChild(beerName);
    h3.appendChild(beerTag);
		p.appendChild(beerBrew);
    li.appendChild(h2);
    li.appendChild(h3);
		li.appendChild(p);
		inside.appendChild(li);
	}
