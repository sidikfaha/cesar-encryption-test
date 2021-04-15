
const crypt = (texte = "YES", cle) => {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let _alpha = [...alpha.slice(cle), ...alpha.slice(0,cle)]
    return texte.toUpperCase().split('').map(v => _alpha[alpha.indexOf(v)]).join('')
}

module.exports = crypt