import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:sudhanshuiet15@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Hello Sudhanshu,\n\nYou have received a new message from your portfolio website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\nYour Portfolio Website`
      )}`
      
      // Open default email client
      window.location.href = mailtoLink
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setSubmitStatus('success')
      
      // Show success message
      setTimeout(() => {
        alert('Your email client should open with a pre-filled message. If it doesn\'t open automatically, please send your message directly to sudhanshuiet15@gmail.com')
      }, 100)
      
    } catch (error) {
      console.error('Error opening email client:', error)
      setSubmitStatus('error')
      alert('Sorry, there was an error. Please send your message directly to sudhanshuiet15@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://www.github.com/sudh29',
      icon: '📱'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sudh29',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:sudhanshuiet15@gmail.com',
      icon: '📧'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Ghaziabad, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>sudhanshuiet15@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>(+91) 9453631801</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Email client opened! Your message is ready to send.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Please send your message directly to sudhanshuiet15@gmail.com
                </div>
              )}
            </form>
            
            <div className="contact-note">
              <p>
                <strong>Note:</strong> This will open your default email client with a pre-filled message. 
                If your email client doesn't open automatically, please send your message directly to 
                <a href="mailto:sudhanshuiet15@gmail.com"> sudhanshuiet15@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 