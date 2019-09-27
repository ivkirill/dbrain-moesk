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
          console.log(this);
          const x1 = Highcharts.dateFormat('%H:%M', this.x);
          const x2 = Highcharts.dateFormat('%H:%M', this.x2);
          const header = `<div style="font-size:10px">${x1} - ${x2}</div>`;
          const body = `<br><div><b>${this.point.title}</b></div>`;
          const footer = `<br><div><i>${this.key}</i></div>`;

          return header + body + footer;
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
