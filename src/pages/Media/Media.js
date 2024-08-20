import './index.css'
import playBtn from '../../resources/img/play-media.png'
import VideoModal from '../../components/youtube-modal'
import { useState } from 'react'
const IMAGES = [
    'https://s3-alpha-sig.figma.com/img/eb95/127b/6e38c272eaf4db5d6e8bf6c9598978ca?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cK4NF4WW~rQ2R3dWsP6UtDnoyzBeVfp3k7mInRILUtxj~NeyNRpET3iKpkurRu9wNl6hJcMQm1jlb1RuYwC4BM0vrGMxso01ipuqsA7ef6VTchOy~2d6~AHJ4QSmeiTTWQ5TorZcvjmD-DWkbcaxV0rPjusi2WF~Pjg001sfJzDujKyQWSUPeZdRM6oXk019mbdTR7o4KDqKG78Gz~TgsP65jw~MEZmnCX0YDV083I2qRdIWs6nES~eFhO-RBsF2zC~xps1eeVGFTClopiGVEP-AYMe3U1g8h91dXgVAaJ3pQS19Arql3Z~TL8ZwWJDhZJsfcrkZsodsukI0mswTZw__',
    'https://s3-alpha-sig.figma.com/img/1cf0/999f/54e28271a9088836f57ed92cbb45942b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apI6xMHvukrclrltwpswe-~hfBl7UmX49uLI26d9QontJAIk9F0UHSFr7sebdbwDMyPF5PeM7x2WIQmovb2rPPFo4oLSEADvaOnuqBakkK2GcbUEeKQ4t54bg9Ld9uDSmuN3935xH4ZLOt6K78lKVcT47ju2~jRZTqxeSGviIQlPLKycVo7jkZk1hz5sYcaDXACDkI2ehWiwGVdWatl7INmMzTUxme7KIQiWrSlvFp4-JiE7T12O6pf7ZTmgyfnDvCtJdvh~pbzZPZ7KdzYTSYpZ-SUro8Rfy0C-6I6x5gMCWv7CH4Li1lWGP4GuaxhptloDdtYnGGXVWNGYiiaJAA__',
    'https://s3-alpha-sig.figma.com/img/1bb4/d32b/2f777a1965be011d11f450f6d09432b6?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXfIewoWTUAxDlLXVtUabY5xPVLCAMMP6v3sopQEYo41a~JdGyZlqM5sN-ZyycyCibxS9IQ7scfFosbHtH0Y1jqcoCpmPgnsdMObY16XYu7M7dmpM-to9AQ4UVN2zyHw6j19H~-39jp2tTeSSYEYE~Hw7mWCSxOQTBWXVxqkkao60sL6nUJaysgMqOqNW1QBGzhp9-UvA71S4VvqsQPQ7y4Bti5dmap~rLfKszuiw~aXuEcNTeW~I-3t1QJCgX2bjJAZHjm--n5C6Lw56BG9P9nns0amIHtZiuqNqy~OCwKReQosgbmUl~rqeW~RYk3i8mXcjgrI~jjfSqbFtMczxg__',
    'https://s3-alpha-sig.figma.com/img/53a0/ee8e/26040499a141d4cdda9cce6d98faa50d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM47mCqXoJ8ZRQ2tpUP1uCbf0kd1uZ-OASGkhMFleKMvrHnsiqKMHhYMIcVWD56xYtUw2pRoVGgqQv4L5VRQaHgWLhTa-1hYQ1tPIMWeX~QArvHPKPPQea2bU0RIoKpxuRmYrv6gzV5i2Jqs3bAK~U8CtTRfGdENDh6pnINtH1LrIjd-hvgtLTAJUNk~0Eytlcmdcfzlx~kpEYzrL0SaFIVtrXm9rkp79X75hjJ8Fi61u4UTUcpGZrR4dGmdMYovcKAbXubBG7Zh5yFlH0JDmiC6Lxqf3cjNd4DDoVY5pzudhmZ3gFQ~N3wjIafkpsntOg9V~92cfDwqvNPwbwakkw__',
    'https://s3-alpha-sig.figma.com/img/fc80/cb72/15fb931c44a065e7f1d1989fce388846?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdLXaKU0d1NneyB2bYaTYsMbFZexr7lOVBouBi5ptPpl4xxWUCI8kApaP0blK55kWAo6ztdsdEx9Ml0ai5tSGsS-eQVgJMZes-azO9eNfvihbMafRv~isdQJI-ddtrqGAeVEiSdkZLi4bdygwIpMjV2ibD6cawI~ZdL5iQBMPgPxZVdg99tc3yMKUpORznsGvyyYYV9a2~9Cbml7xw0jaoPP9U2MQeviwjqZOjR-2ULMRQy8pR3E5vE4EvIwD00LUWhPg9H96rqHgiyYnOleGI8GxIKuKcLkMv5xOW4DlhyQjGSY0UuRO6Ias4pErYOwzfMJHL~EYbGYSI2~3A1mSg__',
    'https://s3-alpha-sig.figma.com/img/f3fa/d9d8/132284a43bb3978f3c80bb7cf5e9940a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WmnmoEbIVhQoQx3G5P8lxwj9i3NcVYHkmBP5~n2iY8Kpoi4ekTzjUV614JibtFs1B0ixL3lVGzcjIg8LhFNNMdHlhLPEKY9aGiH~dBVUlS72WRtKRC0BgO~UcOqfHvC16ikTWVgDi5fykdc~D9r-wkVgnpSBQWy8BisSzdi-O4e5BnHEDt7GINYsVzcyP48WsYxiSnT8kmNiBpwvy1nbxZ2SUiRHU0-DMjWha0uynu5fU~vpUnudBJPSs2rDfJSdO9kZBQCE-PCIXhLTRAjlfS4yPASddT1KOQQlr7-f1NTfS7unfTQMYh3XqN9elVWuIeyIm5FIbTliTthhPJKIdA__'
]


export const Media = () => {
    const [open, setOpen] = useState(false)
    return <div className="media wrapper-container">
        <div className="container">
            <VideoModal
                modal={open}
                setModal={setOpen}
            />
            <h2 className="media_title">MEDIA</h2>
            <div className='media-list'>
                {IMAGES.map((url) => {
                    return <div key={url} className='media-item' onClick={() => setOpen(true)}>
                        <img className='media-play' src={playBtn} />
                        <img src={url} alt={url} className='media-img' />
                    </div>
                })}
            </div>
        </div>
    </div>
}