import './index.css'

import sdgs1 from '../../resources/img/SDGs_PC_01.jpg'
import sdgs2 from '../../resources/img/SDGs_PC_02.jpg'
import sdgs3 from '../../resources/img/SDGs_PC_03.jpg'
import sdgs4 from '../../resources/img/SDGs_PC_04.jpg'
import sdgs5 from '../../resources/img/SDGs_PC_05.jpg'
import sdgs6 from '../../resources/img/SDGs_PC_06.jpg'
import sdgs7 from '../../resources/img/SDGs_PC_07.jpg'
import sdgs8 from '../../resources/img/SDGs_PC_08.jpg'
export const Sdgs = () => {
    return <div className="wrapper-container sdgs">
        <div className="container">
            <div className='sdgs-wrapper'>
                <img alt="sdgs1" src={sdgs1} />
                <img alt="sdgs2" src={sdgs2} />
                <img alt="sdgs3" src={sdgs3} />
                <img alt="sdgs4" src={sdgs4} />
                <img alt="sdgs5" src={sdgs5} />
                <img alt="sdgs6" src={sdgs6} />
                <img alt="sdgs7" src={sdgs7} />
                <img alt="sdgs8" src={sdgs8} />
            </div>
        </div>
    </div>
}