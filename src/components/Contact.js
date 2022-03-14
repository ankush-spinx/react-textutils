import React from 'react';
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const onError = (errors, e) => console.log(errors, e);
  return (
    <div>
<section className="my-5">
<div className="container">
  <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
  <p className="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>
  <div className="row">
    <div className="col-md-9 mb-md-0 mb-5">
      <form onSubmit={handleSubmit(onSubmit,onError)}>
        <div className="row">
          <div className="col-md-6">
            <div className="md-form mb-4">
            <label htmlFor="contact-name" className="">Your name</label>
            <input className="form-control" id="contact-name" {...register("nameRequired", { required: true })} />
              {errors.nameRequired && <span className='error'>This field is required</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="md-fm mb-4">
              <label htmlFor="contact-email" className="">Your email</label>
              <input className="form-control" id="contact-email" {...register("emailRequired", { required: true,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
              {errors.emailRequired && errors.emailRequired.type === "required" && <span className='error'>This field is required</span>}
              {errors.emailRequired && errors.emailRequired.type === "pattern" && <span className='error'>Email is not valid.</span>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-4">
              <label htmlFor="contact-Subject" className="">Subject</label>
              <input className="form-control" id="contact-Subject" {...register("SubjectRequired", { required: true })} />
              {errors.SubjectRequired && <span className='error'>This field is required</span>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-4">
              <textarea id="contact-message" className="form-control md-textarea" rows="3"></textarea>
              <label htmlFor="contact-message">Your message</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
           <input className='btn btn-primary' type="submit" />
          </div>
        </div>
      </form>
    </div>
    <div className="col-md-3 text-center">
      <ul className="list-unstyled mb-0">
        <li>
          <i className="fas fa-map-marker-alt fa-2x blue-text"></i>
          <p>San Francisco, CA 94126, USA</p>
        </li>
        <li>
          <i className="fas fa-phone fa-2x mt-4 blue-text"></i>
          <p>+ 01 234 567 89</p>
        </li>
        <li>
          <i className="fas fa-envelope fa-2x mt-4 blue-text"></i>
          <p className="mb-0">contact@example.com</p>
        </li>
      </ul>
    </div>
  </div>
</div>
</section>
    </div>
  )
}
