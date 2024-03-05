import { useState } from 'react'
import Card from "./Card";
import { CardInterface } from "../interfaces/Card";

interface CardsProps {
    cards: CardInterface[]
}

export default function Cards({cards} : CardsProps) {
    const [selectedCard, setSelectedCard] = useState<number>(2);

    const handleSelect = (id: number) => {
        setSelectedCard(id);
      };

    return ( 
        <div className='cards'>
            {cards.map((card: CardInterface) => (
                <Card 
                    key={card.id} 
                    card={card} 
                    selectedCard={selectedCard}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    )
}