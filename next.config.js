module.exports = {
  exportPathMap: () => {
    const db = require('./db');
    // const routes = db.reduce((acc, curr, i) => {
    //   acc[`/${i}`] = { page: `/poem?id=${i}` };
    //   return acc;
    // }, {});

    return { '/': { page: '/' } };
    // return routes;
  },
};
