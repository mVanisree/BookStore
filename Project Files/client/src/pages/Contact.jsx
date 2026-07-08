import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="half">

        <div className="book1">
          <h2 id="mainheading">Get In Touch</h2>
          <p className="subheading">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="holdcform">

          <div className="contactform">

            <h2 className="heading">Send us a Message</h2>

            <div className="detailsclass">

              <div className="details">
                <label>Your Name</label>
                <input className="inputs" type="text" />
              </div>

              <div className="details">
                <label>Email</label>
                <input className="inputs" type="email" />
              </div>

              <div className="details">
                <label>Subject</label>

                <select className="inputs">
                  <option>General Inquiry</option>
                  <option>Order Issue</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="details">
                <label>Message</label>

                <textarea
                  className="inputs"
                  rows="5"
                ></textarea>
              </div>

            </div>

            <button className="sendmsg">
    Send Message →
</button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;