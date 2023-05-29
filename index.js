// Import stylesheets
import './style.css';

// Write Javascript code!
const input = document.querySelector('input');
const inputValue = document.getElementById('unId').value;
// const inputValue = input.value;

input.addEventListener('keydown', (e) => {
  // console.log(input);
  console.log(inputValue);
  // if (inputValue.length >= 3) {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then((res) => {
  //       // console.log(res);
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log('res');
  //       console.log(res);
  //     });
  // }
});
