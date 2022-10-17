const Row = (props) => {
    return (
        <div className="table-row">
            <div className="table-cell">
                {(props.user) ? props.user.name : ''}
            </div>
            <div className="table-cell text-center">
                {(props.user) ? props.user.email : ''}
            </div>
            <div className="table-cell text-center">
                <div hidden={!props.user}>
                    <button className="btn-link" onClick={() => props.onClick('edit', props.user)}>Edit</button>
                    <button className="btn-link" onClick={() => props.onClick('delete', { id: props.user.id, index: props.index })}>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default Row;