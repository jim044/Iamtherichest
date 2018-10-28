"use strict"

const laRequete = require('request');
const http = require('http');
const fs = require('fs');
const FORD_URL = 'https://webapp.ipline.bur/ford';
var _ = require('lodash');
module.exports = function(app) {
    app.get('/eligibiliteALphalink', function(req, res) {
    }