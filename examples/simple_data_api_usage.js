var blocktrail = require('blocktrail-sdk');

var client = blocktrail({
    apiKey : "MY_APIKEY",
    apiSecret : "MY_APISECRET"
});

// GET request
client.address("1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp", function(err, address) {
    if (err) {
        console.log('address ERR', err);
        return;
    }

    console.log('address', address['address'], address['balance'], address['balance'] / blocktrail.COIN);
});

// GET request
client.addressTransactions("1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp", {limit: 23}, function(err, address_txs) {
    console.log('address_transactions', err || address_txs['data'].length);
});

// POST request
client.verifyAddress("16dwJmR4mX5RguGrocMfN9Q9FR2kZcLw2z", "HPMOHRgPSMKdXrU6AqQs/i9S7alOakkHsJiqLGmInt05Cxj6b/WhS7kJxbIQxKmDW08YKzoFnbVZIoTI2qofEzk=", function(err, result) {
    console.log('verify_address', err || result);
});

// Dealing with numbers
console.log("123456789 Satoshi to BTC: ", blocktrail.toBTC(123456789));
console.log("1.23456789 BTC to Satoshi: ", blocktrail.toSatoshi(1.23456789));

