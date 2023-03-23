import React from "react";
import "../Assets/Css/AlumniProfile.css";

export default function AlumniProfile() {
  return (
    <section class="h-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-10 col-xl-10">
            <div class="card">
              <div class="back-image rounded-top d-flex">
                <div class="profile-container d-flex flex-column">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder "
                    class="profile-pic img-fluid img-thumbnail mt-4 mb-2"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-info text-white"
                    data-mdb-ripple-color="primary"
                    style={{ zIndex: "1" }}
                  >
                    Edit profile
                  </button>
                </div>
                <div>
                  <h5 className="title">Rohit Prasad</h5>
                  <p className="subtitle">Wed Developer</p>
                </div>
              </div>

              <div class="profile-card-body bg-dark">
                {/* about */}
                <div className="about">
                  <h1 class="mb-1">About</h1>
                  <div>
                    The following example changes the background-color to
                    lightgreen if the viewport is 480 pixels wide or wider (if
                    the viewport is less than 480 pixels, the background-color
                    will be pink): The following example changes the
                    background-color to lightgreen if the viewport is 480 pixels
                    wide or wider (if the viewport is less than 480 pixels, the
                    background-color will be pink):
                  </div>
                </div>

                {/* Exprience */}
                <div className="mb-5">
                    <h1>Exprience</h1>
                    <div>
                        <h4>Postion- Company name</h4>
                        <small>Mar 2022- current</small>
                        <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vel tempora, sint ex a veniam maxime recusandae, velit, fugit consequuntur repellat architecto neque dolores! Atque dolorum rerum minus eius sed.</p>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h1 class="lead mb-0">Recent photos</h1>
                  <p class="mb-0">
                    <a href="#!" class="text-muted">
                      Show all
                    </a>
                  </p>
                </div>
                <div class="row g-2">
                  <div class="col mb-2">
                    <img 
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="1"
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="1"
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
                <div class="row g-2">
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="1"
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt=" 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
