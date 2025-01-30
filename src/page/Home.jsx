import React, { Component, Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import "./Home.scss"
import Facebook from "../components/assets/icon/fb.png";
import Linkiden from "../components/assets/icon/linkedin.png";
import vk from "../components/assets/icon/vk.png";
import video from "../components/assets/imgs/video.png";
import playicon from "../components/assets/icon/button.png";
import Sertificat1 from "../components/assets/imgs/sertificat1.png";
import Sertificat2 from "../components/assets/imgs/sertificat2.png";
import Sertificat3 from "../components/assets/imgs/sertificat3.png";
import Sertificat4 from "../components/assets/imgs/sertificat4.png";
import Sertificat5 from "../components/assets/imgs/sertificat5.png";
import NextPrevImg from "../components/assets/icon/nextButton.png";
import cardImg1 from "../components/assets/imgs/card1.png";
import cardImg2 from "../components/assets/imgs/card2.png";
import cardImg3 from "../components/assets/imgs/card3.png";
import cardImg4 from "../components/assets/imgs/card4.png";
import cardImg5 from "../components/assets/imgs/card5.png";
import p1 from "../components/assets/imgs/p1.png";
import p2 from "../components/assets/imgs/p2.png";
import p3 from "../components/assets/imgs/p3.png";
import p4 from "../components/assets/imgs/p4.png";
import p5 from "../components/assets/imgs/p5.png";


export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        {/* 1 */}
        <section className='home-section'>
          <div className="container">
            <div className="left-text">
             <div className="left">
               <p className="lang-group">LEANGROUP - тубы и этикетки</p>
              <h1>Ламинатные тубы</h1>
              <p className="lorem-p">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
              <button>Каталог</button>
             </div>
              <div className="socail-media">
                <img src={Facebook} alt="Facebook" />
                <img src={Linkiden} alt="Linkiden" />
                <img src={vk} alt="vk" />
              </div>
            </div>
          </div>
        </section>
        {/* 2 */}
        <div className="section-two">
          <div className="container">
            <h1>О компании <span>LEANGROUP</span></h1>
            <div className="information-video">
           <div className="video-play">
              <img src={video} alt="video" />
              <img className='playIcon' src={playicon} alt="playicon" />
           </div>
             <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
              <br /> <br />
                Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                <br /> <br />
               С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.  </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="carousel-section">
          <div className="container">
            <h1>Качество продукции подтверждают <span>сертификаты</span></h1>
            <div className="carousel-images">
              <div className="carousel-item">
                <img src={Sertificat1} alt="Sertificat1" />
              </div>
              <div className="carousel-item">
                <img src={Sertificat2} alt="Sertificat2" />
              </div>
              <div className="carousel-item">
                <img src={Sertificat3} alt="Sertificat3" />
              </div>
              <div className="carousel-item">
                <img src={Sertificat4} alt="Sertificat4" />
              </div>
              <div className="carousel-item">
                <img src={Sertificat5} alt="Sertificat5" />
              </div>
            </div>
          </div>
           <div className="next-prev">
            <img className='prev' src={NextPrevImg} alt="NextPrevImg" />
            <img className='next' src={NextPrevImg} alt="NextPrevImg" />
          </div>
        </div>
        {/* 4 */}
        <div className="section-four">
          <div className="container">
            <h1>Наша <span>продукция</span></h1>
           <div className="in__contents">
             <div className="page__btns">
              <button>Ламинатные тубы</button>
              <button>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
            <div className="page__cards">
              <img src={cardImg1} alt="cardImg1" />
              <img src={cardImg2} alt="cardImg2" />
              <img src={cardImg3} alt="cardImg3" />
              <img src={cardImg4} alt="cardImg4" />
              <img src={cardImg5} alt="cardImg5" />
            </div>
            <button>Перейти в каталог</button>
           </div>
          </div>
        </div>
        {/* 5 */}
        <div className="section-five">
          <div className="container">
           <div className="ajsdajskdgjk">
             <div className="five-section-card">
             <div className="five_card_texts">
               <div className="form-sc_1_texts">
                <h1>Получить подробную <span>информацию</span></h1>
                <p>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
              </div>
              <form>
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="+375 (29) 0000000" />
                <textarea name="message" id="msg" placeholder='Комментарий'></textarea>
              </form>
              <button className='send_btn'>Получить информацию</button>
             </div>
            </div>
           </div>
          </div>
        </div>
        {/* 6 */}
        <div className="section-six">
          <div className="container">
            <h1>Наша <span>команда</span></h1>
            <div className="person-cards">
              <div className="person_card1">
                <img src={p1} alt="p1" />
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <span>+375 (17) 270-53-77 (317)</span>
              </div>
              <div className="person_card1">
                <img src={p2} alt="p2" />
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <span>+375 (17) 270-53-77 (317)</span>
              </div>
              <div className="person_card1">
                <img src={p3} alt="3" />
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <span>+375 (17) 270-53-77 (317)</span>
              </div>
              <div className="person_card1">
                <img src={p4} alt="p4" />
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <span>+375 (17) 270-53-77 (317)</span>
              </div>
              <div className="person_card1">
                <img src={p5} alt="p5" />
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <span>+375 (17) 270-53-77 (317)</span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;