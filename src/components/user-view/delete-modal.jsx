import React from 'react';
import {Modal} from'react-bootstrap';

export default function DeleteModal() {
  return (
    <>
      

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Account</Modal.Title>
      </Modal.Header>
      <Modal.Body><p>Are you sure you want to delete your account?</p>
      <p>All your data will be deleted.</p></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Delete Account
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    
     )
}
