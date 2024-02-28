google.charts.load('current', {'packages':['table','corechart']});
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart);

function display(type,event)
{

  
  var current=document.getElementById(type);
  
  if(current.style.display=='none')
     current.style.display='flex';
  else
    current.style.display='none';

    event.stopPropagation();


}

function hide()
{
  var list=document.querySelectorAll(".hider");

  list.forEach(element => {
    element.style.display='none';
  });

  console.log('hide called');
}

function disableClick(event) {
  event.preventDefault();
}


function addanimation(event)
{
  var loader=document.getElementById('pos');
  loader.classList.add('addAnimation');
  disableClick(event) 
  event.stopPropagation();
}

var displayChartJson=[
  ['Akshay','10000',true],
  ['Nitin','10300',true],
  ['Suksham','12000',false],
  ['Alok','14000',true],
  ['Raj','8000',true],

]
;


function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Salary');
  data.addColumn('boolean', 'Full Time Employee');
  data.addRows(displayChartJson);
  var table = new google.visualization.Table(document.getElementById('chart'));

  table.draw(data, {showRowNumber: false});
}

function drawChart() {


  var modifedJson=[['Name','Salary ']];
    displayChartJson.forEach((ele)=>
    {
      modifedJson.push([ele[0],parseInt(ele[1])]);
    });

    console.log(modifedJson);

  var data = google.visualization.arrayToDataTable(modifedJson);
  var options = {
    title: 'Pie Chart '
  };

  var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));

  chart.draw(data, options);
}

function changeChart()
{
  console.log('tog called');
    var bt=document.getElementById('charts-toggle');
    var table=document.getElementById('chart');
    var pie=document.getElementById('pie_chart');

    if(bt.checked)
    {
      pie.style.display='none';
      table.style.display='inline'
    }
    else{
      table.style.display='none';
      pie.style.display='inline'
    }
}