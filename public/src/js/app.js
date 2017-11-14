'use strict';
var APP_CONFIG = {
    COINNAME: "YANGCOIN",
    SYMBOL: "YNG",
    SYMBOL_M: "mYNG",
    SYMBOL_BITS: "bits",
    URL: 'yangcoin',
    SHOWMONEY: true
};
var lang = navigator.languages ?
    navigator.languages[0] :
    (navigator.language || navigator.userLanguage);
if (lang == 'ko_KR')
    lang = 'ko';
else
    lang = 'en';

var defaultLanguage = localStorage.getItem('insight-language' + APP_CONFIG.SYMBOL) || lang;
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