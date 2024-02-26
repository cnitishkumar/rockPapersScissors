import './App.css'
import RockPaperScissors from './components/RockPaperScissors'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    hardnessValue: 1,
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    hardnessValue: 2,
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    hardnessValue: 3,
  },
]

const App = () => <RockPaperScissors choicesList={choicesList} />

export default App
