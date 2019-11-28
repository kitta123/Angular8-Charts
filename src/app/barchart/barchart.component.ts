import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

declare let google:any

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.barcharts();
}

barcharts(){
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ['2014', 1000],
    ['2015', 1170],
    ['2016', 660],
    ['2017', 1030]
    ]);

    var options = {
    chart: null,
    legend: { position: 'none' },
    bars: 'vertical',
    vAxis: {format: 'decimal'},
    height: 400,
    colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    // var btns = document.getElementById('btn-group');
    //
    // btns.onclick = function (e) {
    //
    // if (e.target.tagName === 'BUTTON') {
    //   options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
    //   chart.draw(data, google.charts.Bar.convertOptions(options));
    // }
    // }
    }
  }

}
