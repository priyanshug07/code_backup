import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
  }

    title: string = "Waterfall-chart";


    getColor(prevData:number, nextData:number):string {
      if (nextData - prevData > 0){
        return "green"
      }else if (nextData - prevData < 0){
        return "red"
      }else{
        return "#aaa"
      }
    }

    getData(prevData : any, nextData: any):any {
      var totalPrevData = 0;
      var totalNextData = 0;
      var data = new Array()
      for (let key in nextData){
        if (key in prevData){
          totalPrevData += prevData[key]
          totalNextData += nextData[key]
          data.push({
            name : key,
            y : nextData[key] - prevData[key],
            color : this.getColor(prevData[key], nextData[key])
          })
        }else{
          totalNextData += nextData[key]
          data.push({
            name : key,
            y: nextData[key],
            color : this.getColor(0, nextData[key])
          })
        }
      }
      data.unshift({
        name : 2019,
        y : totalPrevData,
        color : '#aaa'
      })
      data.push({
        name : 2020,
        y : totalNextData,
        isSum : true,
        color : '#aaa'
      })
      console.log(data)
      return data
    }
    
    year2019_dict = {
      'cash' : 100,
      'Derivatives' : 300,
      'PB' : 200,
      'AWM' : 100
    }

    year2020_dict = {
      'cash' : 200,
      'Derivatives' : 300,
      'PB' : 100,
      'AWM' : 300
    }    

    // Higcharts configuration
    
    highcharts = Highcharts;
    chartConfig = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'waterfall'
      },
      title: {
        text: 'Data Visualization'
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
        pointFormat: '<b>{point.y:,.0f}</b>'
    },
      series: [{
        color: '#aaa',

        upColor: 'green',

        data: this.getData(this.year2019_dict, this.year2020_dict),


        dataLabels: {
          enabled: true,
          formatter: function () {
            return Highcharts.numberFormat(this.y , 0);
          }
        }
      }]
    };
}