import { CardInterface } from "../interfaces/Card";

interface CardProps {
    card: CardInterface,
    selectedCard: number,
    onSelect: (id:number)=>void
}

export default function Card ({card, selectedCard, onSelect} : CardProps) {
    
    const isSelected = card.id === selectedCard;

    return (
        <div className={`card ${isSelected ? "selected" : ""}`}>
            <img src={card.image} alt="" />
            <div className='card-content grow'>
              <h2>{card.header}</h2>
              <div className='card-text'>
                <p>{card.text}</p>
              </div>
              <button className='btn' onClick={()=>onSelect(card.id)}>Button {card.id}</button>
            </div>  
        </div>
    )
}