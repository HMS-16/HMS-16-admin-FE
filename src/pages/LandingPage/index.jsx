import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import style from "./landingpage.module.css";
import { BsCalendar } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { FaUserMd } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";

const fontRoot = {
  fontWeight: "700",
  color: "#222222",
};
const LandingPage = () => {
  return (
    <>
      <div>
        <div className={style.imageBg}>
          <Navbar />
          <section className={style.landingLogin}>
            <div className={style.heroInfo}>
              <h1>Manage Your Clinic Effectively</h1>
              <p>
                Mediclinic is a mobile application made for users in monitoring
                health activities
              </p>
              <div className={style.navigatingBtn}>
                <button className={style.btn1}>Get in Touch</button>
              </div>
            </div>
            <div className={style.imageLp}></div>
          </section>

          <section className={style.aboutUs}>
            <div>
              <h1>About Us</h1>
              <p>
                mediclinic is medical practice management software to manage all
                aspects of clinic operations. This customizable clinical
                information system is a healthcare solution such as patient
                registration, outpatient appointments, doctors and nurses
                schedules, and patient check-ups.
              </p>
            </div>
          </section>

          <section className={style.ourService}>
            <h1>Why You Should Use Our Services?</h1>
            <div className={style.servicePoint}>
              <ul>
                <li className={style.serviceImg1}></li>
                <li className={style.serviceTitle}>Effective and Efficient</li>
                <li className={style.serviceDesc}>
                  Effective in facilitating the management of hospital data such
                  as patient data and doctor data digitally.
                </li>
              </ul>
              <ul>
                <li className={style.serviceImg2}></li>
                <li className={style.serviceTitle}>Technology up to date</li>
                <li className={style.serviceDesc}>
                  Always up to date with the latest technology, so that the
                  security of hospital application technology will be guaranteed
                  and usage will be more optimal.
                </li>
              </ul>
              <ul>
                <li className={style.serviceImg3}></li>
                <li className={style.serviceTitle}>Innovative Development</li>
                <li className={style.serviceDesc}>
                  We keep on innovating by updating & developing our systems,
                  providing new solutions for
                </li>
              </ul>
            </div>
          </section>

          <section className={style.features}>
            <div className={style.imageUi}></div>
            <div className={style.featuresTitle}>
              <h1>Some of the best features of our App!</h1>
              <div className={style.featuresPoint}>
                <div className={style.featuresGrid}>
                  <div className={style.grid1}>
                    <div>
                      <BsCalendar />
                    </div>
                  </div>
                  <div className={style.grid2}>
                    <h4>Appointment & Scheduling</h4>
                  </div>
                  <div className={style.grid3}>
                    <p>
                      Mediclinic can help you to scheduling of effective and
                      efficient patient appointments
                    </p>
                  </div>
                </div>
                <div className={style.featuresGrid}>
                  <div className={style.grid1}>
                    <div>
                      <HiUser />
                    </div>
                  </div>
                  <div className={style.grid2}>
                    <h4>Outpatient Management</h4>
                  </div>
                  <div className={style.grid3}>
                    <p>Manage all the details of Outpatient patients easily</p>
                  </div>
                </div>
                <div className={style.featuresGrid}>
                  <div className={style.grid1}>
                    <div>
                      <FaUserMd />
                    </div>
                  </div>
                  <div className={style.grid2}>
                    <h4>Doctor Management</h4>
                  </div>
                  <div className={style.grid3}>
                    <p>Manage</p>
                  </div>
                </div>
                <div className={style.featuresGrid}>
                  <div className={style.grid1}>
                    <div>
                      <MdAssignment />
                    </div>
                  </div>
                  <div className={style.grid2}>
                    <h4>Electronic Medical Record</h4>
                  </div>
                  <div className={style.grid3}>
                    <p>
                      Easily record complaints, diagnosis and medical history
                      patients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className={style.footer}>
          <div className={style.contactFooter}>
            <ul>
              <li className={style.logoFooter}></li>
              <li style={fontRoot}>Mediclinic</li>
              <li style={fontRoot}>021-192836475</li>
              <li style={fontRoot}>Street Kaki No.01, Jakarta</li>
            </ul>
          </div>
          <div className={style.aboutusFooter}>
            <ul>
              <li style={fontRoot}>About Us</li>
              <li>Company</li>
              <li>Career</li>
              <li>Our Product</li>
            </ul>
          </div>
          <div className={style.featureFooter}>
            <ul>
              <li style={fontRoot}>Feature</li>
              <li>Create Schedule</li>
              <li>Print Medical Support</li>
              <li>Staff Info</li>
              <li>Mobile App</li>
            </ul>
          </div>
          <div className={style.resourceFooter}>
            <ul>
              <li style={fontRoot}>Resource</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Help Center</li>
              <li>eBook</li>
            </ul>
          </div>
          <hr />
        </section>
        <div className={style.lineFooter}>
          <div className={style.textWrapper}>
            <p>©Copyright </p>
            <p>Mediclinic - All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
