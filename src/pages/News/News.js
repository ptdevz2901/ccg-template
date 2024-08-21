import './index.css'
import gradientBg from '../../resources/img/GRADIENT.png'
import { Pagination } from '../../components/pagination'
import { NEWS_DATA } from '../../data/news'
export const News = () => {
    const firstNews = NEWS_DATA[0]
    return <div className="wrapper-container news">
        <div className='home_blog container'>
            <h2 className='home_blog-title'>NEWS</h2>
            <img src={gradientBg} className='news-gradient' />
            <div className='home_blog-card-wrapper'>
                <div className='home_blog-card-vertical news'>
                    <div className='home_blog-card-vertical--img'>
                        <img src={firstNews.imageUrl} alt={firstNews.title} />
                    </div>
                    <div className='home_blog-card-vertical--content'>
                        <div className='home_blog-card-vertical--tag'>
                            {firstNews.tag}
                        </div >
                        <p className='home_blog-card-vertical--title'>{firstNews.title}</p>
                        <p className='home_blog-card-vertical--sub'>{firstNews.description}</p>
                        <a href='#' className='home_blog-card-vertical--readmore'>Read more</a>
                    </div>
                </div>
                <div className='home_blog-card-list news'>
                    {[...new Array(4)].map((_, idx) => {
                        const realIdx = idx + 1
                        const news = NEWS_DATA[realIdx]
                        return <div className='home-blog-card-horizontal' key={realIdx}>
                            <div className='home-blog-card-horizontal--img'>
                                <div className='home_blog-card-horizontal--tag'>
                                    {news.tag}
                                </div >
                                <img src={news.imageUrl} alt={news.title} />
                            </div>
                            <div className='home-blog-card-horizontal--content' >
                                <p className='home_blog-card-horizontal--title'>{news.title}</p>
                                <p className='home_blog-card-horizontal--sub'>{news.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Pagination />
        </div>
    </div>
}