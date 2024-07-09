import { Calendar } from "../Calendar/Calendar";

export const Card = ({ card }) => {
    return (
        <div className='cards__item'>
            <div className='cards__card card'>
                <div className='card__group'>
                    <div className='card__theme _orange'>
                        <p className='_orange'>{card.topic}</p>
                    </div>
                    <a href='#popBrowse' target='_self'>
                        <div className='card__btn'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </a>
                </div>
                <div className='card__content'>
                    <a href='' target='_blank'>
                        <h3 className='card__title'>{card.title}</h3>
                    </a>
                    <Calendar date={card.date} />
                </div>
            </div>
        </div>
    );
}