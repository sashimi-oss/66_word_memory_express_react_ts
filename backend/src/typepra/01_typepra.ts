let someA: number | undefined;
console.log(someA);
if (someA !== undefined) {
  console.log(someA)
}

let someObj: {
  someB: number,
  someC: Array<{
    childA: number,
    version: number | undefined
  }>
} = {
  someB: 1,
  someC: [
    {
      childA: 2,
      version: 1
    },
    {
      childA: 3,
      version: 2
    }
  ]
}

console.log(someObj)

let safeObj3 = someObj.someC.filter((d): d is {childA: number, version: number} => d.version !== undefined)
console.log(safeObj3)

// let safeObj = Object.fromEntries(
//   Object.entries(someObj).filter(([key]) => key.someB)
// )
const safeObj = {
  ...someObj,
  someC: someObj.someC.filter(
    (d): d is { childA: number; version: number } =>
      d.version !== undefined
  )
};