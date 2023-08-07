
import styled from 'styled-components';

const NumberSelector = () => {


  return(
    <Container>
    <div>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
     </div>
     <p>Selected Number</p>

  </Container>

  )
}

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center; 
  justify-content: center;
  font-size: 24px;
  font-weight: 700; 
`

const Container = styled.div`
  div{
    display: flex;
    gap: 10px;
    padding-top: 10px;
  }
  P{
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;

  }
  
`