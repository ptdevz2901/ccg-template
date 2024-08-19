import { BaseButton } from '../components/button'
import './index.css'
import rightSvg from '../resources/svg/right.png'
import doctorPng from '../resources/img/doctor.png'
import doctorItem1 from '../resources/img/docter_1.png'
import doctorItem2 from '../resources/img/doctor_2.png'
import group5 from '../resources/img/Group 5.png'
import avatar from '../resources/img/Group 9.png'
import gradientBg from '../resources/img/GRADIENT.png'
import tooth from '../resources/img/tooth.png'
import happyYoung from '../resources/img/happy-young-asian-hugging-looking-camera 1.png'
import avatarTesti from '../resources/img/avatar_tesi.png'
import startFill from '../resources/img/Star 4.png'
import client from '../resources/img/client-use.png'
import startNotFill from '../resources/img/Star 5.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'


const items = Array.from({ length: 8 }, (_, index) => `Item ${index + 1}`);
export const Home = () => {
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
                    <p className="home_content-sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className='home_content-button'>
                        <button className='home_content-button--highlight'>
                            Get in touch
                            <img alt='svg' src={rightSvg} />
                        </button>
                        <BaseButton
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
                    <div className='home-about_content-des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud.
                    </div>
                    <BaseButton
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
        <div className='home_tesimonials'>
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
        </div>
        {/* NEWS */}
        <div className='home_blog container'>
            <h2 className='home_blog-title'>NEWS</h2>
            <img src={gradientBg} className='home_img-gradient' />
            <div className='home_blog-card-wrapper'>
                <div className='home_blog-card-vertical'>
                    <div className='home_blog-card-vertical--img'>
                        <img src='https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n09GjN5cUocJ7w5unTbKbokUZrHyE~j~qOiI5T33fWaqpjXz2r-DDKK~HATM-rggVVcNe3fkNQQGskd-GR5OHjrFhtrU7mJWyo5L1zMWhc1dnFQwRbhsd9-xLKvk6kwgGHrNLeHuZrYiUg0OGVGMJ4ruRsMLJqnoRO4i8ikvxSVXBwRkioNLVW2L~nVBK1vmjPLlV9USDk3oECg1aBmATBmda3tPbQ4jU-pNTNQCLwcbA2--WVcyGX5VsWKm8P~3puiE7ilFZ-6hdHsAgaRRx~OVuP0Py2plKsOtZOsqhyx6M2N-~7FN9-HsUffGyv8v~ziGDMDqdgkLckLT-OGdsw__' />
                    </div>
                    <div className='home_blog-card-vertical--content'>
                        <div className='home_blog-card-vertical--tag'>
                            NEWS
                        </div >
                        <p className='home_blog-card-vertical--title'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                        <p className='home_blog-card-vertical--sub'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <a href='#' className='home_blog-card-vertical--readmore'>Read more</a>
                    </div>
                </div>
                <div className='home_blog-card-list'>
                    <div className='home-blog-card-horizontal'>
                        <div className='home-blog-card-horizontal--img'>
                            <div className='home_blog-card-horizontal--tag'>
                                NEWS
                            </div >
                            <img src='https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZIPLv5EMo0kSspG2XjSoWbqe9o88Y3~gQUDAGbJ43NBlqKdgC~3rNE21j2b-nQCwnADy1uHN5fvNAFE4bsCb5~H5sVfzArhwYujV6uRR7cduXrUBmfub6clU4YmoB2Oy1rL1ExTUSwW3C5X2mUXn5TG7L29B7JWTIiSl-5QFjHLDe0HOPZRpnf~yoYNri13PwLAqBQId-zL3J4~znwVh9hHuNoSWANlLl0MlRJHsexQsfTMJoiN86qZHRbWhNkH4CuNCVrk7nm9MrX1bIw9OR~XVs~0qggAE8~EZuJWcs4BDGr9afoEC~xYNvZAeyITrkr3jfu01I9pAj2nT5a9jg__' alt='omg' />
                        </div>
                        <div className='home-blog-card-horizontal--content' >
                            <p className='home_blog-card-horizontal--title'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                            <p className='home_blog-card-horizontal--sub'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                    </div>
                    <div className='home-blog-card-horizontal'>
                        <div className='home-blog-card-horizontal--img'>
                            <div className='home_blog-card-horizontal--tag'>
                                NEWS
                            </div >
                            <img src='https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZIPLv5EMo0kSspG2XjSoWbqe9o88Y3~gQUDAGbJ43NBlqKdgC~3rNE21j2b-nQCwnADy1uHN5fvNAFE4bsCb5~H5sVfzArhwYujV6uRR7cduXrUBmfub6clU4YmoB2Oy1rL1ExTUSwW3C5X2mUXn5TG7L29B7JWTIiSl-5QFjHLDe0HOPZRpnf~yoYNri13PwLAqBQId-zL3J4~znwVh9hHuNoSWANlLl0MlRJHsexQsfTMJoiN86qZHRbWhNkH4CuNCVrk7nm9MrX1bIw9OR~XVs~0qggAE8~EZuJWcs4BDGr9afoEC~xYNvZAeyITrkr3jfu01I9pAj2nT5a9jg__' alt='omg' />
                        </div>
                        <div className='home-blog-card-horizontal--content' >
                            <p className='home_blog-card-horizontal--title'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                            <p className='home_blog-card-horizontal--sub'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                    </div>
                    <div className='home-blog-card-horizontal'>
                        <div className='home-blog-card-horizontal--img'>
                            <div className='home_blog-card-horizontal--tag'>
                                NEWS
                            </div >
                            <img src='https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZIPLv5EMo0kSspG2XjSoWbqe9o88Y3~gQUDAGbJ43NBlqKdgC~3rNE21j2b-nQCwnADy1uHN5fvNAFE4bsCb5~H5sVfzArhwYujV6uRR7cduXrUBmfub6clU4YmoB2Oy1rL1ExTUSwW3C5X2mUXn5TG7L29B7JWTIiSl-5QFjHLDe0HOPZRpnf~yoYNri13PwLAqBQId-zL3J4~znwVh9hHuNoSWANlLl0MlRJHsexQsfTMJoiN86qZHRbWhNkH4CuNCVrk7nm9MrX1bIw9OR~XVs~0qggAE8~EZuJWcs4BDGr9afoEC~xYNvZAeyITrkr3jfu01I9pAj2nT5a9jg__' alt='omg' />
                        </div>
                        <div className='home-blog-card-horizontal--content' >
                            <p className='home_blog-card-horizontal--title'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                            <p className='home_blog-card-horizontal--sub'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_blog-viewmore'>
                <BaseButton
                    title={'View more'}
                />
            </div>
        </div>
        {/* Media */}
        <div className='home_media container'>
            <h2 className='home_media-title'>MEDIA</h2>
            <div className='home_media-list'>
                {[...new Array(6)].map((_, index) => {
                    return <div className='home_media-item'>
                        <img src='https://s3-alpha-sig.figma.com/img/eb95/127b/6e38c272eaf4db5d6e8bf6c9598978ca?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cK4NF4WW~rQ2R3dWsP6UtDnoyzBeVfp3k7mInRILUtxj~NeyNRpET3iKpkurRu9wNl6hJcMQm1jlb1RuYwC4BM0vrGMxso01ipuqsA7ef6VTchOy~2d6~AHJ4QSmeiTTWQ5TorZcvjmD-DWkbcaxV0rPjusi2WF~Pjg001sfJzDujKyQWSUPeZdRM6oXk019mbdTR7o4KDqKG78Gz~TgsP65jw~MEZmnCX0YDV083I2qRdIWs6nES~eFhO-RBsF2zC~xps1eeVGFTClopiGVEP-AYMe3U1g8h91dXgVAaJ3pQS19Arql3Z~TL8ZwWJDhZJsfcrkZsodsukI0mswTZw__' />
                    </div>
                })}
            </div>
            <div className='home_media-viewmore'>
                <BaseButton
                    title={'View more'}
                />
            </div>
        </div>

        {/* Media coverage */}
        <div className='container home-mediaCoverage'>
            <h2 className='home_mediaCoverage-title'>MEDIA COVERAGE</h2>
            <img src={client} />
        </div>
    </div >
}