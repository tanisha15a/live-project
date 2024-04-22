
  import React from 'react';
  function Home(){
  return( 
    <>
  
  {/* Services*/}
  <section className="page-section" id="services">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Services</h2>
      <h3 className="section-subheading text-muted">Services that we provide to yout pet.</h3>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary" />
          <i className="fas fa-dog fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">WALKING</h4>
        <p className="text-muted">Our dog walking services are reliable and encourage consistency. With our package options you get:</p>
      </div>
      <div className="col-md-4">
  <span className="fa-stack fa-4x">
    <i className="fas fa-circle fa-stack-2x text-primary" />
    <i className="fas fa-shield-cat fa-stack-1x fa-inverse" />
  </span>
  <h4 className="my-3">VETERINARY</h4>
  <p className="text-muted"> most veterinarians see their patients when they are sick. We work with you to craft a comprehensive wellness plan that improves your dog’s long-term health and quality of life</p>
</div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i class="fas  fa-paw fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="my-3">DAY CARE</h4>
          <p className="text-muted">Personalized care to match your dog’s temperament and energy level</p>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio Grid*/}
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">WE ARE THE BEST</h2>
        <h3 className="section-subheading text-muted">We grow up your lovely pets..</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/pet2.jpg" style={{height: "20rem"}} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Love</div>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 2*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/pet3.jpeg" style={{height:"20rem"}} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Care</div>
            
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 3*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/pet4.jpeg"  style={{height:"20rem"}}  alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Protect</div>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          {/* Portfolio item 4*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/pet5.jpeg" style={{height:"20rem"}} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Furnishing</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          {/* Portfolio item 5*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/pet6.jpg" style={{height:"20rem"}} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">training</div>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Portfolio item 6*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/pet7.jpg" style={{height:"20rem"}} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Contest</div>
              <div className="portfolio-caption-subheading text-muted">Photography</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Pet Studio</h2>
                <p className="item-intro text-muted">We love yur pets.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pet2.jpg" style={{width: "26rem", height:"16rem"}} alt="..." />
                <p>Exploring the Beautiful Bond Between Pets and Their Humans</p>
               
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 2 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Pet Studio</h2>
                <p className="item-intro text-muted">Here pets get caring from us.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pet3.jpeg" style={{width: "26rem", height:"16rem"}} alt="..." />
                <p>The simple act of petting a cat or stroking a dog can lower stress levels and promote feelings of relaxation and calm. Furthermore, the companionship of a pet can help alleviate symptoms of depression and anxiety, providing a source of unconditional love and support for those in need.</p>
               
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 3 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Pet Studio</h2>
                <p className="item-intro text-muted">Protecting Our Beloved Pets</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pet4.jpeg" style={{width: "26rem", height:"16rem"}} alt="..." />
                <p>In the unfortunate event that a pet does become lost or separated from their family, proper identification is crucial for their safe return. This can include visible identification tags with up-to-date contact information, as well as microchipping</p>
                
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 4 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Pet Studio</h2>
                <p className="item-intro text-muted">Pampered Pets: The Art of Grooming for Health and Happiness</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pet5.jpeg" style={{width: "26rem", height:"16rem"}} alt="..." />
                <p>Grooming is not just about keeping our pets looking their best; it's an essential aspect of their overall health and well-being. Regular grooming helps to maintain healthy skin and coat, prevent matting and tangling, and even detect potential health issues early on. Whether it's a leisurely brushing session, a soothing bath, or a trim to keep their fur neat and tidy, grooming provides an opportunity to bond with our pets while ensuring they look and feel their very best.</p>
                
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Pet Studio</h2>
                <p className="item-intro text-muted"> "Training Your Pet: Building Bonds and Positive Behavior."</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pet6.jpg" alt="..." />
                <p>Training your pet is not just about teaching commands or correcting behaviors; it's about building a trusting relationship based on mutual respect, communication, and positive reinforcement. By investing time, patience, and love into training, you can help your pet become a well-behaved, confident, and happy companion who brings joy and fulfillment to your life every day. </p>
             
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Pet Studio</h2>
                <p className="item-intro text-muted">"Pets Got Talent: Showcasing the Extraordinary Abilities of Our Furry Friends"</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/pet7.jpg" alt="..." />
                <p>"Pets Got Talent" is more than just a contest; it's a celebration of the unique talents, personalities, and relationships that make our pets so special. Whether you're a participant or a spectator, join us for a day of fun, laughter, and unforgettable moments as we showcase the extraordinary abilities of our furry friends and celebrate the joy they bring to our lives.</p>
               
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  {/* About*/}
  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">Learn more about Pet Studio</h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/img1.jpg" style={{height : "10rem"}} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2009-2011</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">At Pet Studio, our journey began with a simple love for animals and a passion for providing them with the care and attention they deserve. What started as a humble endeavor has blossomed into a thriving destination for pet owners seeking quality products, expert advice, and compassionate service. Join us as we take a nostalgic look back at our humble beginnings and celebrate the evolution of shop into the beloved pet paradise it is today.</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/img2.jpg" style={{height : "10rem"}} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2011</h4>
              <h4 className="subheading">An another branch opened</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">we launched our another branch of Pet Studio with the help of our customers love and support. we extended our area for your beloved pets.</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/img3.jpg" style={{height : "10rem"}} alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2015</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">In December,we started to provide all the services of pets which are mendetaory fot it ,pet studio launched its own saloon for grooming pets.</p></div>
          </div>
        </li>
        
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* Team*/}
  <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 className="section-subheading text-muted">Meet our amazing team!!</h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
            <h4>Parveen Anand</h4>
            <p className="text-muted">Manager</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
            <h4>Diana Petersen</h4>
            <p className="text-muted">Grooming Expert</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fa-brands fa-instagram"></i></a>          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Manager</p>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fa-brands fa-instagram"></i></a>          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Our team of vets, technicians, and other pet care professionals work together to ensure that your dog receives the best possible care..</p></div>
      </div>
    </div>
  </section>
 
  <section className="page-section" id="contact">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Contact Us</h2>
      <h3 className="section-subheading text-muted">Here you can reach us.</h3>
    </div>
    <form id="contactForm" data-sb-form-api-token="YOUR_API_TOKEN">
      <div className="row align-items-stretch mb-5">
        <div className="col-md-6">
          <div className="form-group">
            {/* Name input */}
            <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          </div>
          <div className="form-group">
            {/* Email address input */}
            <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div className="form-group mb-md-0">
            {/* Phone number input */}
            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-textarea mb-md-0">
            {/* Message input */}
            <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""}></textarea>
            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
          </div>
        </div>
      </div>
      {/* Submit success message */}
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center text-white mb-3">
          <div className="fw-bolder">Form submission successful!</div>
          To activate this form, sign up at
          <br />
          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
        </div>
      </div>
      {/* Submit error message */}
      <div className="d-none" id="submitErrorMessage">
        <div className="text-center text-danger mb-3">Error sending message!</div>
      </div>
      {/* Submit Button */}
      <div className="text-center">
        <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button>
      </div>
    </form>
  </div>
</section>

  
  </>
  );
}
 
  export default Home;

