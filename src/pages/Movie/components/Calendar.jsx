import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function Calendar() {
  return (
    <div>
        <Form>
            <Row className='d-flex justify-content-end'>
                <Col xs={6} md={4} lg={3}>
                    <Form.Group>
                        <Form.Label>Select date</Form.Label>
                        <Form.Control type='date' />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    </div>
  )
}
