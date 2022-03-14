import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
    <footer className="bg-light text-center text-lg-start">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-12 col-md-12 mb-12 mb-md-0 text-center">
          <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="/">Home</Link>
          <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="/about">About</Link>
          <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="/pricing">Pricing</Link>
          <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="/text-converter">Text Converter</Link>
          <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="/contact">Contact</Link>
      </div>
    </div>
  </div>
  <div className="text-center p-3">
    <a className="text-dark" href="https://www.spinxdigital.com/">Design by SPINX DIGITAL</a>
  </div>
</footer>
   </div>
  )
}
