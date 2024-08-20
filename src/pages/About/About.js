import './index.css'
import aboutCard1 from '../../resources/img/about-card1.png'
import bgGradient from '../../resources/img/GRADIENT.png'
import aboutService1 from '../../resources/img/about-service1.png'
import aboutService2 from '../../resources/img/about-service2.png'
import happyYoung from '../../resources/img/happy-young-asian-hugging-looking-camera 1.png'
import ourCourse from '../../resources/img/our-course.png'
import aboutCsv from '../../resources/img/csv_about.jpg'
export const About = () => {
    return <div className="about">
        <div className="wrapper-container">
            <div className="container">
                <div className="about_company">
                    <div className='about_company-gradient'>
                        <img src={bgGradient} />
                    </div>
                    <h2 className="about_company-title">ABOUT <span className="highlight">OUR COMPANY</span></h2>
                    <p className="about_company-des">WE DELIVER ADVANCED DENTAL ORAL CARE PRODUCT SERVICES TO COMPANIES AND CUSTOMERS.</p>
                    <div className='about_company-list'>
                        {[...new Array(3)].map((_, idx) => {
                            return <div className='about_company-card'>
                                <div className='abount_company-cardImg'>
                                    <img src={aboutCard1} alt='aboutcard' />
                                </div>
                                <div className='abount_company-content'>
                                    <h3>CUSTOMER</h3>
                                    <p>For people who are seeking a high quality lifestyle</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='about_company-des-wrapper'>
                        <p className='about_company-des'>
                            Charion is a company that develops advanced dental oral care products and services in Japan.
                        </p>
                        <p className='about_company-des'>Meanwhile we are expanding our services not only in Japan but also overseas, and as an “innovator” in oral care industry, we create groundbreaking products and services with new ideas which only could created by venture companies.</p>
                    </div>
                </div>

                <div className='about_service'>
                    <div className='about_service-gradient'>
                        <img src={bgGradient} />
                    </div>
                    <h2 className='title'>SERVICE</h2>
                    <div className='about_service-section'>
                        <div className='about_service-section-content'>
                            <div className='dot topleft' />
                            <div className='dot small bottomRight' />
                            <h3>BIHAKU products</h3>
                            <p>BIHAKU products are oral care products developed for people seeking a high-quality lifestyle. We committed to let customers experience advanced oral care.</p>
                        </div>
                        <div className='about_service-section-img'>
                            <div className='rectagle topleft' />
                            <div className='rectagle bottomRight large' />
                            <img alt='img' src={aboutService1} />
                        </div>
                    </div>
                    <div className='about_service-section reverse'>
                        <div className='about_service-section-content'>
                            <div className='dot topRight' />
                            <h3>BIHAKU Whitening</h3>
                            <p>We develop products that appeal to consumers by combining the needs of potential customers with new services that do not exist in the conventional beauty industry based on a combination of ingredients that original and totally harmless to human body.
                            </p>
                        </div>
                        <div className='about_service-section-img'>
                            <div className='rectagle topleft' />
                            <div className='rectagle bottomRight large' />
                            <img alt='img' src={aboutService2} />
                        </div>
                    </div>
                </div>

                <div className='home-concept container'>
                    <img src={bgGradient} className='home_img-gradient' />
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
        </div>
        <div className='about-our-course'>
            <h2>OUR COURSE OF ACTION</h2>
            <img src={ourCourse} alt='outCorse' />
        </div>
        <div className='wrapper-container'>
            <div className='container'>
                <div className='about-csv'>
                    <h2>CSV -Social contribution activities</h2>
                    <p className='about-csv-des'>Charion are allocating part of the salesOf the BIHAKU spray to support children</p>
                    <p className='about-csv-content'>Inviting dentists to jointly hold events with J.League teams, and teaching children all over Japan about dental knowledge and how to properly brush their teeth, we are carrying out activities to raise awareness about preventive dentistry and oral care.Outside of Japan, school lunch expenses are sent to "United Nations WFP" “Authorized NPO ICA Cultural Business Association” “Specified non-profit organization ESA Educational Support Association” “Public Interest Incorporated Association Asian Association Asian Friends Association” Japan International Society Corporation, NPO Palestine Children's Campaign, Mumphie and Youth Fund, and delivered to local children.</p>
                </div>
                <div className='about-csv_list'>
                    {[...new Array(8)].map((_, i) => {
                        return <div className='about-csv_item' key={i}>
                            <img src={aboutCsv} alt='about' />
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>

}


