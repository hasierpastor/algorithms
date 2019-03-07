/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

//still some bugs
function subdomainVisits(cpdomains) {
  let hashMap = {};
  let results = [];
  for (let i = 0; i < cpdomains.length; i++) {
    let countDomain = cpdomains[i].split(' ');
    let count = countDomain[0];
    let domain = countDomain[1];
    let fragments = domain.split('.');
    for (let i = 0; i < fragments.length; i++) {
      let copy = fragments.slice(i);
      let subdomain = copy.join('.');
      if (!(subdomain in hashMap)) {
        hashMap[subdomain] = count;
      }
    }
  }
  for (let key in hashMap) {
    let res = hashMap[key] + ' ';
    res += key;
    results.push(res);
  }
  return results;
}
