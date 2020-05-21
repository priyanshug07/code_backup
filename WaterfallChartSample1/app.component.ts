import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/funnel')(Highcharts);
let chartHolder;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    highcharts = Highcharts;
    chartConfig = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'waterfall'
      },
      title: {
        text: 'Customer Migration'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Customers'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        color: '#aaa',

        upColor: 'green',

        data: [
          {
            name: '2015',
            y: 86336,
            color: '#aaa'
          }, 
          {
            name: 'Churn',
            y: -12816,
            color: 'red'
          }, 
          {
            name: 'Downgrade',
            y: -29052,
            color: 'red'
          }, 
          {
            name: 'Continous PRIMARY',
            isIntermediateSum: true,
            color: '#aaa'
          }, 
          {
            name: 'Upgrade',
            y: 35981
          }, 
          {
            name: 'New',
            y: 20681
          }, 
          {
            name: '2016',
            isSum: true,
            color: '#aaa'
          }
        ],

        dataLabels: {
          enabled: true,
          formatter: function () {
            return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
          }
        }
      }]
    };
}