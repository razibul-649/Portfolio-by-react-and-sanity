import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import {FaLinkedin,FaRegFilePdf,FaUserCircle} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/md-razibul-islam-736532175/">
        <FaLinkedin />
      </a>
     
    </div>
    <div>
      <a href="https://twitter.com/razibul6969">
        <BsTwitter />
      </a>
     
    </div>
    <div>
      <a href="https://www.facebook.com/mdrazibul.islam.399">  <FaFacebookF />       </a>
      
    </div>
    <div>
      <a href="https://hiamrazibulislamprotfolio.on.drv.tw/razibul_protfolio/"> 
       <FaUserCircle/>
      </a>
    </div>
    <div><a href="https://github.com/razibul-649">
      <FaGithub/>
      </a>
    </div>
    <div><a href="https://drive.google.com/file/d/11VV5X7eNGUUhrbWqc-vzSQrqRf4Fl6zb/view?usp=sharing">
      <FaRegFilePdf/>
      </a>
    </div>
  </div>
);

export default SocialMedia;
