'use strict';

var BaseService = require('../../service');
var inherits = require('util').inherits;
var async = require('async');
var index = require('../../');
var log = index.log;
var bitcore = require('bitcore-lib');
var Unit = bitcore.Unit;
var _ = bitcore.deps._;
var lodash = require('lodash');
var Encoding = require('./encoding');
var Transform = require('stream').Transform;
var assert = require('assert');
var utils = require('../../utils');

var BalanceService = function(options) {

  BaseService.call(this, options);
  this._header = this.node.services.header;
  this._block = this.node.services.block;
  this._timestamp = this.node.services.timestamp;
  this._transaction = this.node.services.transaction;
  this._network = this.node.network;
  this._db = this.node.services.db;
  this._mempool = this.node.services.mempool;

  if (this._network === 'livenet') {
    this._network = 'main';
  }
  if (this._network === 'regtest') {
    this._network = 'testnet';
  }

};

inherits(BalanceService, BaseService);

BalanceService.dependencies = [ // TODO: Check these
  'db',
  'block',
  'address',
  'header',
  'transaction',
  'timestamp',
  'mempool'
];


TimestampService.prototype.onReorg

TimestampService.prototype.onBlock
