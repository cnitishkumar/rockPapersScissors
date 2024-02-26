import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import './index.css'

import {
  AppContainer,
  MainContainer,
  ButtonsContainer,
  Button,
  ButtonImage,
  Div,
  ResultContainer,
  ResultImage,
  Player,
  Result,
  PopupImage,
  PlayAgianButton,
  RulesContainer,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    yourChoice: '',
    opponentChoice: '',
    score: 0,
    isGameOver: false,
    resultMessage: '',
  }

  renderGameButtons = () => {
    const {choicesList} = this.props

    const updateYourChoiceRock = () => {
      const yourChoice = choicesList[0]
      const opponentChoice = this.getOpponentChoice()
      this.getResult(yourChoice, opponentChoice)

      this.setState(prevState => ({
        yourChoice: choicesList[0],
        opponentChoice,
        isGameOver: !prevState.isGameOver,
      }))
    }

    const updateYourChoiceScissor = () => {
      const yourChoice = choicesList[1]
      const opponentChoice = this.getOpponentChoice()
      this.getResult(yourChoice, opponentChoice)

      this.setState(prevState => ({
        yourChoice: choicesList[1],
        isGameOver: !prevState.isGameOver,
        opponentChoice,
      }))
    }

    const updateYourChoicePaper = () => {
      const yourChoice = choicesList[2]
      const opponentChoice = this.getOpponentChoice()
      this.getResult(yourChoice, opponentChoice)

      this.setState({
        yourChoice: choicesList[2],
        opponentChoice,
        isGameOver: true,
      })
    }

    return (
      <>
        <ButtonsContainer>
          <Button
            type="button"
            onClick={updateYourChoiceRock}
            data-testid="rockButton"
          >
            <ButtonImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </Button>
          <Button
            type="button"
            onClick={updateYourChoiceScissor}
            data-testid="scissorsButton"
          >
            <ButtonImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button
            type="button"
            onClick={updateYourChoicePaper}
            data-testid="paperButton"
          >
            <ButtonImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </Button>
        </ButtonsContainer>
      </>
    )
  }

  getOpponentChoice = () => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)
    return choicesList[index]
  }

  getResult = (yourChoice, opponentChoice) => {
    const choiceOptions = {rock: 'ROCK', scissors: 'SCISSORS', paper: 'PAPER'}
    if (yourChoice.id === opponentChoice.id) {
      this.setState({resultMessage: 'IT IS DRAW'})
    } else if (
      yourChoice.id === choiceOptions.paper &&
      opponentChoice.id === choiceOptions.rock
    ) {
      this.setState(prevState => ({
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (
      yourChoice.id === choiceOptions.scissors &&
      opponentChoice.id === choiceOptions.paper
    ) {
      this.setState(prevState => ({
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (
      yourChoice.id === choiceOptions.rock &&
      opponentChoice.id === choiceOptions.scissors
    ) {
      this.setState(prevState => ({
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  renderGameResult = () => {
    const {yourChoice, opponentChoice, resultMessage} = this.state

    const playAgainBtn = () => {
      this.setState({isGameOver: false})
    }

    return (
      <>
        <ResultContainer>
          <Div>
            <Player>YOU</Player>
            <ResultImage src={yourChoice.imageUrl} alt="your choice" />
          </Div>
          <Div>
            <Player>OPPONENT</Player>
            <ResultImage src={opponentChoice.imageUrl} alt="opponent choice" />
          </Div>
        </ResultContainer>
        <Div>
          <Result>{resultMessage}</Result>
          <PlayAgianButton type="button" onClick={playAgainBtn}>
            PLAY AGAIN
          </PlayAgianButton>
        </Div>
      </>
    )
  }

  renderPopup = () => (
    <div>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="popupButton"
          >
            Rules
          </button>
        }
      >
        {close => (
          <div className="popup">
            <div>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="popup"
              />
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine alt="x" />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )

  render() {
    const {isGameOver, score} = this.state

    return (
      <AppContainer>
        <MainContainer>
          <Header score={score} />
          <Div>
            {isGameOver ? this.renderGameResult() : this.renderGameButtons()}
          </Div>
        </MainContainer>
        <RulesContainer>{this.renderPopup()}</RulesContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
