import React from 'react'
import { FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1520] m-auto px-4 py-2 bg-[#24262b]'>
      <div className='py-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
          <div>
            <h1 className='w-full text-3xl font-bold text-orange-700'>FoodHub</h1>
            <p>Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis.</p>
            <h6 className='font-medium text-[#9b9b9b] my-6'>SOCIAL LINKS</h6>
            <div className='flex justify-left gap-2 md:w-[75%] my-2'>
                <FaFacebookSquare className='cursor-pointer' size={30}/>
                <FaInstagramSquare className='cursor-pointer' size={30}/>
                <FaTwitterSquare className='cursor-pointer' size={30}/>
                <FaGithubSquare className='cursor-pointer' size={30}/>
                <FaDribbbleSquare className='cursor-pointer' size={30}/>                
            </div>
            <div className='flex justify-left md:w-[75%] my-2 gap-2' >
                <img className='w-[100px] h-[30px] object-cover rounded-md my-1 cursor-pointer  border-[0.5px] border-white' src={process.env.PUBLIC_URL+"/images/appleStore.jpg"}/>
                <img className='w-[100px] h-[30px] object-cover rounded-md my-1 cursor-pointer  border-[0.5px] border-white' src={process.env.PUBLIC_URL+"/images/playStore.jpg"} />
            </div>
          </div>
          <div className='lg:col-span-2 flex mt-6 justify-between'>
              <div>
                <h6 className='font-medium text-[#9b9b9b] '>ABOUT FOODHUB</h6>
                <ul>
                  <li className='py-2 text-sm cursor-pointer'>Who We Are</li>
                  <li className='py-2 text-sm cursor-pointer'>Blog</li>
                  <li className='py-2 text-sm cursor-pointer'>Work With Us</li>
                  <li className='py-2 text-sm cursor-pointer'>Report Fraud</li>
                  <li className='py-2 text-sm cursor-pointer'>Contact Us</li>
                </ul>
              </div>

              <div>
                <h6 className='font-medium text-[#9b9b9b]'>LOCATION</h6>
                <ul>
                  <li className='py-2 text-sm cursor-pointer'>Delhi</li>
                  <li className='py-2 text-sm cursor-pointer'>Mumbai</li>
                  <li className='py-2 text-sm cursor-pointer'>Hyderabad</li>
                  <li className='py-2 text-sm cursor-pointer'>Ahmedabad</li>
                </ul>
              </div>
              <div>
                <h6 className='font-medium text-[#9b9b9b] '>FOR RESTAURANTS</h6>
                <ul>
                  <li className='py-2 text-sm cursor-pointer'>Partner With Us</li>
                  <li className='py-2 text-sm cursor-pointer'>Apps For You</li>
                  <li className='font-medium text-[#9b9b9b] mt-4'>FOR ENTERPRISES</li>
                  <li className='py-2 text-sm cursor-pointer'>FoodHub For Enterprise</li>
                </ul>
              </div>
              <div>
                <h6 className='font-medium text-[#9b9b9b]'>LEARN MORE</h6>
                <ul>
                  <li className='py-2 text-sm cursor-pointer'>Privacy</li>
                  <li className='py-2 text-sm cursor-pointer'>Security</li>
                  <li className='py-2 text-sm cursor-pointer'>Terms</li>
                  <li className='py-2 text-sm cursor-pointer'>Sitemap</li>
                </ul>
              </div>
          </div>
      </div>
      <hr className='mt-6 mb-3 bg-gray-700 border-1 '/>
      <p className='text-gray-300 text-sm'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © FoodHub™ Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer
