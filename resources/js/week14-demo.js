// A way of defining an object
const myCar = new Object();
myCar.color = "Gray";
myCar.make = "Mazda";
myCar.model = "CX-5";
myCar.year = "2017";

// general syntax: object.property = value;

console.log(myCar.make);

// A second way of defining an object
const mySecondCar = {
    color: "Blue",
    make: "Ford",
    model: "Ranger",
    year: "2020"
}

console.log(mySecondCar.make);

let superheroes = {
    "squadName": "Super hero squad","homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [ 
        // this is an array of objects

      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
}

console.log(superheroes["members"][0]["powers"][1]);

function addHero(obj) {
    const heroName = "Batman";
    const years = "45";
    const secretID = "Bruce Wayne";
    const abilities = ["Technology", "Money", "Armor"];

    let memb = obj["members"];
    console.log(memb);

    memb.push({"name": heroName, "age": years, "secretIdentity": secretID, "powers": abilities});
    console.log(memb);
}

addHero(superheroes);

// Function to add a new superhero -- it's built to be changeable (see the function call below)

function addHero(obj, heroName, heroAge, heroIdentity, heroPowers) {
  let hero = {
    "name": heroName,
    "age": heroAge,
    "secretIdentity": heroIdentity,
    "powers": heroPowers
  };

  obj['members'].push(hero); // the push() method adds a value to an object/array.
}

//  uncomment this line to add a hero; notice how it pushes fourth entry to the second line?
//  try changing the width of the body and of the article in the week14-demo.css file
​
//addHero(superHeroes, "The Batman", 45, "Bruce Wayne", ["money", "technology", "Alfred"]);

function populateHeader(x) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');

    myH1.textContent = x["squadName"];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    //myPara.textContent = x["homeTown"] + x["formed"];
    myPara.textContent = `Hometown: ${x["homeTown"]}`
    header.appendChild(myPara);
}  

populateHeader(superheroes);

function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj['members'];
  
    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

populateHeroes(superheroes);

const data = {"widget": {

    "debug": "on",

    "window": {

        "title": "Sample Konfabulator Widget",

        "name": "main_window",

        "width": 500,

        "height": 500

    },

    "image": { 

        "src": "Images/Sun.png",

        "name": "sun1",

        "hOffset": 250,

        "vOffset": 250,

        "alignment": "center"

    },

    "text": {

        "data": "Click Here",

        "size": 36,

        "style": "bold",

        "name": "text1",

        "hOffset": 250,

        "vOffset": 100,

        "alignment": "center",

        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"

    }

}}   

console.log(widget.src);
  
  
  
  
  
  