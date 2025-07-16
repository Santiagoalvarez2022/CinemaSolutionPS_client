import { useState } from "react";
import { Container, Col, Row} from "react-bootstrap";
import CardMovie from "./CardMovie.jsx";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../api/serviceMovie/serviceMovie.js";

export default function GridCards() {

    const {isLoading, data : movies, error, isPending} = useQuery({
        queryKey :["movies"],//to save in cache memory
        queryFn : () => getMovies() //api - get movies
    });

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    
  return (
    <Container className="mt-4">
        <Row>
            {
                movies.map((movie)=>{

                    return <Col key={movie.id} xs={6} md={4} lg={2}>
                        <CardMovie movie={movie}/>
                    </Col>
                })
            }
        </Row>
    </Container>
  )
}

