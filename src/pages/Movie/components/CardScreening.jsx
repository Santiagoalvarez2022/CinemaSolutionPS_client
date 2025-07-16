import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function CardScreening({screening}) {
    const {id,price,startScreening,finishScreening} = screening;
    console.log({id,price,startScreening,finishScreening});
    const startTime = new Date(startScreening).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const endTime = new Date(finishScreening).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <Card className='my-4 px-2 pt-4 pb-1 my-lg-1'>
        <Row>
            <Col xs={6} lg={3} className='text-center'>
                <Card.Subtitle>Start time</Card.Subtitle>
                <p>{startTime}</p>
            </Col>
            <Col xs={6} lg={3} className='text-center' >
                <Card.Subtitle>End time</Card.Subtitle> 
                <p>{endTime}</p>
            </Col>
            <Col  lg={6} className='d-flex'>
                <p className='w-50 px-4'>Price $<span>{price}</span></p>
                <div  className='w-50'>
                    <Button variant="primary" className="me-2">Update</Button>
                    <Button xs="auto" variant="danger" className="me-2">Update</Button>
                </div>
            </Col>
        </Row>
{/* 
        <Row className="d-flex  justify-content-lg-end align-items-center">
            <Col xs="auto">
                <Button variant="primary" className="me-2">Update</Button>
            </Col>
            <Col >
                <Button variant="danger">Delete</Button>
            </Col>
        </Row> */}
    </Card>
  )
}
