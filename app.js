const board = document.querySelector('#board')
const colors = ['yellow', 'orange', 'blue ', 'purple', 'green', 'red']
const SQURES_NUMBERS = 400

for (let i = 0; i < SQURES_NUMBERS; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2 px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2 px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
