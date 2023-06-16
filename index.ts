// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function outer(x : number){
  function equals(y : number){
    if(x==y) return true;
    else return false;
  }

  function notequals(y : number){
    if(x!=y) return false;
    else return true;
  }

  return {equals, notequals};
}

let my = outer(5);
console.log(my.equals(5));