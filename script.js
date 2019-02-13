
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
async function getallBeers() {
   try{
     let response = await axios.get('https://api.punkapi.com/v2/beers/') //then attend que await soit fini
     for (var i=0;i<response.data.length ;i++){
       var bName =response.data[i].name;
       var bTag = response.data[i].tagline;
       var bYear = response.data[i].first_brewed;
       var bImg = response.data[i].image_url;
       let li = document.createElement("li");
       li.className="beerCase"
       let h2 = document.createElement("h2");
       let descrImg = document.createElement("div");
       descrImg.className="DescrImg"
       let h3 = document.createElement("h3");
       let p = document.createElement("p");
       let img= new Image();
       let beerName= document.createTextNode(bName);
       let beerTag= document.createTextNode(bTag);
       let beerBrew= document.createTextNode(bYear);
       img.src=bImg;
       h2.appendChild(beerName);
       h3.appendChild(beerTag);
       p.appendChild(beerBrew);
       descrImg.appendChild(img);
       descrImg.appendChild(p);
       li.appendChild(h2);
       li.appendChild(h3);
       li.appendChild(descrImg);
       inside.appendChild(li);
      }
    }
    catch(error){
      console.error(error);
    }
  }

getallBeers();
