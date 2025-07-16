import { Button, Card, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function CardMovie({movie}) {
  const {name, duration, director, id} = movie;
  return (
   <Link to={`/movie/${id}`}>
    <Card>
      <Card.Img />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup>
          <ListGroup.Item className="">{director}</ListGroup.Item>
          <ListGroup.Item className="">{duration}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
   </Link>
  )
}
