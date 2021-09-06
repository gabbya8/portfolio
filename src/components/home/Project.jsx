import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import ProjectCard from "./ProjectCard";
import axios from "axios";

// const dummyProject = {
//   name: null,
//   description: null,
//   svn_url: null,
//   stargazers_count: null,
//   languages_url: null,
//   pushed_at: null,
// };
// const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, projects}) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {/* first row of two */}
        <Row>
          <Col md={6}>
          {/* {projects.map((value, index) => { */}
            <div id="portfolio-wrapper">
            {/* <div key={index} className="columns portfolio-item"> */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects[0].url} title={projects[0].title} target="_blank">
                  <Image id="portfolio-img" alt={projects[0].title} src={projects[0].img} thumbnail/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects[0].title}</h5>
                      <p>{projects[0].description}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
            </div>
          {/* // })} */}
          </Col>
          <Col md={6}>
          {/* {projects.map((value, index) => { */}
            <div id="portfolio-wrapper">
            {/* <div key={index} className="columns portfolio-item"> */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects[1].url} title={projects[1].title} target="_blank">
                  <Image id="portfolio-img" alt={projects[1].title} src={projects[1].img} thumbnail/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects[1].title}</h5>
                      <p>{projects[1].description}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
            </div>
          {/* // })} */}
          </Col>
          {/* <h1>{projects[0].title}</h1>
          <h1>{projects[1].title}</h1> */}
        </Row>
        {/* other rows of 2 go below */}
        <Row>
          <Col md={6}>
          {/* {projects.map((value, index) => { */}
            <div id="portfolio-wrapper">
            {/* <div key={index} className="columns portfolio-item"> */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects[2].url} title={projects[2].title} target="_blank">
                  <Image id="portfolio-img" alt={projects[2].title} src={projects[2].img} thumbnail/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects[2].title}</h5>
                      <p>{projects[2].description}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
            </div>
          {/* // })} */}
          </Col>
          <Col md={6}>
          {/* {projects.map((value, index) => { */}
            <div id="portfolio-wrapper">
            {/* <div key={index} className="columns portfolio-item"> */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects[3].url} title={projects[3].title} target="_blank">
                  <Image id="portfolio-img" alt={projects[3].title} src={projects[3].img} thumbnail/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects[3].title}</h5>
                      <p>{projects[3].description}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
            </div>
          {/* // })} */}
          </Col>
          {/* <h1>{projects[0].title}</h1>
          <h1>{projects[1].title}</h1> */}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
