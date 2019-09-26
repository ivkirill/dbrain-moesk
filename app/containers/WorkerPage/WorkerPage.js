/*
 * WorkerPage
 *
 * Data about worker day activity
 */
import React from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import Button from 'components/Button';
import Caption from 'components/Caption';
import XRange from 'components/XRange';
import ChartPie from 'components/ChartPie';
import { BackIcon } from 'components/Icons';
import './style.scss';

const CATEGORY_WORK = 'Задача'

export default class WorkerPage extends React.Component {
  constructor(props) {
    super(props);
    const { activity, work } = this.props;

    const types = {};
    const categories = [];

    function getItem(item, i) {
      const start = new Date(item.start_at).getTime();
      const end = new Date(item.end_at).getTime();
      const duration = end - start;
      const name = item.type || CATEGORY_WORK;
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

      // const time = new Intl.DateTimeFormat('ru-RU', {
      //   hour: 'numeric',
      //   minute: 'numeric',
      //   second: 'numeric'
      // }).format(date);

      return {
        x: start,
        x2: end,
        y: index,
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
          pointPadding: 0,
          groupPadding: 0,
          pointWidth: 20,
          dataLabels: {
            enabled: true
          },
          data: [...dataActivity, ...dataWork],
        }],
        categories,
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
    const { date, unit, role, team, work_type, department } = this.props;
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
              <div className="text">Пупкин АП</div>
            </div>

            <div className="content-row">
              <h4>Подразделение</h4>
              <div className="text">8 РЭР УКС СЗО</div>
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
