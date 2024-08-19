import './index.css'
import arrowrightSvg from '../../resources/svg/arrow-right.svg'
export const BaseButton = ({ title, onClick }) => {
    return <button className="base_button" onClick={onClick}>
        {title}
        <img src={arrowrightSvg} alt='svg' />
    </button>
}