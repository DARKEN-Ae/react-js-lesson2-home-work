import React, { Component } from 'react';
import FooterLogo from "../assets/icon/logo.svg";
import Facebook from "../assets/icon/fb.png";
import Linkiden from "../assets/icon/linkedin.png";
import vk from "../assets/icon/vk.png";
import "./Footer.scss"

export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <footer>
            <div className="footer_logo">
               <img src={FooterLogo} alt="Footerlogo" />
               <div className="social__media">
                <img src={Facebook} alt="Facebook" />
                <img src={Linkiden} alt="Linkidin" />
                <img src={vk} alt="vk" />
               </div>
            </div>
           <div className="footer_controller">
             <div className="footer_left_content">
              <ul>
                <li><a href="/">Продукция</a></li>
                <li><a href="/">Ламинатные тубы</a></li>
                <li><a href="/">Экструзионные тубы</a></li>
                <li><a href="/">Другая упаковка</a></li>
                <li><a href="/">Компания</a></li>
                <li><a href="/">О нас</a></li>
                <li><a href="/">Наша команда</a></li>
                <li><a href="/">Сертификаты</a></li>
                <li><a href="/">Разделы</a></li>
                <li><a href="/">Контакты</a></li>
                <li><a href="/">Новости</a></li>
                <li><a href="/">Вакансии</a></li>
              </ul>
            </div>
            <div className="footer_right_content">
             <div className="one-ftr">
               <div className="ft_person">
                <p className='name'>Беларусь</p>
                <p className='number_one'>+375 (17) 270 53 77</p>
                <p className='number_two'>+375 (17) 270 53 78</p>
              </div>
                <div className="ft_person">
                <p className='name'>Европа</p>
                <p className='number_one'>+375 (17) 270 53 77</p>
                <p className='number_two'>+375 (17) 270 53 78</p>
              </div>
             </div>
              <div className="one-ftr">
               <div className="ft_person">
                <p className='name'>Москва</p>
                <p className='number_one'>+375 (17) 270 53 77</p>
                <p className='number_two'>+375 (17) 270 53 78</p>
              </div>
                <div className="ft_person">
                <p className='name'>Екатеринбург</p>
                <p className='number_one'>+375 (17) 270 53 77</p>
                <p className='number_two'>+375 (17) 270 53 78</p>
              </div>
             </div>
            </div>
           </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Footer