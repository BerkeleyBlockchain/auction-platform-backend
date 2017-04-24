'use strict';
module.exports = function(app) {
  var auctionController = require('../controllers/auctionContractController');


  // todoList Routes
  app.route('/contracts')
    .get(auctionController.getContracts);
  app.route('/editContract')
    .post(auctionController.editContract);
  app.route('/closeContract')
    .get(auctionController.closeContract);
  app.route('/contracts/addContract')
    .post(auctionController.addContract);
  app.route('/contractById/')
    .get(auctionController.getContract);
  app.route('/count')
    .get(auctionController.count);
  app.route('/bids')
    .get(auctionController.bids)
    .post(auctionController.addBid);
  app.route('/bidById')
    .get(auctionController.bidById);
};
