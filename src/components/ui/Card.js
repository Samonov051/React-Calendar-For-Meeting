import classes from "./Card.module.css";

function Card(props) {
  //the content wrapped in <Card> is stored in props.children
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
