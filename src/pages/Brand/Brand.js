import './index.css'
import brand1 from '../../resources/img/brand1.png'
import brand2 from '../../resources/img/brand2.png'
import brand3 from '../../resources/img/brand3.png'
import brand4 from '../../resources/img/brand4.png'
import gradient from '../../resources/img/GRADIENT.png'
export const Brand = () => {
    return <div className='brand wrapper-container'>
        <div className='container'>
            <section className='brand-section'>
                <div className='brand-gradient'>
                    <img src={gradient} alt='gradient' />
                </div>
                <h2 className='brand-section-title'>BRAND MESSAGE</h2>
                <p className='brand-section-des'>LOVE YOURSELF JUST THE WAY YOU ARE</p>
                <div className='brand-section_content'>
                    <div className='brand-section_content-description'>
                        <p>Japanese people are tend to have lower self-este emcompared to other countries, most people usually lack self-confidence and cannot find their own strengths.</p>
                        <p>We hope that our teeth whitening service will help you to re-recognize your inherent charm and create an opportunity to find your potential and affirmation.</p>
                    </div>
                    <div className='brand-section_content-img'>
                        <img alt='img' src={brand1} />
                    </div>
                </div>
            </section>
            <section className='brand-section mt-12'>
                <h2 className='brand-section-title'>BRAND HISTORY</h2>
                <p className='brand-section-des'>MAKE TEETH WHITENING ACCESSIBLE</p>
                <div className='brand-section_content reverse'>
                    <div className='brand-section_content-description'>
                        <p>BIHAKU Whitening was born in 2015. Until then, it was common knowledge that teeth whitening have to be conducted at dental clinic. The situation gives people the impression that teeth whitening is prohibitively expensive and make people gave up. However, nowadays, our self-whitening service is introduced in many industries such as beauty salons, nail salons, and chiropractic clinics.</p>
                        <p>As of 2022, the member salon has exceeded 6000 stores. BIHAKU brand is spreading not only in domestic Japan but also expending all around the world.</p>
                    </div>
                    <div className='brand-section_content-img'>
                        <img alt='img' src={brand2} />
                    </div>
                </div>
            </section>
            <section className='brand-section mt-12'>
                <div className='brand-gradient'>
                    <img src={gradient} alt='gradient' />
                </div>
                <h2 className='brand-section-title'>SUSTAINABLE</h2>
                <p className='brand-section-des'>MAKE OUT MOTHER PLANET TO BE BEAUTIFUL AGAIN</p>
                <div className='brand-section_content'>
                    <div className='brand-section_content-description'>
                        <p>Part of BIHAKU products use biomass PET tubes instead of petroleum-based plastics.</p>
                        <p>This material use raw materials which derived from sugar cane which makes it possible to save fossil resources and reduce CO2 emissions during incineration.</p>
                    </div>
                    <div className='brand-section_content-img'>
                        <img alt='img' src={brand3} />
                    </div>
                </div>
            </section>
            <section className='brand-section mt-12'>
                <h2 className='brand-section-title'>1WHITE 1SMILE</h2>
                <p className='brand-section-des'>TO MAKE THE BEST SMILE OVER THE WORLD</p>
                <div className='brand-section_content reverse'>
                    <div className='brand-section_content-description'>
                        <p>" To make the best smile over the world." In order to realize this corporate philosophy, Charion donates part of the profit of our products to children over the world.</p>
                        <p>We are dedicated to creating a future full of beautiful smiles by holding tooth brushing seminar and providing food assistance to children whose suffering from poverty around the world. Charion will continue to provide supportive social activities to make a better world.</p>
                    </div>
                    <div className='brand-section_content-img'>
                        <img alt='img' src={brand4} />
                    </div>
                </div>
            </section>

        </div>
    </div>
}