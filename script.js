let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string); // Evaluate the expression
        document.querySelector('input').value = string;
      } catch {
        document.querySelector('input').value = "Error"; // Handle invalid expressions
        string = "";
      }
    } else if (e.target.innerHTML == 'AC') {
      string = ""; // Clear the entire input
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'Cl') {
      string = string.slice(0, -1); // Remove the last character
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML; // Append the clicked button's value
      document.querySelector('input').value = string;
    }
  });
});
