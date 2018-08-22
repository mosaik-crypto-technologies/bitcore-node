'use strict';

function Encoding(servicePrefix) {
  this.servicePrefix = servicePrefix;
}


// TODO: Think about this, is this optimal?
// We get addresses and their balances by using a db stream of keys, so encode all info in the key itself.
// How do we update a balance then? 

Encoding.prototype.encodeAddressIndexKey = function() {}

Encoding.prototype.decodeAddressIndexKey = function() {}




// There should always be only on supply key in the db.
// Maybe this is superfluous and we can just add all balances of all addresses. 
// This might automatically filter out burned coins. TODO: Check this!

Encoding.prototype.encodeSupplyIndexKey = function() {}

Encoding.prototype.decodeSupplyIndexKey = function() {}

Encoding.prototype.encodeSupplyIndexValue = function() {} 

Encoding.prototype.decodeSupplyIndexValue = function() {}


module.exports = Encoding;
