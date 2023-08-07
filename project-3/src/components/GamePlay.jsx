import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from 'styled-components'

const GamePlay = () => {
  return (
    <Main>
       <TotalScore />
        <NumberSelector />
    </Main>
  
  )
}

export default GamePlay;
const Main = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;

`