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
      xAxis: {
        type: 'datetime'
      },
      colors: [
        '#002A5B',
        '#C60C31',
      ],
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false,
        },
        categories: ['Активность', 'Задача'],
        reversed: true
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
