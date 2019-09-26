import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class ChartPie extends React.Component {
  render() {
    const config = {
      chart: {
        backgroundColor: 'transparent',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      colors: ["#000", "#444", '#AAA'],
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      tooltip: {
        formatter: function() {
            return this.point.name + " - " + Number(this.percentage).toFixed(2) + "%";
        }
      },
      legend: {
          labelFormatter: function() {
              return this.name + " (" +  Number(this.percentage).toFixed(2) + "%)";
          }
      },
        series: this.props.series,
      };

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
      />
    );
  }
}

export default ChartPie;
