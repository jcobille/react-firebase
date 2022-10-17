import { db } from '../database/config';
import { ref, get, set, child, remove } from 'firebase/database';

export const loadUsers = () => {
    return (dispatch) => {
        const dbRef = ref(db);
        get(child(dbRef, `users`)).then((snapshot) => {
            let users = [];
            if (snapshot.exists()) {
                snapshot.forEach((childsnap) => {
                    users.push(childsnap.val());
                })
            }
            dispatch(loadUser(users));
        }).catch((error) => {
            console.error(error);
        });
    }
}

export const createUpdateUser = (user, type) => {
    return (dispatch) => {
        set(ref(db, `users/${user.id}`), {
            id: user.id,
            name: user.name,
            email: user.email,
        }).then(() => {
            if (type === 'add') {
                dispatch(addUser(user));
            } else if (type === 'edit') {
                dispatch(updateUser(user));
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

export const deleteUser = ({ id, index }) => {
    return (dispatch) => {
        remove(ref(db, `users/${id}`))
            .then(() => {
                dispatch(removeUser(index))
            }).catch((error) => {
                console.error(error);
            });
    }
}

export function addUser(user) {
    return {
        type: 'ADD_USER',
        user
    }
}

export function updateUser(user) {
    return {
        type: 'UPDATE_USER',
        user
    }
}

export function loadUser(users) {
    return {
        type: 'LOAD_USERS',
        users
    }
}

export function removeUser(index) {
    return {
        type: 'REMOVE_USER',
        index
    }
}