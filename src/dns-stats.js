const { NotImplementedError } = require('../extensions/index.js');
const domain = require("domain");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsObject = {};
  domains = domains.map(el => el.split('.')).map(item => item.reverse().map(element => `.${element}`))
  domains.forEach(domainArray => {
    for (let i = 1; i <= domainArray.length; i++){
      let dns = domainArray.slice(0, i).join('')
      dnsObject[dns] ? dnsObject[dns]++ : dnsObject[dns] = 1
    }
  })
  return dnsObject
}

module.exports = {
  getDNSStats
};
