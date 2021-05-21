import '../card/Card.css';

const Card = ({ monster }) => {
    const name = monster.name;
    const email = monster.email;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="robortharsh" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card
