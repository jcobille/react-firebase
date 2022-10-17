import Table from "./table/Table";
import Modal from './dialog/Modal';
import { useState } from "react";

const UsersList = () => {
    const [modal, setModal] = useState({
        modalType: "",
        isOpen: false,
        data: {}
    });

    const handleOnclick = (type, data) => {
        setModal({ modalType: type, isOpen: !modal.isOpen, data: data });
    }

    const handleClose = () => {
        setModal({ ...modal, isOpen: !modal.isOpen });
    }
    return (
        <section className="full-section">
            <div className="row">
                <div className="col">
                    <span className="title">
                        Users
                    </span>
                </div>
                <span className="text-end">
                    <button onClick={() => handleOnclick('add')}>Add User</button>
                </span>
            </div>
            <Table onClick={handleOnclick} />
            <Modal modal={modal} close={handleClose} />
        </section >
    )
}

export default UsersList;