
import './Contact.css';

const email = 'bjorgvinbk@gmail.com';

const Contact = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Jeg vil gjerne komme i kontakt med deg');
    const body = encodeURIComponent('Hei Björgvin,');

    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  return (
    <div>
      <h1>Get in contact with me</h1>

      <button onClick={handleEmailClick}>Contact me via email</button>
    </div>
  );
}

export default Contact;