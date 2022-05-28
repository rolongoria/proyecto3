const container = document.getElementById('container-data');
const renderData = (results) => {
    let cardText = '';
    results.forEach((item) => {  


        cardText = `
            <div class="card m-1 shadow-lg p-3 mb-5 bg-white rounded" style="width:200px">
                
                <img class="card-img-top" src="${typeof item.squareImage === 'undefined'? 'https://forbes400.herokuapp.com/man.svg' : item.squareImage}" alt="Card image" style="width:100%">               
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${item.person.name}</h5>
                    <h6>Rank: ${item.rank}</h6>
                    <h6>Net Worth: $${parseFloat(item.finalWorth/1000).toFixed(2)} B</h6>
                    <h6>Source: ${item.source}</h6>
                    <h6>Country: ${item.countryOfCitizenship}</h6>   
                </div>
            </div>`;

            container.innerHTML += cardText;
    });


};

export default renderData;

