"use strict";

const Promise = require("bluebird");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const _ = require("lodash");
const defaultConfig = require("electrode-confippet").config;
const Confippet = require("electrode-confippet");
const Ebutuoy = require("../db/index.js");
import axios from 'axios';
const config = require('../../config/index.js');

app.use(bodyParser.json());

const YOUTUBE_API_KEY = "&key=" + config.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL_1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="
const YOUTUBE_SEARCH_URL_2 = ("&type=video&order=viewCount" + YOUTUBE_API_KEY);
const YOUTUBE_INFO_URL_1 = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id="

const loadConfigs = function(userConfig) {
  //use confippet to merge user config and default config
  if (_.get(userConfig, "plugins.electrodeStaticPaths.enable")) {
    userConfig.plugins.electrodeStaticPaths.enable = false;
  }

  return Confippet.util.merge(defaultConfig, userConfig);
};

const setStaticPaths = function() {
  app.use(
    express.static(
      path.join(
        __dirname,
        "../..",
        defaultConfig.$("plugins.electrodeStaticPaths.options.pathPrefix")
      )
    )
  );
};

const setRouteHandler = () =>
  new Promise((resolve, reject) => {
    const webapp = p => (p.startsWith(".") ? path.resolve(p) : p);
    const registerRoutes = require(webapp(defaultConfig.$("plugins.webapp.module"))); //eslint-disable-line

    return registerRoutes(app, defaultConfig.$("plugins.webapp.options"), err => {
      if (err) {
        console.error(err); //eslint-disable-line
        reject(err);
      } else {
        resolve();
      }
    });
  });

const startServer = () =>
  new Promise((resolve, reject) => {
    app.listen(defaultConfig.$("connections.default.port"), err => {
      if (err) {
        reject(err);
      } else {
        //eslint-disable-next-line
        console.log(`App listening on port: ${defaultConfig.$("connections.default.port")}`);
        resolve();
      }
    });
  });

app.get('/test', (req, res) => {
  console.log('server url hit');
  Ebutuoy.find({}, function(err, data) {
   if (err) throw err;
   res.send(data);
   res.end();
 })
})

app.post('/search', (req, res) => {
  axios.get(YOUTUBE_SEARCH_URL_1 + req.body.value + YOUTUBE_SEARCH_URL_2)
  .then((data) => {
    res.send(data.data.items);
    res.end();
  })
  .catch((err) => {
    console.log(err);
  });
})

app.post('/videoInfo', (req, res) => {
  axios.get(YOUTUBE_INFO_URL_1 + req.body.id + YOUTUBE_API_KEY)
  .then((data) => {
    let count = {
      likes: data.data.items[0].statistics.likeCount,
      dislikes: data.data.items[0].statistics.dislikeCount
    }
    res.send(count);
    res.end();
  })
})

module.exports = function electrodeServer(userConfig, callback) {
  const promise = Promise.resolve(userConfig)
    .then(loadConfigs)
    .then(setStaticPaths)
    .then(setRouteHandler)
    .then(startServer);

  return callback ? promise.nodeify(callback) : promise;
};
