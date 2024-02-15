/* W05: Programming Tasks */

/* Declare and initialize global variables */
const apostlesElement = document.querySelector("#apostles");
const apostleList = [];

/* async displayTemples Function */
const displayApostles = (apostles) => {
    apostles.forEach((apostle) => {
      const article = document.createElement("article");
      
      const ApostleName = document.createElement("h3");
      ApostleName.textContent = apostle.ApostleName;

      const BirthDate = document.createElement("h4");
      BirthDate.textContent = apostle.BirthDate;

      const BirthLocation = document.createElement("h4");
      BirthLocation.textContent = apostle.BirthLocation;

      const CallDate = document.createElement("h4");
      CallDate.textContent = apostle.CallDate;
      
      const img = document.createElement("img");
      img.src = apostle.imageUrl;
      img.alt = apostle.location;
      
      article.appendChild(img);
      article.appendChild(ApostleName);
      article.appendChild(BirthDate);
      article.appendChild(BirthLocation);
      article.appendChild(CallDate);
      
  
      apostlesElement.appendChild(article);
    });
  };

/* async getTemples Function using fetch()*/
const getApostles = async () => {
    const response = await fetch("https://run.mocky.io/v3/29ffb6e1-8041-4354-96f6-04f695e98cc7");
    const data = await response.json();
    apostleList.push(...data);
    displayApostles(apostleList);
    };

getApostles();