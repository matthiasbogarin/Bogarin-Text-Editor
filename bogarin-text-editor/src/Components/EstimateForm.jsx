import React from 'react'
import {Row, Col} from 'react-bootstrap'

function EstimateForm() {

    function TextEditor(){
        return (
            <Row className="m-1">
                <textarea rows="15" cols="50">
                </textarea>
            </Row> 
        );
    }

    return (
        <form>
            <Row className='mb-3'>
                <Col xl={4} className='d-flex flex-column'>
                    <label>Client First Name: </label>
                    <input type={'text'} />
                </Col>
                <Col xl={4} className='d-flex flex-column'>
                    <label>Client Last Name: </label>
                    <input type={'text'} />
                </Col>
                <Col xl={4} className='d-flex flex-column'>
                    <label>Client Phone Number: </label>
                    <input type={'text'} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xl={4} className='d-flex flex-column'>
                    <label>Address: </label>
                    <input type={'text'} />
                </Col>
                <Col xl={4} className='d-flex flex-column'>
                    <label>State: </label>
                    <input type={'text'} />
                </Col>
                <Col xl={4} className='d-flex flex-column'>
                    <label>Zip Code </label>
                    <input type={'text'} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xl={6} className='d-flex flex-column'>
                    <label>Job Title:</label>
                    <input type={'text'} />
                </Col>
            </Row>
            <TextEditor/>
        </form>
    )
}

export default EstimateForm
