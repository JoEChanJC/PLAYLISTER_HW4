import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fdeded',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AccountErrorModal() {
    const { auth } = useContext(AuthContext);
    let modalClass = "modal";
    if (auth.isErrorModalOpen()) {
        modalClass += " is-visible";
    }
    function handleCloseModal(event) {
        auth.hideModals();
    }

    return (
        <Modal
            open={auth.isErrorModalOpen()}
        >
            <Box sx={style}>
                <div
                    id="account-error-modal-header"
                    className="modal-error">ERROR:</div>
                <div
                    id="account-error-modal-content"
                    className="modal-center-error-message">
                    <Alert severity="error">{auth.errorMessage}</Alert>
                </div>
                <div className="modal-south">
                    <input
                        type="button"
                        id="remove-song-cancel-button"
                        className="remove-song-cancel-button"
                        onClick={handleCloseModal}
                        value='CLOSE' />
                </div>

            </Box>
        </Modal>
    );
}