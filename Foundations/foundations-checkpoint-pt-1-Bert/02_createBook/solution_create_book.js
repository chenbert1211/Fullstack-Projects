/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price)
{

  this.id = id;
  this.title = title;
  this.author = author;
  this.price = price;
  this.rating = [];
} 
createBook.prototype.getInfo = function()
  {
  return `${this.title} by ${this.author}`;
  }
createBook.prototype.addRating = function(a)
  {
    return this.rating.push(a);;
  }

 createBook.prototype.getRating = function()
  {
    let kevin = '';
    let steve = 0;
    for(let i = 0; i < this.rating.length; i++)
      {
        for(let j = 0; j < this.rating[i].length; j++)
          {
          steve++;
          }
      }
      for(let k = 0; k < steve/this.rating.length; k++)
      {
        kevin += "*";
      }
    return kevin
  }

createBook.prototype.getPrice = function()
  {
   return this.price;
  }