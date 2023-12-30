/* eslint-disable react/prop-types */
import { Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { primaryColor } from '../Theme/Palette';
import ViewJobDetails from './ViewJobDetails';
// import IntegrationNotistack from '../Resuable/SnackBar';
// import { SnackbarProvider } from 'notistack';


export default function ApplyNow(props) {
  const hide = () => {
    props.setModalShow(false)
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
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Apply Now
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>What makes you perfect match for this opportunity?</p>
              <FormControl>
                <TextField multiline minRows={4} maxRows={5} label="Write in your word" fullWidth />
              </FormControl>
              <FormControlLabel
                value=""
                control={<Checkbox variant="dark" />}
                label="Update me over email"
                labelPlacement="end"
              />
              {/* <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <IntegrationNotistack message = "Applied successfull" variant = 'success'/>
              </SnackbarProvider> */}
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
    </>
  );
}