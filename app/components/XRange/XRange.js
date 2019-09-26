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
        '#111111',
        '#999999',
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
        plotBands: [{
          color: '#FCFFC5',
          zIndex: 5
        }],
        reversed: true,
        categories: this.props.categories,
      },
      tooltip: {
        outside: true,
        followTouchMove: true,
        followPointer: true,
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
