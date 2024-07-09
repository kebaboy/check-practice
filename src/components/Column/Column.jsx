import "../../App.css";
import { cardList } from "../../data";
import { Card } from "../Card/Card";

function Column({ title, cards }) {
    return (
        <div className='main__column column'>
            <div className='column__title'>
                <p>{title}</p>
            </div>
			<div className='cards'>
				{cards.map(card => <Card key={card.id} card={card} />)}
            </div>
        </div>
    );
}

export default Column;
