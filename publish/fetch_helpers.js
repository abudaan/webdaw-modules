"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchArraybuffer = exports.fetchXML = exports.fetchJSON = void 0;
var status = function (response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
};
exports.fetchJSON = function (url) {
    // fetch(url, {
    //   mode: 'no-cors'
    // })
    return fetch(url)
        .then(status)
        .then(function (response) { return response.json(); });
};
exports.fetchXML = function (url) {
    return fetch(url)
        .then(status)
        .then(function (response) { return response.text(); })
        .then(function (str) { return new window.DOMParser().parseFromString(str, "text/xml"); });
};
exports.fetchArraybuffer = function (url) {
    return fetch(url)
        .then(status)
        .then(function (response) { return response.arrayBuffer(); });
};
//# sourceMappingURL=fetch_helpers.js.map