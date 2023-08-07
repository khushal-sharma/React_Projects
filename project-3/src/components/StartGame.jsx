import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div><img src="/images/dices.png" alt="" /></div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button 
        onClick={toggle}
        >Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`
const Button = styled.button`
   display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center; 
align-items: center;
gap: 10px;
background-color: black;
border-radius: 5px;
color: white;
transition: 0.3s;
cursor: pointer;



&:hover{
    background-color: white;
    color: black;
    transition: 0.3s;

}
`
