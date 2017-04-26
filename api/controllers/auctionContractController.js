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
//this can remain the same
exports.getContracts = function(req, res) {
  db.ref('contracts/').orderByChild('cId').once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

//not sure if i need to change this
exports.closeContract = function(req, res) {
  db.ref('contracts/').orderByChild('cId').equalTo(Number.parseInt(req.header('cId'))).once('value').then(function(snapshot){
    var data = snapshot.val();
    var key = 0;
    for (const k in data){
      if (data[k]['cId'] == req.header('cId')){
        key = k;
      }
    }
    snapshot.ref.child(key).remove();
    res.json({you: "killin it"});
  });
};

//changed
exports.addContract = function(req, res) {
  db.ref('count/').once('value').then(function(count){
    var postKey = db.ref('contracts/').push().key;
    var data = {
      asset : req.body.asset,
      price : req.body.price,
      time : req.body.time,
      date : req.body.date,
      qty : req.body.qty,
      cId : count.val()
    };
    var updates = {};
    updates[postKey] = data;
    db.ref('contracts/').update(updates);
    db.ref().update({"count" : count.val()+1});
    res.json({"uploaded data" : updates});
  });
};

exports.editContract  = function(req, res) {
  var query =db.ref('contracts/');
  query.orderByChild('cId').equalTo(Number.parseInt(req.header('cId'))).once('value').then(fillData)

  function fillData(snapshot) {
    var i = 0;
    for (const key in snapshot.val()){
      console.log(key);
    var data = {
      asset : req.body.asset,
            price : req.body.price,
            time : req.body.time,
            date : req.body.date,
            qty : req.body.qty,
            cId : Number.parseInt(req.body.cId)
    };
    if(i == 0 ){
    var postKey = key;
  }
    console.log(postKey);
    var updates = {};
    updates[postKey] = data;
    i++;
    db.ref('contracts/').update(updates);
    res.json({"uploaded data" : updates});

  }
  }
}
  //needs to be changed
// exports.editContract = function(req, res) {
//     var postKey = db.ref('contracts/' + req.body.cId).push().key;
//     var data = {
//       asset : req.body.asset,
//       price : req.body.price,
//       time : req.body.time,
//       date : Date.now(),
//       qty : req.body.qty,
//       cId : req.body.cId
//     };
//     var updates = {};
//     updates[postKey] = data;
//     db.ref('contracts/').update(updates);
//     res.json({"uploaded data" : updates});
// };


exports.getContract = function(req, res) {
  db.ref('contracts/').orderByChild('cId').equalTo(Number.parseInt(req.header('cId'))).once('value').then(function(snapshot){
    // for (const key in snapshot.val()){
    //   console.log(key);
      res.json(snapshot.val());
    // }
  });
};

exports.bids = function(req, res) {
  db.ref('bids/').once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

exports.bidById = function(req, res) {
  db.ref('bids/').orderByChild('cId').equalTo(Number.parseInt(req.header('cId'))).once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

exports.addBid = function(req, res) {
  var postKey = db.ref('bids/').push().key;
  var data = {
    supplier : req.body.supplier,
    price : req.body.price,
    date : req.body.date,
    time : req.body.time,
    cId : Number.parseInt(req.body.cId)
  };
  var updates = {};
  updates[postKey] = data;
  db.ref('bids/').update(updates);
  res.json({"uploaded data" : updates});
};

exports.count = function(req, res) {
  db.ref('count/').once('value').then(function(snapshot){
    res.json(snapshot.val());
  });
};

exports.addField = function(req, res) {
  var postKey = db.ref('fields/').push().key;
  var data = {
    cId :  Number.parseInt(req.body.cId),
    extrafield : req.body.extrafield
  };
  console.log(req.body.cId);
  var updates = {};
  updates[postKey] = data;
  db.ref('fields/').update(updates);
  res.json({"uploaded data" : updates})
};

exports.getFieldByContractId = function(req, res) {
  db.ref('fields/').orderByChild('cId').equalTo(Number.parseInt(req.header('cId'))).once('value').then(function(snapshot) {
    // for (const key in snapshot.val()){
    //   res.json(snapshot.val()[key]);
    res.json(snapshot.val());
  })
};
