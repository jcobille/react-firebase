const Header = (props) => {
    return (
        <div className="table-header">
            {props.headers.map((header, index) => {
                return <div className="col-4 th-cell" key={index}>
                    <div className={"box " + (index > 0 ? "text-center" : '')}> {header.label} </div>
                </div>
            })}
        </div>
    )
}

export default Header;