import { ListContainer, ListItem } from "./styles"

const Scoreboard = ({ array }) => {
  
  return (
    <ListContainer>
      {
        array.map((item, i) => (
          <ListItem key={i}>
            <img src={item.avatar} alt="avatar do jogador" />
            <span>Nome: {item.name}</span>
            <span>Pontuação: {item.score}</span>
          </ListItem>
        ))
      }
    </ListContainer>
  )
}

export default Scoreboard