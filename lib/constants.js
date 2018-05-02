'use strict';


module.exports = {
  BITCOIN_GENESIS_HASH: {
    livenet: '00000000bf5f2ee556cb9be8be64e0776af14933438dbb1af72c41bfb6c82db3',
    regtest: '13ac5baa4b3656eec3ae4ab24b44ae602b9d1e549d9f1f238c1bfce54571b8b5',
    testnet: '000000006f2bb863230cda4f4fbee520314077e599a90b9c6072ea2018d7f3a3' // , //this is testnet3
    // testnet5: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943' //this is testnet5
  },
  DB_PREFIX: new Buffer('ffff', 'hex')
};

