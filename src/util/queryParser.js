const toString = (obj) => {
  let string = '?'
  let querys = []
  for (let key in obj) {
    querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }
  string += querys.join('&')
  return string
}

const toObject = (string) => {
  const query = new URLSearchParams(string)
  let obj = {}
  for (let param of query.entries()) {
    obj[param[0]] = param[1]
  }
  return obj
}
 
export {
  toString,
  toObject
}