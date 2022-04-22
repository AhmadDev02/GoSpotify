// eslint-disable-next-line no-use-before-define
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterPage() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Media Sosial:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/ahmadfajaralfarvi/" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="https://www.instagram.com/ahmadf.alfaravi/" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-fajar-alfaravi" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://github.com/AhmadDev02" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Project Finnal Spotify
              </h6>
              <p>
                Haii...Disini saya mengerjakan spotify clone dari
                team Generasi GIGIH 2.0 dan disini saya membuat project dari
                referensi dari youtube,github, developer api spotify dan stakoverflow
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" />
                {' '}
                Kota Medan,SUMUT,Indonesia
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3" />
                {' '}
                + 62 85157151564
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#!">
          SpotifyAhmad.com
        </a>
      </div>
    </MDBFooter>
  );
}
