'use strict';

exports.getContracts = function(req, res) {
  //get contracts via web3
  res.json({"test" : "passed"});
};

exports.bids = function(req, res) {
  //get contract via web3 given id
  res.json({"bidsTest" : "passed"});
};
