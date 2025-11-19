import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section min-h-screen py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="contact-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="contact-subtitle text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a commission? I'd love to hear from you!
          </p>
          <div className="contact-divider w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="contact-form-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="contact-form-input"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="contact-form-input"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="contact-form-textarea"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button type="submit" className="contact-form-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">📧</div>
              <div>
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-text">carlodee.official@gmail.com</p>
                <p className="contact-info-description">I'll respond within 24 hours</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">💬</div>
              <div>
                <h3 className="contact-info-title">Social Media</h3>
                <p className="contact-info-text">Twitter • Instagram • ArtStation</p>
                <p className="contact-info-description">Follow for updates and WIPs</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">⏰</div>
              <div>
                <h3 className="contact-info-title">Response Time</h3>
                <p className="contact-info-text">1-2 Business Days</p>
                <p className="contact-info-description">For commission inquiries</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">💰</div>
              <div>
                <h3 className="contact-info-title">Commission Status</h3>
                <p className="contact-info-text">Currently Accepting</p>
                <p className="contact-info-description">Limited slots available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;