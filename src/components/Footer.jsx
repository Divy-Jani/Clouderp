import React from 'react';
import './footer.css'

function Footer() {
  return (
    <>
      <div className="flex p-14 justify-around font-DM" id="footer1">

        <div className="flex-col pt-10">
          <div ><a href="#"><img src="/images/cloudfooter.png"  id="footerimg" alt="" /></a></div>
          <div className='text-base font-medium text-left text-gray-600 pt-14'  id="footerfont">
            <a href="#">Get Support</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Become a Partner</a>
          </div>
        </div>

        <div className="flex-col pt-10">
          <div className='text-base font-bold text-left text-black pt-6' id="footerfont">Products</div>
          <div className='text-base font-medium text-left text-gray-600 pt-10'  id="footerfont">
            <a href="#">Finance</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Sales</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Websites</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Inventory & MRP</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">HR</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Marketing</a>
          </div>
        </div>

        <div className="flex-col pt-10">
          <div className='text-base font-bold text-left text-black pt-6' id="footerfont">Get Started</div>
          <div className='text-base font-medium text-left text-gray-600 pt-10'  id="footerfont">
            <a href="#">What is CloudERP?</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Solutions</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Customer Stories</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">FAQs</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Offers</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Pricing</a>
          </div>
        </div>

        <div className="flex-col pt-10">
          <div className='text-base font-bold text-left text-black pt-6' id="footerfont">About</div>
          <div className='text-base font-medium text-left text-gray-600 pt-10'  id="footerfont">
            <a href="#">Help and Support</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Terms & Conditions</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Privacy Policy</a>
          </div>
          <div className='text-base font-medium text-left text-gray-600 pt-6'  id="footerfont">
            <a href="#">Login</a>
          </div>
        </div>

      </div>
      <div>
        <hr className="border-gray-400 w-full" />

        <div className="flex justify-between px-20 pt-6 pb-6" id="copy0">
          <div className='text-base font-medium justify-center pl-12 items-center text-left text-gray-500 ' id="copy0">
            <div className="flex justify-center font-DM" id="copy1">Copyright ©Next cloudERP 2022. All rights reserved.</div>
          </div>
          <div className="flex space-x-6 pr-12" id="copy2">
            <div>
                <a href="https://www.facebook.com">
                <img className='h-6' src="/images/facebook.png" alt="Facebook"  id="copy3"/>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com">
                <img className='h-6' src="/images/linkedin.png" alt="LinkedIn"  id="copy3"/>
                </a>
            </div>
            <div>
                <a href="https://twitter.com/">
                <img className='h-6' src="/images/x.png" alt="X"  id="copy3" />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com">
                <img className='h-6' src="/images/instagram.png" alt="Instagram"  id="copy3"/>
                </a>
            </div>
            <div>
                <a href="https://www.youtube.com">
                <img className='h-6' src="/images/youtube.png" alt="YouTube" id="copy3" />
                </a>
            </div>
            </div>

        </div>

      </div>
    </>
  );
}

export default Footer;
