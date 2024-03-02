/* eslint-disable react/prop-types */
import { Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { primaryColor } from '../Theme/Palette';
import ViewJobDetails from './ViewJobDetails';
import IntegrationNotistack from '../Resuable/SnackBar';
import { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { noteForHR } from '../constant/constant_values';
import { formatTextWithNewlines } from '../../util/helper';
import { isMobile } from 'react-device-detect';


export default function ApplyNow(props) {
  const [show, setShow] = useState(false)
  const hide = () => {
    props.setModalShow(false)
    setTimeout(() => {
      setShow(true)
    }, 2000);

  }
  function MyVerticallyCenteredModal(props) {
    return (
      <>
        {props.modaltype === "viewDetails" ?
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ViewJobDetails />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" style={{ background: primaryColor.background, color: "white", border: "none" }} onClick={() => hide()}>Close</Button>
            </Modal.Footer>
          </Modal> :
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" style={{ marginTop: '4rem' }}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '16px' }}>
                Let them know why you are a good fit.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <p>Let them know why you are a good fit.</p> */}
              <FormControl sx={{ width: '100%' }}>
                <TextField id="note-for-hr" multiline minRows={4} maxRows={isMobile ? 14 : 18} label="Write a note..." fullWidth defaultValue={formatTextWithNewlines(noteForHR)} />
              </FormControl>
              <FormControlLabel
                value=""
                control={<Checkbox variant="dark" />}
                label="Update me over email"
                labelPlacement="end"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" style={{ background: primaryColor.background, color: "white", border: "none" }} onClick={() => hide()}>Apply Now</Button>
            </Modal.Footer>
          </Modal>}
      </>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
        modaltype={props.modalType}
      />
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <IntegrationNotistack message="Applied successfull" variant='success' show={show} setShow={setShow} />
      </SnackbarProvider>
    </>
  );
}