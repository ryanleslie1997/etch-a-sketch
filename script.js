const grid = document.querySelector('.container');

// Use a nested for loop to create the grid cells
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('square');
    grid.appendChild(cell);
  }
};