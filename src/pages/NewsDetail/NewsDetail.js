import { useNavigate, useParams } from 'react-router-dom'
import { NEWS_DATA } from '../../data/news'
import './index.css'

export const NewsDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const news = NEWS_DATA.find((v) => v.id.toString() === id)
    return <div className='wrapper-container'>
        <div className='container'>
            <div className="news-detail">
                <div className='news-detail-content'>
                    <h3 className='news-title'>{news?.title}</h3>
                    <span className='news-tag'>{news?.tag}</span>
                    <h3 className='news-createAt'>{news?.createdAt}</h3>
                    <div dangerouslySetInnerHTML={{ __html: news?.html }} />
                </div>
                <div className='news-detail-lastest'>
                    <h4 className='news-detail-lastest--title'>LASTEST POST</h4>
                    {NEWS_DATA.map((news) => {
                        return news.id.toString() !== id && <div
                            onClick={() => {
                                navigate(`/news-detail/${news.id}`)
                            }}
                            className='news-detail-card'
                            key={news.id}
                        >
                            <div className='news-detail-info'>
                                <div className='news-detail-infoImg'>
                                    <img src={news?.imageUrl} alt={news?.title} />
                                </div>
                                <div className='news-detail-infoTitle'>{news?.title}
                                    <div className='news-detail-createdAt'>{news?.createdAt}</div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}