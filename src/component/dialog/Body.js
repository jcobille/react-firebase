export const BodyAddEdit = (props) => {
    return <div className="p-3">
        <div className="row">
            <div className="col-3 text-centered">
                Full Name
            </div>
            <div className="col text-centered">
                <input type="text" autoComplete="off" className="bordered-input" name="name" value={props.user.name} onChange={props.handleChanges} />
            </div>
        </div>
        <div className="row">
            <div className="col-3 text-centered">
                Email
            </div>
            <div className="col text-centered">
                <input type="text" autoComplete="off" className="bordered-input" name="email" value={props.user.email} onChange={props.handleChanges} />
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <button className='btn-grey' onClick={props.handleSubmit}>{props.modal.modalType === 'add' ? 'Add' : 'Edit'}</button>
            </div>
            <div className="col-3 text-start">
                <button className='btn-grey' onClick={props.close}>Cancel</button>
            </div>
        </div>
    </div>
}

export const BodyDelete = (props) => {
    return <div>
        <div className="row">
            <div className="col centered">
                <img src="/question.png" alt="question-mark" width="30" />
                <span>Are you sure ?</span>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <button className='bordered-button btn-md' onClick={() => props.handleSubmit()}>ok</button>
                <button className='bordered-button btn-md' onClick={props.close}>cancel</button>
            </div>
        </div>
    </div>
}