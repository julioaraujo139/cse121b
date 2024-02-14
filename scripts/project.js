/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const article = document.createElement("article");
      
      const h3 = document.createElement("h3");
      h3.textContent = temple.ApostleName;

      const h4 = document.createElement("h4");
      h4.textContent = temple.birthDate;
      
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      article.appendChild(h3);
      article.appendChild(h4);
      article.appendChild(img);
  
      templesElement.appendChild(article);
    });
  };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://run.mocky.io/v3/08c2e4ca-a7cd-48e3-bad8-851225bd6e5b");
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
    };
    
/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
  };

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
  
    const filter = document.querySelector("#filtered").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
      default:
        displayTemples(temples);
        break;
    }
  };

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();