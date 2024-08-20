import './index.css'
import gradientBg from '../../resources/img/GRADIENT.png'
import { Pagination } from '../../components/pagination'
export const News = () => {
    return <div className="wrapper-container news">
        <div className='home_blog container'>
            <h2 className='home_blog-title'>NEWS</h2>
            <img src={gradientBg} className='news-gradient' />
            <div className='home_blog-card-wrapper'>
                <div className='home_blog-card-vertical news'>
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
                <div className='home_blog-card-list news'>
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
            <Pagination />
        </div>
    </div>
}