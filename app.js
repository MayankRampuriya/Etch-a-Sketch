let size = 25; //max=40
newGrid();

document.querySelector('#sizeBtn').addEventListener('click', () => {
    let input = prompt("Enter grid-size in range of [1 to 40]");
    if (input > 0 && input <= 40) size = input;
    else alert("Please enter grid-size within range")

    document.querySelector('.gridSizeTxt').textContent = `Current Size: ${size}x${size}`;
    newGrid();
})

function newGrid() {
    resetGrid();

    let container = document.querySelector('.container');

    let a = [];
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        a[i] = [];
        for (let j = 0; j < size; j++) {
            a[i][j] = document.createElement('div');
            a[i][j].classList.add(`square`);
            // a[i][j].textContent = `s${i}${j}`;
            row.appendChild(a[i][j]);
        }
        container.appendChild(row);
    }

    for (let i = 0; i < size * size; i++) {
        document.querySelectorAll('.square')[i].style.padding = `${320 / size - 5}px`;
    }

    let squares = document.querySelectorAll('.square');
    squares.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('colored');
        })
    })

    let clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach(item => {
            item.classList.remove('colored');
        })
    });

}

function resetGrid() {
    let container = document.querySelector('.container');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

}
