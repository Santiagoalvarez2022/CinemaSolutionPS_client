import { Container } from "react-bootstrap";
import Calendar from "./components/Calendar";
import MovieDetail from "./components/MovieDetail";
import ContainerScreening from "./components/ContainerScreening";


export default function Movie() {
  /*
  - INFO MOVIE
  - CALENDARIO TO SELECTED DATE TO SEE THE SCREENING
  - SCREENING CONTAINER
  */
 
   return (
    <Container>
      <MovieDetail />
      <Calendar />
      <ContainerScreening />
    </Container>
   )
}
