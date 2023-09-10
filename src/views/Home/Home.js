import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import "./Home.css";
import Image from "./../Home/Images/img-1.png";
import Button from "./../../components/Button/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-container p-5 mt-5">
        <div className="row">
          <div className="col-sm">
            <p className="about-me fs-4 text-start">
              Hello, I'm <span className="text-info fs-3">Yogita Shete,</span> <br/>
              A Web Developer. <br/>I create
              user-friendly websites that look <br/>great and work well. I'm skilled
              in both<br/> front-end and back-end technologies.
            </p>

            <div className="flex justify-center mt-8">
              <Link to="https://github.com/yogita-s-24" className="btn btn-dark ">
                <Button btnName="Github" />
              </Link>
              <Link to="https://www.linkedin.com/in/yogita-shete/" className="btn btn-dark ml-5">
                <Button btnName="LinkedIn" />
              </Link>
              <Link to="https://peerlist.io/yogitashete" className="btn btn-dark ml-5">
                <Button btnName="PeerList" />
              </Link>
            </div>

          </div>
          <div className="col-sm ml-10">
            <img src={Image} className="img"/>
          </div>
        </div>
      </div>
    </>
  );
}
