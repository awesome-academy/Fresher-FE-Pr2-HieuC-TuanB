import React from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Sidebar from "../Sidebar";

import "./style.scss";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <div className="layout">
          <Container fluid>
            <div className='layout-container'>
              <Sidebar />
              <div className='content'>{props.children}</div>
            </div>
          </Container>
        </div>
      ) : (
        props.children
      )}
    </>
  );
}
