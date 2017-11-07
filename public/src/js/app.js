'use strict';
var APP_CONFIG = {
    COINNAME: "YANGCOIN",
    SYMBOL: "YNG",
    SYMBOL_M: "mYNG",
    SYMBOL_BITS: "bits"
};
var defaultLanguage = localStorage.getItem('insight-language') || 'en';
var defaultCurrency = localStorage.getItem('insight-currency' + APP_CONFIG.SYMBOL) || APP_CONFIG.SYMBOL;

angular.module('insight', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'ui.route',
    'monospaced.qrcode',
    'gettext',
    'angularMoment',
    'insight.system',
    'insight.socket',
    'insight.api',
    'insight.blocks',
    'insight.transactions',
    'insight.address',
    'insight.search',
    'insight.status',
    'insight.connection',
    'insight.currency',
    'insight.messages'
]);

angular.module('insight.system', []);
angular.module('insight.socket', []);
angular.module('insight.api', []);
angular.module('insight.blocks', []);
angular.module('insight.transactions', []);
angular.module('insight.address', []);
angular.module('insight.search', []);
angular.module('insight.status', []);
angular.module('insight.connection', []);
angular.module('insight.currency', []);
angular.module('insight.messages', []);