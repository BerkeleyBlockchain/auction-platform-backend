'use strict';
module.exports = function(app) {
  var auctionController = require('../controllers/auctionContractController');



  app.route('/contracts')
    .get(auctionController.getContracts) //get all contracts
    .post(auctionController.addContract); //add new contract
  app.route('/contracts/:cId')
    .get(auctionController.getContract) //get one contract
    .put(auctionController.editContract); //edit a contract
  app.route('/closeContract')
    .get(auctionController.closeContract);
  app.route('/count')
    .get(auctionController.count);
  app.route('/bids')
    .get(auctionController.bids)
    .post(auctionController.addBid);
  app.route('/bidById')
    .get(auctionController.bidById);
  app.route('/fields')
      .post(auctionController.addField)
      .get(auctionController.getFieldByContractId);
};
