/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import Chartkick, { PieChart } from 'react-chartkick';
import Highcharts from 'highcharts'
import Button from 'components/Button';
import Caption from 'components/Caption';
import { BackIcon } from 'components/Icons';
import './style.scss';

Chartkick.use(Highcharts)

export default class WorkerPage extends React.Component {
  render() {
    const { match } = this.props;
    const { params: { date, id } } = match;

    const backClassNames = cn('worker-back-button', 'back');

    const pieData = { 'Blueberry': 44, 'Strawberry': 23 };
    const pieColor = ["#000", "#444", '#AAA'];

    return (
      <div className="worker-page">
        <Helmet>
          <title>{`Трекер ${id} за ${date}`}</title>
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
              <div className="text">Ремонт оборудования ТП 6–10 кВ</div>
            </div>
          </div>

          <div className="worker-content-column">
            <div className="content-row">
              <h4>Отделение</h4>
              <div className="text">Садовническая, 13</div>
            </div>

            <div className="content-row">
              <h4>Роль</h4>
              <div className="text">Мастер</div>
            </div>

            <div className="content-row">
              <h4>Бригада</h4>
              <div className="text">V гр. ИРЭС</div>
            </div>
          </div>

          <div className="worker-content-column">
            <div className="content-row">
              <h4>Дневная статистика</h4>

              <PieChart data={pieData} legend="left" colors={pieColor} suffix="%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
