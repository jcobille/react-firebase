import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { BodyAddEdit, BodyDelete } from './Body';
import { useDispatch, useSelector } from "react-redux";
import { createUpdateUser, deleteUser } from "../../redux/usersAction";
import { useState } from "react";

Modal.setAppElement('#root');
const App = (props) => {
    const users = useSelector(state => state.users);
    const type = props.modal.modalType;
    const title = type === 'add' ? 'Add User' : type === 'edit' ? 'Edit User' : "Confirm User Delete";
    const data = props.modal.data;
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        if (type === "add") {
            setUser({
                name: '',
                email: ''
            })
        } else {
            setUser({ ...user, ...data });
        }
    }, [data]);

    const handleChanges = evt => {
        const name = evt.target.name;
        let value = evt.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = () => {
        if (type === 'add' || type === 'edit') {
            const userDetails = { id: Number(new Date()), ...user };
            if (!user.name) {
                alert("Full name is empty");
            } else if (!user.email) {
                alert("Email is empty");
            } else {
                const isValid = emailChecker({ email: user.email, id: user.id });
                if (isValid) {
                    dispatch(createUpdateUser(userDetails, type));
                    props.close();
                }
            }
        } else {
            dispatch(deleteUser(props.modal.data));
            props.close();
        }
    }

    const body = () => {
        if (type === 'add' || type === 'edit') {
            return <BodyAddEdit {...props} user={user} handleChanges={handleChanges} handleSubmit={handleSubmit} />;
        } else if (type === 'delete') {
            return <BodyDelete {...props} handleSubmit={handleSubmit} />
        }
    }

    const emailChecker = ({ email, id }) => {
        const pattern1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!pattern1.test(email)) {
            alert("Invalid Email");
            return false;
        } else {
            const found = users.findIndex(user => user.email === email && user.id !== id);
            if (found > -1) {
                alert("Email is already been used");
                return false;
            }
        }

        return true;
    }
    return (
        <Modal
            isOpen={props.modal.isOpen}
            className={"modal " + (type !== 'delete' ? "modal-md" : "")}
            overlayClassName="overlay"
            closeTimeoutMS={100}
        >
            <div className="modal-header">
                {title}
                <button className="btn-end" onClick={props.close}>&#x2715;</button>
            </div>
            <div className="modal-body">
                {body()}
            </div>
        </Modal>
    );
}

export default App;