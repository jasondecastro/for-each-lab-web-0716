function doToArray(array, callback) {
  array.forEach(callback)
}

function iterate(callback) {
  var array = [1, 2, 3, 4]

  array.forEach((element, index, array) => {
    return array
  })
}

function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}