import './Contact.css';
function Contact () {
    return (
      <div>
          <h1>Get in contact with me</h1>
  
          <form className="contactform" action="submit-form.php" method="post">
            <div>
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" />
            </div>
  
            <div>
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" />
            </div>
  
            <div>
              <label htmlFor="subject">Subject:</label><br />
              <input type="text" id="subject" name="subject" />
            </div>
  
            <div>
              <label htmlFor="message">Message:</label><br />
              <textarea id="message" name="message"></textarea>
            </div>
  
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        <footer></footer>
      </div>
    );
  }
  
  export default Contact;
  