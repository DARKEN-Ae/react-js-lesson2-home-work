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
// import NextPrevImg from "../components/assets/icon/nextButton.png";
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
import NewsImg1 from "../components/assets/imgs/news1.png";
import NewsImg2 from "../components/assets/imgs/news2.png";
import NewsImg3 from "../components/assets/imgs/news3.png";
import { FaArrowUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certificates = [
 Sertificat1,Sertificat2,Sertificat3,Sertificat4,Sertificat5
];


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
         <button className="back-to-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
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
              <div className="carousel-container">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
              >
                {certificates.map((src, index) => (
                  <SwiperSlide key={index} className="slide">
                    <img src={src} alt={`Certificate ${index + 1}`} className="carousel-image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            </div>
          </div>
           {/* <div className="next-prev">
            <img className='prev' src={NextPrevImg} alt="NextPrevImg" />
            <img className='next' src={NextPrevImg} alt="NextPrevImg" />
          </div> */}
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
        {/* 7 */}
        <div className="section-seven">
          <div className="container">
            <h1>Новости</h1>
           <div className="seven__cards">
             <div className="news-cards">
              <div className="news_card">
                <img src={NewsImg1} alt="NewsImg1" />
                <p className='Date-p'>28.01.2022</p>
                <p className='lorem-p'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
               <div className="news_card">
                <img src={NewsImg2} alt="NewsImg2" />
                <p className='Date-p'>28.01.2022</p>
                <p className='lorem-p'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
               <div className="news_card">
                <img src={NewsImg3} alt="NewsImg3" />
                <p className='Date-p'>28.01.2022</p>
                <p className='lorem-p'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
            </div>
              <button>Все новости</button>
           </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;