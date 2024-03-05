import { CardInterface } from "../interfaces/Card";

function CardImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} />;
}

function CardHeader({ header }: { header: string }) {
  return <h2>{header}</h2>;
}

function CardBody({ text }: { text: string }) {
  return (
    <div className='card-text'>
      <p>{text}</p>
    </div>
  );
}

function CardButton({ id, onSelect }: { id: number; onSelect: (id: number) => void }) {
  return (
    <button className='btn' onClick={() => onSelect(id)}>
      Button {id}
    </button>
  );
}

interface CardProps {
    card: CardInterface,
    selectedCard: number,
    onSelect: (id:number)=>void
}

export default function Card({ card, selectedCard, onSelect }: CardProps) {
  const isSelected = card.id === selectedCard;

  return (
    <div className={`card ${isSelected ? "selected" : ""}`}>
      <CardImage src={card.image} alt="" />
      <div className='card-content grow'>
        <CardHeader header={card.header} />
        <CardBody text={card.text} />
        <CardButton id={card.id} onSelect={onSelect} />
      </div>
    </div>
  );
}