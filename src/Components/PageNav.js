

const PageNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">VegMan</a>
          <div className="input-group" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text" id="basic-addon2"><i className="bi bi-search" style={{ color: "lightgreen" }}></i></button>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ columnGap: "1rem" }}>
            <button type="button" className="btn btn-success">Login</button>
            <button type="button" className="btn btn-danger"><i className="bi bi-cart"></i></button>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default PageNav;