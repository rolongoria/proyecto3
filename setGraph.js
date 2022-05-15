//Display Graph

let myChart = null;

export default function setGraph(results){

     
    const colors = ["red", "green","blue","orange","cadetblue", "pink", "Aquamarine", "BlanchedAlmond", "Chocolate", "Cyan"];
    const labels = [];
    results.forEach((item) => {
        labels.push(item.person.name);
    });
    //console.log(labels);  //Print the labels array (names) in console 

    const networth = [];
    results.forEach((item) => {
        networth.push((item.finalWorth/1000).toFixed(2));
    });
    //console.log(networth);    //print the net worth of each person in console

    const data = {
        labels: labels,
        datasets: [{
            label: 'Billion USD',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            // backgroundColor: colors,
            // borderColor: colors,
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
                // position: 'right'
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
