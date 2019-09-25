/*
 * FeaturePage
 *
 * List all the features
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

export default class WorkerPage extends React.Component {
  render() {
    const {
      date,
      unit,
      role,
      team,
      work_type,
      department,
      activity,
      work,
    } = this.props;
    const backClassNames = cn('worker-back-button', 'back');

    const seriesActivity = [{
      pointWidth: 20,
      dataLabels: {
        enabled: true
      },
      data: [
        ...activity.map(item => {
          const date = new Date(item.start_at);
          const date2 = new Date(item.end_at);

          console.log(item);

          const time = new Intl.DateTimeFormat('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          }).format(date);

          return {
            x: date.getTime(),
            x2: date2.getTime(),
            y: 0
          };
        }),
        ...work.map(item => {
          const date = new Date(item.start_at);
          const date2 = new Date(item.end_at);

          console.log(item);

          const time = new Intl.DateTimeFormat('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          }).format(date);

          return {
            x: date.getTime(),
            x2: date2.getTime(),
            y: 1
          };
        }),
      ],
    }]

    const seriesPie = [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Работа',
        y: 48,
      }, {
        name: 'Производственная активность',
        y: 37
      }, {
        name: 'Сопутствующие активности',
        y: 21
      }]
    }]

    console.log(seriesActivity);

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

          <div className="worker-content-column">
            <div className="content-row">
              <h4>Дневная статистика</h4>

              <ChartPie series={seriesPie} />
            </div>
          </div>
        </div>

        <div className="worker-activity">
          <XRange series={seriesActivity} />
        </div>
      </div>
    );
  }
}
