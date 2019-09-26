/*
 * WorkerPage
 *
 * Data about worker day activity
 */
import React from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import Highcharts from 'highcharts';
import Button from 'components/Button';
import Caption from 'components/Caption';
import XRange from 'components/XRange';
import ChartPie from 'components/ChartPie';
import { BackIcon } from 'components/Icons';
import './style.scss';

const CATEGORY_WORK = 'Задача';
const COLORS = ['#1356A8', '#C60C31', '#111111', '#999999'];
const COLOR_WORK = '#FFFFFF';

export default class WorkerPage extends React.Component {
  constructor(props) {
    super(props);
    const { activity, work } = this.props;

    const types = {};
    const categories = ['Активность', CATEGORY_WORK];

    function getItem(item, i) {
      const start = new Date(item.start_at).getTime();
      const end = new Date(item.end_at).getTime();
      const duration = end - start;
      const name = item.type || CATEGORY_WORK;
      const isWork = name === CATEGORY_WORK;
      let index = 0;

      if (name) {
        if (!types[name]) {
          categories.push(name);
          index = categories.length - 1;
        }

        types[name] = types[name] || { name, index };
        types[name].y = (types[name].y || 0) + duration;
        index = types[name].index;
      }

      return {
        x: start,
        x2: end,
        color: !isWork ? COLORS[index-2] : COLOR_WORK,
        className: !isWork ? 'activity' : 'work',
        y: 0,
        name,
        ...item,
        ...(isWork && {
          dataLabels: {
            formatter() {
              const x1 = Highcharts.dateFormat('%H:%M', this.point.x);
              const x2 = Highcharts.dateFormat('%H:%M', this.point.x2);

              return `${x1} - ${x2} ${this.point.title}`;
            }
          }
        }),
      };
    }

    const dataActivity = activity.map(getItem);
    const dataWork = work.map(getItem);

    const dataPie = [];

    Object.keys(types).map(function(key) {
      if (types[key].name !== CATEGORY_WORK) {
        dataPie.push(types[key]);
      }
    });

    this.state = {
      configRange: {
        series: [{
          name: ' ',
          data: [...dataActivity, ...dataWork],
        }],
      },
      configPie: {
        series: [{
          name: 'Активность',
          colorByPoint: true,
          data: dataPie,
        }],
      },
    }
  }

  render() {
    const { date, unit, role, team, work_type, department, worker_name } = this.props;
    const { configRange, configPie } = this.state;

    const backClassNames = cn('worker-back-button', 'back');

    return (
      <div className="worker-page">
        <Helmet>
          <title>{`Трекер ${unit} за ${date}`}</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>

        <Button className={backClassNames} link="/" color="blue" text={<BackIcon />} />

        <Caption text="Анализ рабочего дня" />

        <div className="worker-content">
          <div className="worker-content-column">
            <div className="content-row">
              <h4>Дата</h4>
              <div className="text date">{date}</div>
            </div>

            <div className="content-row">
              <h4>ФИО</h4>
              <div className="text">{worker_name}</div>
            </div>

            <div className="content-row">
              <h4>Подразделение</h4>
              <div className="text">{unit}</div>
            </div>

            <div className="content-row">
              <h4>Вид работ</h4>
              <div className="text">{work_type}</div>
            </div>
          </div>

          <div className="worker-content-column">
            <div className="content-row">
              <h4>Отделение</h4>
              <div className="text">{department}</div>
            </div>

            <div className="content-row">
              <h4>Роль</h4>
              <div className="text">{role}</div>
            </div>

            <div className="content-row">
              <h4>Бригада</h4>
              <div className="text">{team}</div>
            </div>
          </div>

          <div className="worker-content-column"></div>

          <div className="worker-content-column">
            <div className="content-row">
              <h4>Дневная статистика</h4>

              <ChartPie {...configPie} />
            </div>
          </div>
        </div>

        <div className="worker-activity">
          <XRange {...configRange}  />
        </div>
      </div>
    );
  }
}
