const board = document.querySelector('#board')
const colors = ['#8308a1', '#a10808', '#d3d3d3', '#1d2cff', '#ff8512', '#12ffff']
const SQUARES_NUMBER = 1287

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 4px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#219c02'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}
