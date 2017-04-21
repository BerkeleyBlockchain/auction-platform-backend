'use strict';
module.exports = function(app) {
  var auctionController = require('../controllers/auctionContractController');


  // todoList Routes
  app.route('/contracts')
    .get(auctionController.getContracts);
  app.route('/contracts/addContract').post(auctionController.addContract);
  app.route('/contracts/:contractId')
    .get(auctionController.getContract);
  app.route('/count')
    .get(auctionController.count);
  app.route('/bids')
    .get(auctionController.bids);
};
