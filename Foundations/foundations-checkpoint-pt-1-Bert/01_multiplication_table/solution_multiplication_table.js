function multiplicationTable(rows, columns)
{
let steve = []
for(let i = 1; i <= rows; i++)
  {
    let arr = [];
    for(let j = 1; j<=columns; j++)
      {
    arr.push(j * i)
      }
    steve.push(arr)
  }
  return steve;
}/* eslint-disable no-unused-vars */
