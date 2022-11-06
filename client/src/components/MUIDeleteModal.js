import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 150,
    bgcolor: 'rgba(52, 52, 52, 0.1)',
    boxShadow: 24,
    p: 4,
};

export default function MUIDeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.hideModals();
    }

    return (
        <Modal
            open={store.listMarkedForDeletion !== null}
        >
            <Box sx={style}>
                <div
                    id='edit-song-root'
                    className="modal-root">
                    <div className="modal-north">

                        Delete the {name} Playlist?

                    </div>
                    <div className="modal-textfield">
                        Are you sure you wish to permanently delete the <span style={{ fontWeight: 'bold' }}>{name}</span> playlist?
                    </div>
                    <div className="modal-south">
                        <input
                            type="button"
                            id="remove-song-confirm-button"
                            className="modal-button"
                            onClick={handleDeleteList}
                            value='Confirm' />
                        <input
                            type="button"
                            id="remove-song-cancel-button"
                            className="modal-button"
                            onClick={handleCloseModal}
                            value='Cancel' />
                    </div>



                </div>
            </Box>
        </Modal>
    );
}