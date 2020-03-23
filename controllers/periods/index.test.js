const moment = require('moment');
const periods = require('./');
test('getMenstrualCycle - stable', () => {
  const dateList = [
    {
      start: new moment('2019-11-10'),
      end: new moment('2019-12-08'),
    },
    {
      start: new moment('2019-12-08'),
      end: new moment('2020-01-05'),
    },
  ];
  const result = periods.getMenstrualCycle(dateList);
  expect(result).toBe(28);
});

test('getMenstrualCycle - unstable', () => {
  const dateList = [
    {
      start: new moment('2019-11-10'),
      end: new moment('2019-12-08'),
    },
    {
      start: new moment('2019-12-08'),
      end: new moment('2020-01-05'),
    },
    {
      start: new moment('2020-01-05'),
      end: new moment('2020-02-09'),
    },
    {
      start: new moment('2020-02-09'),
      end: new moment('2020-03-15'),
    },
  ];
  const result = periods.getMenstrualCycle(dateList);
  expect(result).toBe(31);
});
