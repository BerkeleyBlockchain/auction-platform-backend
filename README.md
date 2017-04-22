# AuctionPlatformBackend
Centralized Database (I'm sorry) for AuctionPlatform

## How to Run It

1. `npm install`
2. `npm run start`

You now have an API that allows you to access this firebase. 

* `/contracts` GET a JSON object with all the contracts
* `/contracts/addContract` POST a JSON object with query elements `asset, time, price, qty`
* `/bids` GET a JSON object with all the bids
* `/bidById` GET a JSON object of all bids with the `cId` specified in the header of the request
* `/contractById` GET a JSON object of the contract with the `cId` specified in the header of the request
* `/count` GET the number of contracts in total

