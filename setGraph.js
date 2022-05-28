//Display Graph

let myChart = null;

export default function setGraph(results){

     
    
    const labels = [];
    results.forEach((item) => {
        labels.push(item.person.name);
    });
    

    const networth = [];
    results.forEach((item) => {
        networth.push((item.finalWorth/1000).toFixed(2));
    });
    

    const data = {
        labels: labels,
        datasets: [{
            label: 'Billion USD',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            
            data: networth
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            title: {
                display: true,
                text: 'TOP 10 BILLIONAIRES'
              },
            legend: {
                display: true,
                
            },
            scales: {
                y: {
                    beginAtZero: true
              
            }
          }
        }
    };

    if(myChart != null){
        console.log("char is null");
        myChart.destroy();
    }


    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );  

    
}
