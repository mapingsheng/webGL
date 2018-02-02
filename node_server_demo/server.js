var http = require('http');
var express = require('express');
var fs=require("fs");
var app = express();

app.use(express.static("publish")).listen(8080);