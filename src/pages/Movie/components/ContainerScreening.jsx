import { useQuery } from "@tanstack/react-query";
import { useParams, Navigate } from "react-router-dom";
import { getScreeningDEV } from "../../../../mock/serviceMock/screeningsMockService";
import { getScreenings } from "../../../api/serviceScreening/serviceScreening";
import { useEffect, useState } from "react";
import CardScreening from "./CardScreening";
import { Col, Row } from "react-bootstrap";

export default function ContainerScreening() {

   const {idMovie} = useParams();
    const [daySelected, setDaySelected] = useState("2025-08-01");
    useEffect(()=>{
        // const today = new Date().toISOString().split('T')[0];
        // setDaySelected(today)
    },[])

    const {isLoading, data:screenings, error, isPending} = useQuery({
        queryKey :['screening',{idMovie, daySelected }],
        queryFn : import.meta.env.MODE === "development" ?() => getScreeningDEV({idMovie:1, daySelected}) :() => getScreenings()
    })
    
    if (isLoading) return <p>loading...</p>
    if (error) return <p>error {error.message}</p>
    return (
        <div>
            <Row>
                
            </Row>
            <Row>
                <Col>
                    {screenings.map((screening)=> <CardScreening key={screening.id} screening={screening}/>)}
                </Col>
            </Row>
        </div>
    )
}
