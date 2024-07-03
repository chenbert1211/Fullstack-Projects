/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, bank)
{
    for(let i = 0; i < phrase.length; i++)
    {
        if(bank.indexOf(phrase[i]) === -1)
        {
            return false;
        }
    }
    return true;
}