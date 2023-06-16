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

  function equals(y : number){
    if(x==y) return true;
    else return false;
  }

  return equals;
}

let my = outer(5);
console.log(my(5));