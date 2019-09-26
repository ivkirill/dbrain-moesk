import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsXRange from "highcharts/modules/xrange";

highchartsXRange(Highcharts);

class XRange extends React.Component {
  render() {
    const config = {
      chart: {
        type: 'xrange',
        backgroundColor: 'transparent',
        height: '200px',
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      colors: [
        '#1356A8',
        '#C60C31',
      ],
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false,
        },
        reversed: true,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            inside: true
          }
        }
      },
      tooltip: {
        outside: true,
        followTouchMove: true,
        followPointer: true,
        split: false,
        formatter () {
          const x1 = Highcharts.dateFormat('%H:%m', this.x);
          const x2 = Highcharts.dateFormat('%H:%m', this.x2);
          const header = `<div style="font-size:10px">${x1} - ${x2}</div>`;
          const body = `<div> - <b>${this.key}</b></div>`;
          return header + body;
        },
      },
      legend: {
        enabled: false,
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

export default XRange;
