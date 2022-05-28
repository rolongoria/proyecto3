import setGraph from "./setGraph.js";
import renderData from "./renderCards.js";

//URL billionaires categories
const top20 = 'https://forbes400.herokuapp.com/api/forbes400?limit=20';
const youngest = 'https://forbes400.herokuapp.com/api/forbes400/youngest?limit=10';
const women = 'https://forbes400.herokuapp.com/api/forbes400/women?limit=10';
const men = 'https://forbes400.herokuapp.com/api/forbes400/men?limit=10';




//Fetch billionaires from forbes 400 api using different urls
const getBillionaires = async (address) => {
    
    

    const url = address;

    const res = await fetch(url);
    
    const data = await res.json();

    setGraph(data);
    const container = document.getElementById('container-data');
    container.innerHTML = '';
    renderData(data);
};


//Print top 10 billionaires in console
const printData = (results) => {
    results.forEach((item) => {
        console.log(`Image: ${item.squareImage}`);
        console.log(`Rank: ${item.rank}`);
        console.log(`Name: ${item.person.name}`);
        console.log(`Net Worth: $${parseFloat(item.finalWorth/1000).toFixed(2)} B`);
        console.log(`Change: $${parseFloat((item.finalWorth - item.estWorthPrev)/1000).toFixed(2)} M`);
        console.log(`Source: ${item.source}`);
        console.log(`Country: ${item.countryOfCitizenship}`);
        console.log('');
    });
};

document.getElementById('top20').addEventListener('click', () => getBillionaires(top20));
document.getElementById('youngest').addEventListener('click', () => getBillionaires(youngest));
document.getElementById('women').addEventListener('click', () => getBillionaires(women));
document.getElementById('men').addEventListener('click', () => getBillionaires(men));


//getBillionaires();