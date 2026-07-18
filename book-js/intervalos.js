let counter = 0

console.log('Started of Interval')

const test = setInterval(() => {
  counter++
  console.log(`Interval counter: ${counter}`)
  if (counter === 8) {
    console.log(`${counter} is final`)
    console.log(`Sucessful async`)

    clearInterval(test)
  }
}, 1000)
