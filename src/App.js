import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMobileAlt,
  faStore,
  faMapMarkerAlt,
  faPhone,
  faEllipsisV,
  faSearch,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div class="row mx-3 mt-3">
      <div class="col-md-12">
        <div class="row mt-2 mb-4 topsection">
          <div
            class="col-md-2 order-nav-padding"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            164 Orders Found
          </div>
          <div class="col-md-6 tabs">
            <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active alltab"
                  id="ex2-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex2-tabs-1"
                  role="tab"
                  aria-controls="ex2-tabs-1"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex2-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex2-tabs-2"
                  role="tab"
                  aria-controls="ex2-tabs-2"
                  aria-selected="false"
                >
                  Ongoing Orders
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 order-nav-padding">
            <div>
              Sort by:{" "}
              <span
                style={{
                  color: "#520438",
                  fontWeight: "bold",
                  paddingRight: "15px",
                }}
              >
                Order ID
              </span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div class="col-md-2 order-nav-input-padding">
            <div class="input-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="search icon"
                />
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 order-shadow">
          <div class="row order-item">
            <div class="col-md-1 order-wrap order-display-icon-wrap">
              <span className="fa-layers fa-fw order-icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </span>
            </div>

            <div class="col-md-1 order-wrap order-id-wrap">
              <span class="order1">#42084</span>
            </div>

            <div class="col-md-2 order-wrap order-description-wrap">
              <h5 class="collection">Collection</h5>
              <p>20 Dec 2020 | 10:00AM - 11:00AM</p>
            </div>

            <div class="col-md-3 order-wrap order-location-wrap">
              <div class="order-fa-content">
                <span className="fa-layers fa-fw order-fa-icon">
                  <FontAwesomeIcon icon={faStore} />
                </span>
                <span class="order-fa-info">
                  <b>La pizza di don corleone</b>
                </span>
              </div>
              <div class="order-fa-content">
                <span className="fa-layers fa-fw order-fa-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span class="order-fa-info location1">
                  9 Park Avenue, KILMARNOCK, KA10 3HZ
                </span>
              </div>
            </div>

            <div class="col-md-2 order-wrap order-phone-wrap">
              <div class="order-fa-content">
                <span className="fa-layers fa-fw order-fa-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span class="order-fa-info">+7894 337468</span>
              </div>
            </div>

            <div class="col-md-1 order-wrap order-status-wrap">Completed</div>

            <div class="col-md-1 order-wrap order-price-wrap">£34.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col-md-12 order-shadow">
          <div class="row order-item">
            <div class="col-md-1 order-wrap order-display-icon-wrap">
              <span className="fa-layers fa-fw order2-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
            </div>

            <div class="col-md-1 order-wrap order-id-wrap">
              <span>#42083</span>
            </div>

            <div class="col-md-2 order-wrap order-description-wrap">
              <h5 class="schedule">Scheduled Delivery</h5>
              <p>20 Dec 2020 | 10:00AM - 11:00AM</p>
            </div>

            <div class="col-md-3 order-wrap order-location-wrap">
              <div class="order-fa-content">
                <span className="fa-layers fa-fw order-fa-icon">
                  <FontAwesomeIcon icon={faStore} />
                </span>
                <span class="order-fa-info">
                  <b>La pizza di don corleone</b>
                </span>
              </div>
              <div class="order-fa-content">
                <span className="fa-layers fa-fw order-fa-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span class="order-fa-info location1">
                  9 Park Avenue, KILMARNOCK, KA10 3HZ
                </span>
              </div>
            </div>

            <div class="col-md-2 order-wrap order-phone-wrap">
              <div class="order-fa-content">
                <span className="fa-layers fa-fw order-fa-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span class="order-fa-info">+7894 337468</span>
              </div>
            </div>

            <div class="col-md-1 order-wrap order-status-wrap">Completed</div>

            <div class="col-md-1 order-wrap order-price-wrap">£34.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          <div class="row order-item order-border-line-top">
            <div class="col-md-1 order-wrap order-display-icon-wrap">
              <span className="fa-layers fa-fw ">
                <img
                  class="order-image"
                  src="https://i.pinimg.com/600x315/1d/06/da/1d06da7fc198f3d10d1d8f6c3fc342ae.jpg"
                />
              </span>
            </div>

            <div class="col-md-1 order-wrap order-id-wrap-beef">
              <span class="span1">1x</span>
            </div>

            <div class="col-md-2 order-wrap order-description-wrap-beef">
              <h4>Beef Pepperoni Pizza</h4>
            </div>

            <div class="col-md-3 order-wrap order-location-wrap"></div>

            <div class="col-md-2 order-wrap order-phone-wrap"></div>

            <div class="col-md-1 order-wrap order-status-wrap"></div>

            <div class="col-md-1 order-wrap order-price-wrap-top">£15.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>

          <div class="row order-item order-border-line-top beef1">
            <div class="col-md-1 order-wrap order-display-icon-wrap">
              <span className="fa-layers fa-fw ">
                <img
                  class="order-image"
                  src="https://photos.bigoven.com/recipe/hero/pizzadough-7.jpg?h=256&w=256"
                />
              </span>
            </div>

            <div class="col-md-1 order-wrap order-id-wrap-beef">
              <span class="span1">1x</span>
            </div>

            <div class="col-md-2 order-wrap order-description-wrap-beef">
              <h4>Beef Pepperoni Pizza</h4>
            </div>

            <div class="col-md-3 order-wrap order-location-wrap"></div>

            <div class="col-md-2 order-wrap order-phone-wrap"></div>

            <div class="col-md-1 order-wrap order-status-wrap"></div>

            <div class="col-md-1 order-wrap order-price-wrap-top">£15.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>

          <div class="row order-item-options">
            <div class="col-md-3">Options</div>
          </div>

          <div class="row order-item order-border-line-top-single">
            <div class="col-md-2 order-wrap order-description-wrap-beef">
              <h4>Beef Pepperoni Pizza</h4>
            </div>

            <div class="col-md-5 order-wrap order-location-wrap"></div>

            <div class="col-md-2 order-wrap order-phone-wrap"></div>

            <div class="col-md-1 order-wrap order-status-wrap"></div>

            <div class="col-md-1 order-wrap order-price-wrap">£10.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>

          <div class="row order-item-options">
            <div class="col-md-3">Add-ons</div>
          </div>

          <div class="row order-item order-border-line-top-single">
            <div class="col-md-1 order-wrap order-description-wrap-beef">
              <h4>1 X</h4>
            </div>

            <div class="col-md-2 order-wrap order-description-wrap-beef">
              <h4>Beef Pepperoni Pizza</h4>
            </div>

            <div class="col-md-4 order-wrap order-location-wrap"></div>

            <div class="col-md-2 order-wrap order-phone-wrap"></div>

            <div class="col-md-1 order-wrap order-status-wrap"></div>

            <div class="col-md-1 order-wrap order-price-wrap">£5.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>

          <div class="row order-item order-border-line-top-single">
            <div class="col-md-1 order-wrap order-description-wrap-beef">
              <h4>1 X</h4>
            </div>

            <div class="col-md-2 order-wrap order-description-wrap-beef">
              <h4>Beef Pepperoni Pizza</h4>
            </div>

            <div class="col-md-4 order-wrap order-location-wrap"></div>

            <div class="col-md-2 order-wrap order-phone-wrap"></div>

            <div class="col-md-1 order-wrap order-status-wrap"></div>

            <div class="col-md-1 order-wrap order-price-wrap">£5.00</div>

            <div class="col-md-1 order-wrap order-collapse-wrap">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>

          <div class="row order-item-options">
            <div class="col-md-3">My Product Note</div>
          </div>

          <div class="row cards">
            <div class="col-md-4 mt-3">
              <div class="card">
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-8">
                      <span class="note-person-name">Jon Lee</span>
                    </div>
                    <div class="col-md-4 note-date">2:45 PM | 23 Jan 20</div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="col-md-1 order-wrap order-display-icon-wrap">
                        <img
                          class="selfie"
                          src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
                        />
                      </div>
                    </div>
                    <div class="col-md-10">
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-3">
              <div class="card">
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-8">
                      <span class="note-person-name">Jon Lee</span>
                    </div>
                    <div class="col-md-4 note-date">2:45 PM | 23 Jan 20</div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="col-md-1 order-wrap order-display-icon-wrap">
                        <img
                          class="selfie"
                          src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
                        />
                      </div>
                    </div>
                    <div class="col-md-10">
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-3">
              <div class="card">
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-8">
                      <span class="note-person-name">Jon Lee</span>
                    </div>
                    <div class="col-md-4 note-date">2:45 PM | 23 Jan 20</div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="col-md-1 order-wrap order-display-icon-wrap">
                        <img
                          class="selfie"
                          src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
                        />
                      </div>
                    </div>
                    <div class="col-md-10">
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                    <div class="col-md-3 note-footer-image">
                      <img src="https://adminsc.pizzahut.lk/images/mainmenu/tandoorichicken6e230d2bdcfa48f6ba332fb92025556a.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mt-3 mb-3">
                <button
                  type="button"
                  class="btn btn-primary float-end bottombutton"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
