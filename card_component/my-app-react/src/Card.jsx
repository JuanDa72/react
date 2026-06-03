import imageJup from './assets/jupi.jpg'

function Card(){
    return (
        <div className="card">
            <img src={imageJup} alt="Some image of me" />
            <h2>Juan David xd</h2>
            <p>I watch videos :D </p>
        </div>
    );
}

export default Card;