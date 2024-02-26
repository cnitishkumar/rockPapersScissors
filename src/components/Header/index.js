import {
  HeaderContainer,
  TitlesHeading,
  Div,
  ScoreContainer,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props

  return (
    <HeaderContainer>
      <Div>
        <TitlesHeading>
          ROCK <br /> PAPER <br /> SCISSORS
        </TitlesHeading>
      </Div>
      <ScoreContainer>
        <Score>Score</Score>
        <Score>{score}</Score>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
