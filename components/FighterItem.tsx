import Fighter from "../types/figher";

const FighterItem: React.FC<Fighter> = ({fighter}) => {
  return (<h1>{fighter.name}</h1>)
}

export default FighterItem; 