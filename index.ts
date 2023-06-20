// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

console.log(firstElement([1,23]));