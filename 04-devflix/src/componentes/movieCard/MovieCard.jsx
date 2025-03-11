import "./MovieCards.css";

const MovieCards = (props) => {
  return (
    <div className={"styles.movie"}>
      <p>{props.year}</p>

      <img src={props.poster} alt="" />
      <p>{props.type}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export default MovieCards;
