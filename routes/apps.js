var express = require('express');
var router = express.Router();
const data = require('../data/data.js');
const { exec } = require('child_process');

/* GET app (call app from here) */
router.get('/*', function (req, res, next) {
  const appName = req.params[0];
  const app = data.apps[appName];

  if (app) {
    exec(`${app}`, function (error, stdout, stderr) {
      if (error)
        console.log(error);
    });
    return res.send(`trying to start app ${app}`);
  } else {
    return res.send(`app ${appName} not found.`);
  }
});

module.exports = router;
