/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj)
{
    let steve = '';
    for(let keys in obj)
    {
      if(obj.hasOwnProperty(keys))
        {
        steve += keys + ", ";
    }}
    return steve.slice(0, -2)
}

function findObjKeys(obj)
{
    this.steve = '';
    Object.keys(obj);
    for(let keys in obj)
    {
      if(obj.hasOwnProperty(keys))
        {
        this.steve += keys + ", ";
        }
    }
    return this.steve.slice(0, -2);
}