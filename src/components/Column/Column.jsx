import "../../App.css";

function Column({ title, children }) {
    return (
        <div className='main__column column'>
            <div className='column__title'>
                <p>{title}</p>
            </div>
			<div className='cards'>
				{children}
            </div>
        </div>
    );
}

export default Column;
