'use strict';
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyAq9bvmBhMUORLv4Uiu4YaTmSPDdT_ifFw",
    authDomain: "auctionplatform-c8e90.firebaseapp.com",
    databaseURL: "https://auctionplatform-c8e90.firebaseio.com",
    projectId: "auctionplatform-c8e90",
    storageBucket: "auctionplatform-c8e90.appspot.com",
    messagingSenderId: "693452962808"
    };

// Initialize the default app
var app = firebase.initializeApp(config, "other");
var db = app.database();

exports.getContracts = function(req, res) {
  db.ref('contracts/').once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

exports.addContract = function(req, res) {
  db.ref('count/').once('value').then(function(count){
    db.ref('contracts/' + count.val()).set({
      asset : req.param('asset'),
      price : req.param('price'),
      time : req.param('time'),
      date : Date.now(),
      qty : req.param('qty'),
      cId : count.val()
    });
  });

};

exports.getContract = function(req, res) {
  db.ref('contracts/' + req.contractId).once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

exports.bids = function(req, res) {
  db.ref('bids/').once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

exports.count = function(req, res) {
  db.ref('count/').once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};
