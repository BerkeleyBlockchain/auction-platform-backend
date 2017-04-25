'use strict';
module.exports = function(app) {
  var auctionController = require('../controllers/auctionContractController');



  app.route('/contracts')
    .get(auctionController.getContracts)
    .put(auctionController.editContract)
    .post(auctionController.addContract); //add new contract
  app.route('/contractbyId')
    .get(auctionController.getContract) //get one contract
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
