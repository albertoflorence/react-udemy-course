const map = (iterable, callback) => {
  if (Array.isArray(iterable)) return iterable.map(callback)
  if (typeof iterable !== 'object') throw new Error('non iterable argument')

  const arr = []
  for (let key in iterable) {
    arr.push(callback(iterable[key], key, iterable))
  }
  return arr
}

const every = (iterable, callback) => {
  if (Array.isArray(iterable)) return iterable.every(callback)

  if (typeof iterable !== 'object') throw new Error('non iterable argument')

  let value = true
  for (let key in iterable) {
    value = callback(iterable[key], key, iterable)
    if (!value) return false
  }
  return value
}

const some = (iterable, callback) => {
  if (Array.isArray(iterable)) return iterable.every(callback)

  if (typeof iterable !== 'object') throw new Error('non iterable argument')

  let value = false
  for (let key in iterable) {
    value = callback(iterable[key], key, iterable)
    if (value) return true
  }
  return value
}

const mapObject = (object, callback) => {
  const newObject = {}
  for (let key in object) {
    newObject[key] = callback(object[key], key)
  }
  return newObject
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const undoCamelCase = string => string.split(/(?=[A-Z])/).join(' ')

const capitalizeLowerCase = string =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

const toPresente = string =>
  string
    .split('_')
    .map(capitalizeLowerCase)
    .join(' ')

export { map, every, capitalize, undoCamelCase, mapObject, toPresente, some }
