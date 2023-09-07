
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Get in contact with me</h1>
      <form className="contactform" action="https://formsubmit.co/9415380c896f4483ec9eefda8f9caa15" method="POST">
        <div>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="subject">Subject:</label><br />
          <input type="text" id="subject" name="subject" placeholder="Enter the subject" />
        </div>

        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

    </div>
  );
}

export default Contact;



