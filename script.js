function ComputerSelection() {
  let buttonchoice = ['Rock', 'Paper', 'Scissors']
  let robotchoice = buttonchoice[Math.floor(Math.random() * 3)]

  return robotchoice
}

function countresult(playerchoice, robotchoice) {
  let score;

  if (playerchoice === robotchoice) {
    score = 0
  }
  else if (playerchoice === 'Rock' && robotchoice === 'Scissors') {
    score = 1
  }
  else if (playerchoice === 'Paper' && robotchoice === 'Rock') {
    score = 1
  }
  else if (playerchoice === 'Scissors' && robotchoice === 'Paper') {
    score = 1
  }
  else {
    score = -1
  }
  return score
}

function showresult(score, playerchoice, robotchoice) {
  let f_result = document.getElementById('finalresult')
  switch (score) {
    case -1:
      f_result.innerText = `You Lose!!`
      break;
    case 0:
      f_result.innerText = `It's a Draw`
      break;
    case 1:
      f_result.innerText = `You Won!!`
      break;
  }
  let c_score = document.getElementById('standing')
  c_score.innerText = `${Number(c_score.innerText) + score}`

  let compare = document.getElementById('comparison')
  compare.innerText = `🧍➡️ ${playerchoice}   🆚  🤖 ➡️ ${robotchoice}`
}

function onselect(playerchoice) {

  const robotchoice = ComputerSelection()
  let score = countresult(playerchoice.value, robotchoice)
  showresult(score, playerchoice.value, robotchoice)
}

function start() {
  let btn = document.querySelectorAll('.clickbutton')
btn.forEach(butn => {
    butn.onclick = () => onselect(butn)
  })

  let stop = document.getElementById('refresh')
  stop.onclick = () => reset()
}

function reset() {
  let f_result = document.getElementById('finalresult')
  let c_score = document.getElementById('standing')
  let compare = document.getElementById('comparison')

  f_result.innerText = ""
  c_score.innerText = ""
  compare.innerText = ""

}

start()