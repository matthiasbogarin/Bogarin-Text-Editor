import React, {useState} from 'react';
import {Modal, Col, Row, Button} from 'reactstrap';
import DocumentModal from './DocumentModal';

function Home(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className='d-flex justify-content-start flex-column'>
            <Row className='m-5'>
                <Button className='w-25' onClick={handleShow}>New Estimate</Button>
            </Row>
            <Row className='m-5'>
                <h1>
                    List of All Estimates
                </h1>
                Panes will be here to act as a list of Documents that were created
            </Row>
            <DocumentModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
        </div>
    )
}

export default Home
