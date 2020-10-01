import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBCardBody,
  MDBFooter,
  MDBContainer,
  MDBBox,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBNavLink,
} from "mdbreact";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Intro.css";
import { HashRouter } from "react-router-dom";
import parking_garage from "./assets/parking_garage.jpg";
import nyc_img from "./assets/nyc_skyline.jpg";
import train from "./assets/train.jpg";
import weight from "./assets/weight.jpg";
class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
    this.myRef = React.createRef();
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleSelect() {
    console.log("hello");
  }
  render() {
    return (
      <HashRouter>
        <div>
          <ScrollspyNav
            scrollTargetIds={["home", "projects", "profile"]}
            activeNavClass="is-active"
            router="HashRouter"
          >
            <MDBNavbar
              color="bg-dark"
              fixed="top"
              expand="md"
              dark
              transparent
              scrolling
            >
              <MDBNavbarBrand href="/">
                <i className="fas fa-microchip"></i>
                <strong> SA</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="#home" className="home">
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#projects" className="projects">
                      Projects
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#profile" className="profile">
                      Experience
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </ScrollspyNav>
          <div>
            <header id="home">
              <MDBView src={nyc_img}>
                <MDBMask
                  overlay="stylish-strong"
                  className="flex-center flex-column text-white text-center"
                >
                  <h1>Swetha Angara</h1>
                  <h5>Computer Engineering Student</h5>
                  <p>Rutgers University Class of 2021</p>
                </MDBMask>
              </MDBView>
            </header>
            <main>
              <div>
                <MDBContainer className="text-center my-5">
                  <p align="justify">
                    Hey! I'm Swetha Angara, a student at Rutgers University
                    School of Engineering in New Brunswick, NJ majoring in
                    Computer Engineering and minoring in Mathematics. I have a
                    keen interest in software development and enjoy solving
                    problems in collaborative environments. To see some of my
                    work, you can take a look at my
                    <a align="justify" href="https://github.com/swetha-5689">
                      {" "}
                      GitHub page
                    </a>
                    .{" "}
                  </p>
                </MDBContainer>
              </div>
            </main>
            <div className="d-flex justify-content-center" id="projects">
              <MDBBox tag="section" display="flex" justifyContent="center">
                <section className="text-center my-4">
                  <h2 className="h1-responsive font-weight-bold my-4">
                    My Projects
                  </h2>
                  <p className="grey-text w-responsive mx-auto mb-5">
                    Spring 2020 Projects
                  </p>
                  <MDBBox className="my-5">
                    <MDBRow className="text-center">
                      <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img
                            src={parking_garage}
                            alt=""
                            className="img-fluid z-depth-1"
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">SmartPark</h4>
                          <p className="black-text">
                            Software Engineering Semester Project
                          </p>
                          <p className="grey-text">
                            I worked in a team of ten to create a full-stack
                            automated parking garage <a href="https://shielded-lake-21193.herokuapp.com/">website</a> with separate
                            fronts for customers and managers using MongoDB,
                            Express, React, and Node.js. I also added Google
                            Assistant support and email confirmations.
                          </p>
                        </MDBCardBody>
                      </MDBCol>
                      <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img src={train} alt="" className="img-fluid" />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">
                            Railway Booking System
                          </h4>
                          <p className="black-text">
                            Principles of Information & Database Management
                            Semester Project
                          </p>
                          <p className="grey-text">
                            I worked in a team of four to create a MySQL
                            database system for a Railway Booking website using
                            JSP, HTML, and CSS.
                          </p>
                        </MDBCardBody>
                      </MDBCol>
                      <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img src={weight} alt="" className="img-fluid" />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">
                            BMI Calculator
                          </h4>
                          <p className="black-text">
                            Software Methodology Final Project
                          </p>
                          <p className="grey-text">
                            I worked with a partner to create a simple BMI
                            Calculator application using Android Studio and
                            Java.
                          </p>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBBox>
                </section>
              </MDBBox>
            </div>
          </div>
          <div className="d-flex justify-content-center" id="profile">
            <MDBBox tag="section" display="flex" justifyContent="center">
              <section className="text-center my-4">
                <h2 className="h1-responsive font-weight-bold my-4">
                  Work Experience
                </h2>
                <MDBBox className="my-5">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      {" "}
                      <strong>
                        Summer Technology Analyst - TD Securities{" "}
                      </strong>
                    </AccordionSummary>
                    <AccordionDetails align="justify">
                      <ul>
                        <li>
                          Developed a Spring Boot RESTful API to support CRUD
                          operations on ElasticSearch documents and added
                          Swagger documentation
                        </li>
                        <li>
                          Contributed to dashboard improvements using ag-Grid
                          and React
                        </li>
                        <li>
                          Developed an interface for business analysts to run
                          data processing jobs and track status using Angular
                          and Spring Boot
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      {" "}
                      <strong>Technology Development Intern - Optum </strong>
                    </AccordionSummary>
                    <AccordionDetails align="justify">
                      <ul>
                        <li>
                          Analyzed and documented a critical component of claims
                          processing performed by legacy mainframe system
                        </li>
                        <li>
                          Worked with supervisors to design infrastructure that
                          implements business logic using distributed technology
                          and enterprise APIs
                        </li>
                        <li>
                          Presented modernization documentation to senior
                          business and technology leaders
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </MDBBox>
              </section>
            </MDBBox>
          </div>
          <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center">
              <MDBRow center>              
              <MDBCol size="4">
                <a href="https://www.linkedin.com/in/swetha-angara-411550188/">
                  <i class="fab fa-linkedin fa-3x"></i>
                </a>
              </MDBCol>
              <MDBCol size="4">
              <a href="https://github.com/swetha-5689">
                <i class="fab fa-github-square fa-3x"></i>
              </a>  
              </MDBCol>
              <MDBCol size="4">
              <a href="https://saphotosite.wordpress.com/">
                <i class="fab fa-wordpress fa-3x"></i>
              </a> 
              </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </HashRouter>
    );
  }
}

export default Intro;
