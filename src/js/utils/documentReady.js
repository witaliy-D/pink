// eslint-disable-next-line no-redeclare
/* global document module */

const ready = function (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  }else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

module.exports = ready;