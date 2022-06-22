import React, {useState} from 'react'
import {Modal, Button, Row} from 'react-bootstrap'
import EstimateForm from './EstimateForm';

function DocumentModal(props) {

  const {
    show,
    handleClose,
    handleShow,
  } = props;

  console.log("Show: ", show);

  

  return (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          fullscreen={true}
        >
          <Modal.Body>
            <Row>
              <EstimateForm/>
            </Row>
            
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
  )
}

export default DocumentModal;