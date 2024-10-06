import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="bg-flower">
                <img src="assets/images/flowers/img-3.png" />
              </div>
              <div className="bg-flower-2">
                <img src="assets/images/flowers/img-1.png" />
              </div>
              <div className="page-title-box">
                <div className="page-title-right">
                  <form className="d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="dash-daterange"
                      />
                      <span className="input-group-text bg-primary border-primary text-white">
                        <i className="ri-calendar-todo-fill fs-13" />
                      </span>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary ms-2"
                    >
                      <i className="ri-refresh-line" />
                    </a>
                  </form>
                </div>
                <h4 className="page-title">Dashboard</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xxl-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5
                        className="text-muted fw-normal mt-0 text-truncate"
                        title="Campaign Sent"
                      >
                        Campaign Sent
                      </h5>
                      <h3 className="my-1 py-1">9,184</h3>
                      <p className="mb-0 text-muted">
                        <span className="text-success me-2">
                          <i className="ri-arrow-up-line" /> 3.27%
                        </span>
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <div id="campaign-sent-chart" data-colors="#6da09c" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-sm-6 col-xxl-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5
                        className="text-muted fw-normal mt-0 text-truncate"
                        title="New Leads"
                      >
                        New Leads
                      </h5>
                      <h3 className="my-1 py-1">3,254</h3>
                      <p className="mb-0 text-muted">
                        <span className="text-success me-2">
                          <i className="ri-arrow-up-line" /> 5.38%
                        </span>
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <div id="new-leads-chart" data-colors="#87bf8a" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-sm-6 col-xxl-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5
                        className="text-muted fw-normal mt-0 text-truncate"
                        title="Deals"
                      >
                        Deals
                      </h5>
                      <h3 className="my-1 py-1">861</h3>
                      <p className="mb-0 text-muted">
                        <span className="text-success me-2">
                          <i className="ri-arrow-up-line" /> 4.87%
                        </span>
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <div id="deals-chart" data-colors="#e7607b" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-sm-6 col-xxl-3">
              <div className="card text-bg-primary border-primary">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5
                        className="text-white text-opacity-75 fw-normal mt-0 text-truncate"
                        title="Booked Revenue"
                      >
                        Booked Revenue
                      </h5>
                      <h3 className="my-1 py-1">$253k</h3>
                      <p className="mb-0 text-muted">
                        <span className="text-white text-opacity-75 me-2">
                          <i className="ri-arrow-up-line" /> 11.7%
                        </span>
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <div id="booked-revenue-chart" data-colors="#d89e70" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="d-flex card-header border-bottom-0 justify-content-between align-items-center">
                  <h4 className="header-title">Revenue</h4>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div dir="ltr">
                    <div
                      id="revenue-chart"
                      className="apex-charts mt-3"
                      data-colors="#6da09c,#47ad77"
                    />
                  </div>
                </div>{" "}
                {/* end card-body*/}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col*/}
            <div className="col-lg-4">
              <div className="card">
                <div className="d-flex card-header justify-content-between border-bottom-0 align-items-center">
                  <h4 className="header-title">Total Sales</h4>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div
                    id="average-sales"
                    className="apex-charts mb-3"
                    data-colors="#6da09c"
                  />
                  <h5 className="mb-1 mt-0 fw-normal">Brooklyn, New York</h5>
                  <div className="progress-w-percent">
                    <span className="progress-value fw-bold">72k </span>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <h5 className="mb-1 mt-0 fw-normal">
                    The Castro, San Francisco
                  </h5>
                  <div className="progress-w-percent mb-0">
                    <span className="progress-value fw-bold">39k </span>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "39%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* end card-body*/}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col*/}
            <div className="col-lg-4">
              <div className="card">
                <div className="d-flex card-header justify-content-between border-bottom-0 align-items-center">
                  <h4 className="header-title">Total Sales</h4>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div
                    id="country-chart"
                    className="apex-charts"
                    data-colors="#6da09c"
                  />
                  <div className="mt-2 text-center">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <img
                          className="ms-3 pe-1"
                          src="assets/images/browsers/chrome.png"
                          height={18}
                          alt="chrome"
                        />
                        <span className="align-middle">45.87%</span>
                      </li>
                      <li className="list-inline-item">
                        <img
                          className="ms-3 pe-1"
                          src="assets/images/browsers/firefox.png"
                          height={18}
                          alt="chrome"
                        />
                        <span className="align-middle">3.25%</span>
                      </li>
                      <li className="list-inline-item">
                        <img
                          className="ms-3 pe-1"
                          src="assets/images/browsers/safari.png"
                          height={18}
                          alt="chrome"
                        />
                        <span className="align-middle">9.68%</span>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* end card-body*/}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col*/}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <h4 className="header-title">Top Selling Products</h4>
                  <a href="#" className="btn btn-sm btn-info">
                    Export <i className="ri-download-line ms-1" />
                  </a>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-borderless table-hover table-nowrap table-centered m-0">
                      <thead className="border-top border-bottom bg-light-subtle border-light">
                        <tr>
                          <th className="py-1">Product</th>
                          <th className="py-1">Price</th>
                          <th className="py-1">Orders</th>
                          <th className="py-1">Avl. Quantity</th>
                          <th className="py-1">Seller</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ASOS Ridley High Waist</td>
                          <td>$79.49</td>
                          <td>82</td>
                          <td>8,540</td>
                          <td>Adidas</td>
                        </tr>
                        <tr>
                          <td>Marco Lightweight Shirt</td>
                          <td>$12.5</td>
                          <td>58</td>
                          <td>6,320</td>
                          <td>Puma</td>
                        </tr>
                        <tr>
                          <td>Half Sleeve Shirt</td>
                          <td>$9.99</td>
                          <td>254</td>
                          <td>10,258</td>
                          <td>Nike</td>
                        </tr>
                        <tr>
                          <td>Lightweight Jacket</td>
                          <td>$69.99</td>
                          <td>560</td>
                          <td>1,020</td>
                          <td>Puma</td>
                        </tr>
                        <tr>
                          <td>Marco Sport Shoes</td>
                          <td>$119.99</td>
                          <td>75</td>
                          <td>357</td>
                          <td>Adidas</td>
                        </tr>
                        <tr>
                          <td>Custom Women's T-shirts</td>
                          <td>$45.00</td>
                          <td>85</td>
                          <td>135</td>
                          <td>Branded</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center">
                    <a
                      href="#!"
                      className="text-primary text-decoration-underline fw-bold btn mb-2"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <h4 className="header-title">Revenue By Locations</h4>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div
                        id="world-map-markers"
                        className="mt-3 mb-3"
                        style={{ height: 298 }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* container */}
      </div>
    </>
  );
};

export default Dashboard;
