function add (a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b)
  })
}

add(1, 2)
  .then((result) => {
    console.log(result)
    return add(result, 3)
  })
  .then((result) => {
    console.log(result)
    return add(result, 4)
  })
  .then((result) => {
    console.log(result)
    return add(result, 4)
  })
