import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../redux/usersAction";
import Header from "./Header";
import Row from "./Row";

const Table = (props) => {
    const dispatch = useDispatch();
    const headers = [
        { label: "Name", key: "name" },
        { label: "User Email ID", key: "email" },
        { label: " ", key: "id" },
    ];

    const users = useSelector(state => state.users);
    const length = users.length > 13 ? users.length : 13;
    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);
    
    return (
        <div className="table">
            <Header headers={headers} />
            <div className="table-body">
                {[...Array(length)].map((_, i) => {
                    return <Row user={users[i]} index={i} key={i} {...props} />
                })}
            </div>
        </div>
    );
};

export default Table;