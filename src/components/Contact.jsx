import React, { useState } from 'react'
import Title from './Title'
import { FaGithub,  FaInstagramSquare,FaFacebook,FaPhoneSquareAlt } from 'react-icons/fa'
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // for now just simulate submission
    console.log(formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="w-11/12 mx-auto sm:py-50  md:py-5" id="contact">
      <Title text="Contact Me" />

      <div className="flex flex-col md:flex-row gap-12 mt-16">
        {/* Left side: Contact info / social links */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-[#DF5E04]">Let's Connect</h2>
          <p className="text-gray-400 text-xl">
            I'm open to freelance opportunities or collaboration. Feel free to contact me.
          </p>

          <div className="flex gap-10 mt-4 text-white text-2xl">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maruffdev@gmail.com&su=Portfolio%20Contact&body=Hi%20Maruf," target="_blank" rel="noreferrer" className='hover:text-[#DF5E04] transition-all duration-200'>
              <SiGmail size={25} />
            </a>
           <a href="https://www.facebook.com/share/17mi6gqoRQ/" target='_blank' className='hover:text-[#DF5E04] transition-all duration-200'><FaFacebook size={25} /></a>
            <a href="https://www.instagram.com/mortaza_maruf?igsh=aHJuZ3M3d285aXYz" target='_blank' className='hover:text-[#DF5E04] transition-all duration-200'><FaInstagramSquare size={25} /></a>
            <a href="https://wa.me/8801725133651?text=Hi%20Maruf%2C%20I%20saw%20your%20portfolio!
" target='_blank' className='hover:text-[#DF5E04] transition-all duration-200'><IoLogoWhatsapp size={25} /></a>
            <a href="tel:0881636024882" target='_blank' className='hover:text-[#DF5E04] transition-all duration-200'><FaPhoneSquareAlt size={25} /></a>
            
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="md:w-2/3 bg-gray-700/30 p-8 rounded-xl shadow-lg">
          {submitted ? (
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold text-[#DF5E04]">Thank you!</h3>
              <p className="mt-2 text-gray-400">Your message has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="input input-bordered w-full bg-transparent outline-none text-white border-[#E97F4A] placeholder-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="input input-bordered w-full bg-transparent outline-none text-white border-[#E97F4A] placeholder-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required 
                rows={15}
                className="textarea textarea-bordered w-full bg-transparent outline-none text-white border-[#E97F4A] placeholder-white"
              ></textarea>

              <button
                type="submit"
                className="btn bg-[#DF5E04] border-none hover:opacity-90 text-white"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact

