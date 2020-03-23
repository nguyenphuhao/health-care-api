/**
 * hao.nguyen
 * https://chaobacsi.webflow.io/blog/cach-tinh-chu-ky-kinh-nguyet-de-tranh-co-thai
 */
const moment = require('moment');
const _ = require('lodash');

const getMenstrualCycle = dateList => {
  try {
    const diff = ({ start, end }) => {
      return new moment(end).diff(new moment(start), 'days');
    };
    const daysList = dateList.map(date => diff(date));
    const sum = _.sum(daysList);
		const avg = Math.floor(sum / daysList.length);
		return avg;
  } catch (error) {
    return 0;
  }
};

module.exports = {
  getMenstrualCycle
}