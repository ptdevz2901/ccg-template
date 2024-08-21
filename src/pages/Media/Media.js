import './index.css'
import playBtn from '../../resources/img/play-media.png'
import VideoModal from '../../components/youtube-modal'
import { useState } from 'react'
import { MEDIA_DATA } from '../../data/media'
import { Pagination } from '../../components/pagination'



export const Media = () => {
    const [open, setOpen] = useState(false)
    const [videoSelected, setVideoSelected] = useState('')
    return <div className="media wrapper-container">
        <div className="container">
            <VideoModal
                videoSelected={videoSelected}
                setVideoSelected={setVideoSelected}
                modal={open}
                setModal={setOpen}
            />
            <h2 className="media_title">MEDIA</h2>
            <div className='media-list'>
                {MEDIA_DATA.map((media) => {
                    return <div key={media.imageUrl} className='media-item' onClick={() => {
                        setOpen(true)
                        setVideoSelected(media.videoUrl)
                    }}>
                        <img className='media-play' src={playBtn} />
                        <img src={media.imageUrl} alt={media.imageUrl} className='media-img' />
                    </div>
                })}
            </div>
            <div className='media-pagination'>
                <Pagination />
            </div>
        </div>
    </div>
}