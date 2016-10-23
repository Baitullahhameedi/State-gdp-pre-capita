//i will turn my json variable, which is an array of object
// into an array of array

// step 1: make empty array

var dataArray = [];

// step 2 make array
var headers = ['State','GDPPerCapita',];
dataArray.push(headers);

// i will sort my gdp_per_capita
json.sort(function(a,b){
  return b.GDPPerCapita -a.GDPPerCapita;
});


json.forEach(function(d){
  dataArray.push([d.State,d.GDPPerCapita]);
});


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataArray);

        var options = {
          chartArea : {
            top: 0,
            bottom: 100,
            right: 0,
            left: 180
          },
          fontSize: 12,
          fontName: "Halvetica"
        };

        var chart = new
google.visualization.BarChart(document.getElementById('chart'));

        chart.draw(data, options);
}
