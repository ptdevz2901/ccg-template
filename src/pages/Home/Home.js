import { BaseButton } from '../../components/button'
import './index.css'
import rightSvg from '../../resources/svg/right.png'
import doctorPng from '../../resources/img/doctor.png'
import doctorItem1 from '../../resources/img/docter_1.png'
import doctorItem2 from '../../resources/img/doctor_2.png'
import group5 from '../../resources/img/Group 5.png'
import avatar from '../../resources/img/Group 9.png'
import gradientBg from '../../resources/img/GRADIENT.png'
import tooth from '../../resources/img/tooth.png'
import happyYoung from '../../resources/img/happy-young-asian-hugging-looking-camera 1.png'
import avatarTesti from '../../resources/img/avatar_tesi.png'
import startFill from '../../resources/img/Star 4.png'
import client from '../../resources/img/client-use.png'
import startNotFill from '../../resources/img/Star 5.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../consts/path'
import { NEWS_DATA } from '../../data/news'
import { MEDIA_DATA } from '../../data/media'
import VideoModal from '../../components/youtube-modal'
import { useState } from 'react'
import playBtn from '../../resources/img/play-media.png'



const items = Array.from({ length: 8 }, (_, index) => `Item ${index + 1}`);
export const Home = () => {
    const [open, setOpen] = useState(false)
    const [videoSelected, setVideoSelected] = useState('')
    const navigate = useNavigate()
    return <div className="home_wrapper">
        {/* NEWS */}
        <div className='wrapper-container'>
            <div className='home_news container'>
                <div className='home_content'>
                    <div className='home_content-welcome'>
                        <span className='home-content-welcome--dot-right' />
                        Welcome to healcare
                        <span className='home-content-welcome--dot-left' />
                    </div>
                    <div className="home_content-des">
                        TO MAKE THE <span className="home_content-des--highlight">BEST SMILE</span> OVER THE WORLD
                    </div>
                    {/* <p className="home_content-sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua ut enim ad minim veniam, quis nostrud.
                    </p> */}
                    <div className='home_content-button'>
                        <button
                            className='home_content-button--highlight'
                            onClick={() => {
                                navigate(PATH.CONTRACT)
                            }}
                        >
                            Get in touch
                            <img alt='svg' src={rightSvg} />
                        </button>
                        <BaseButton
                            onClick={() => {
                                navigate(PATH.ABOUT)
                            }}
                            title={'See more'}
                        />
                    </div>
                </div>
                <div className='home_img'>
                    <img className='doctor-main' src={doctorPng} />
                    <img className='doctor-sub1' src={doctorItem1} />
                    <img className='doctor-sub2' src={doctorItem2} />
                    <div className='home_img-item1'>
                        <img src={group5} />
                        <div className='home_img-item1--content'>
                            <p>We are the best dental clinic</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className='home_img-item2'>
                        <p>Very good <br />experience...</p>
                        <img src={avatar} alt='avatar' />
                    </div>
                    <img src={gradientBg} className='home_img-gradient' />
                </div>
            </div>
        </div>
        {/* ABOUT */}
        <div className='wrapper-container'>
            <div className='home-about container'>
                {/* <img src={gradientBg} className='home_about-gradient' /> */}
                <div className='home-about_imgWrapper'>
                    <img src={tooth} className='home-about_img' />
                </div>
                <div className='home-about_content'>
                    <div className='home-about_content-title'>ABOUT OUR COMPANY</div>
                    <div className='home-about_content-des'>Charion is a company that develops advanced dental oral care products and services in Japan.
                        Meanwhile we are expanding our services not only in Japan but also overseas,
                        and as an “innovator” in oral care industry, we create groundbreaking products and services
                        with new ideas which only could created by venture companies.
                    </div>
                    <BaseButton
                        onClick={() => {
                            navigate(PATH.ABOUT)
                        }}
                        title={'View more'}
                    />
                </div>
            </div>
        </div>
        {/* CONCEPT */}
        <div className='wrapper-container'>
            <div className='home-concept container'>
                <img src={gradientBg} className='home_img-gradient' />
                <div className='home-concept_des'>
                    <h2>CONCEPT</h2>
                    <p>We deliver oral care products such as BIHAKU.</p>
                    <p>Charion believes it is a job that makes people smile.</p>
                    <p>White and healthy beautiful teeth create self-confidence and exceptional smile.</p>
                    <p>Oral care leads to the prevention of periodontal disease and brings a healthy smile to life.</p>
                    <p>As the world's number one smile maker, we are dedicated to providing an easy-to-use oral care service.</p>
                    <p>We will challenge ourselves to create products and services that have never existed before</p>
                    <p>Our company is committed to providing customers everyday with a smile.</p>
                    <p>To be more active, healthier, and more like yourself,Charion, a company that makes people smile</p>
                </div>
                <div className='home-concept_feature'>
                    <h2 className='home-concept_title'>TO MAKE THE BEST SMILEOVER THE WORLD.</h2>
                    <div className='home-concept_img'>
                        <img src={happyYoung} alt='happy young' />
                    </div>
                </div>
            </div>
        </div>
        {/* Testimonials */}
        {/* <div className='home_tesimonials'>
            <div className='container'>
                <h2 className='home_tesimonials-title'>TESTIMONIALS</h2>
                <div className='home_tesimonials-swipper'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className='home_tesimonials-list'>
                                {[...new Array(8)].map((_, index) => {
                                    return <div className='home_tesimonials-item'>
                                        <div className='home_tesimonials-item-avatar'>
                                            <img src={avatarTesti} alt='avatar' />
                                        </div>
                                        <div className='home_tesimonials-item-star'>
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startNotFill} alt='not-fill' />
                                        </div>
                                        <p className='home_tesimonials-item-des'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod</p>
                                        <p className='home_tesimonials-item-sub'>Ryan Gigs</p>
                                        <p className='home_tesimonials-item-small'>Ryan Gigs</p>
                                    </div>
                                })}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_tesimonials-list'>
                                {[...new Array(8)].map((_, index) => {
                                    return <div className='home_tesimonials-item'>
                                        <div className='home_tesimonials-item-avatar'>
                                            <img src={avatarTesti} alt='avatar' />
                                        </div>
                                        <div className='home_tesimonials-item-star'>
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startNotFill} alt='not-fill' />
                                        </div>
                                        <p className='home_tesimonials-item-des'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod</p>
                                        <p className='home_tesimonials-item-sub'>Ryan Gigs</p>
                                        <p className='home_tesimonials-item-small'>Ryan Gigs</p>
                                    </div>
                                })}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='home_tesimonials-list'>
                                {[...new Array(8)].map((_, index) => {
                                    return <div className='home_tesimonials-item'>
                                        <div className='home_tesimonials-item-avatar'>
                                            <img src={avatarTesti} alt='avatar' />
                                        </div>
                                        <div className='home_tesimonials-item-star'>
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startFill} alt='fill' />
                                            <img src={startNotFill} alt='not-fill' />
                                        </div>
                                        <p className='home_tesimonials-item-des'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod</p>
                                        <p className='home_tesimonials-item-sub'>Ryan Gigs</p>
                                        <p className='home_tesimonials-item-small'>Ryan Gigs</p>
                                    </div>
                                })}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div> */}
        {/* NEWS */}
        <div className="wrapper-container">
            <div className='home_blog container'>
                <h2 className='home_blog-title'>NEWS</h2>
                <img src={gradientBg} className='home_img-gradient' />
                <div className='home_blog-card-wrapper' onClick={() => {
                    navigate(`/news-detail/${NEWS_DATA[0].id}`)
                }}>
                    <div className='home_blog-card-vertical'>
                        <div className='home_blog-card-vertical--img'>
                            <img src={NEWS_DATA[0].imageUrl} />
                        </div>
                        <div className='home_blog-card-vertical--content'>
                            <div className='home_blog-card-vertical--tag'>
                                {NEWS_DATA[0].tag}
                            </div >
                            <p className='home_blog-card-vertical--title'>{NEWS_DATA[0].title}</p>
                            <p className='home_blog-card-vertical--sub'>{NEWS_DATA[0].description}</p>
                            <a href='#' className='home_blog-card-vertical--readmore'>Read more</a>
                        </div>
                    </div>
                    <div className='home_blog-card-list'>
                        {[...new Array(3)].map((_, idx) => {
                            const index = idx + 1
                            return <div className='home-blog-card-horizontal' key={idx} onClick={() => {
                                navigate(`/news-detail/${NEWS_DATA[index].id}`)
                            }}>
                                <div className='home-blog-card-horizontal--img'>
                                    <div className='home_blog-card-horizontal--tag'>
                                        {NEWS_DATA[index].tag}
                                    </div >
                                    <img src={NEWS_DATA[index].imageUrl} alt={NEWS_DATA[index].title} />
                                </div>
                                <div className='home-blog-card-horizontal--content' >
                                    <p className='home_blog-card-horizontal--title'>{NEWS_DATA[index].title}</p>
                                    <p className='home_blog-card-horizontal--sub'>{NEWS_DATA[index].description}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
                <div className='home_blog-viewmore'>
                    <BaseButton
                        onClick={() => {
                            navigate(PATH.NEWS)
                        }}
                        title={'View more'}
                    />
                </div>
            </div>
        </div>

        {/* Media */}
        {/* <div className='home_media container'>
            <h2 className='home_media-title'>MEDIA</h2>
            <div className='home_media-list'>
                {[...new Array(3)].map((_, index) => {
                    return <div className='home_media-item'>
                        <img src={MEDIA_DATA[index].imageUrl} />
                    </div>
                })}
            </div>
            <div className='home_media-viewmore'>
                <BaseButton
                    title={'View more'}
                    onClick={() => {
                        navigate(PATH.MEDIA)
                    }}
                />
            </div>
        </div> */}
        <div className="media wrapper-container">
            <div className="container">
                <VideoModal
                    videoSelected={videoSelected}
                    setVideoSelected={setVideoSelected}
                    modal={open}
                    setModal={setOpen}
                />
                <h2 className="media_title">MEDIA</h2>
                <div className='media-list'>
                    {[...new Array(3)].map((_, idx) => {
                        const media = MEDIA_DATA[idx]
                        return <div key={media.imageUrl} className='media-item' onClick={() => {
                            setOpen(true)
                            setVideoSelected(media.videoUrl)
                        }}>
                            <img className='media-play' src={playBtn} />
                            <img src={media.imageUrl} alt={media.imageUrl} className='media-img' />
                        </div>
                    })}
                </div>
                <div className='home_media-viewmore'>
                    <BaseButton
                        title={'View more'}
                        onClick={() => {
                            navigate(PATH.MEDIA)
                        }}
                    />
                </div>
            </div>
        </div>
        {/* Media coverage */}
        <div className='container home-mediaCoverage'>
            <h2 className='home_mediaCoverage-title'>MEDIA COVERAGE</h2>
            <img src={client} />
        </div>
    </div >
}