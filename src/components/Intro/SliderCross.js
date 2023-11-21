import '../../assets/intro.css';

import intro1 from '../../static/intro1.png';
import intro2 from '../../static/intro2.png';
import intro3 from '../../static/intro3.png';
import intro4 from '../../static/intro4.png';
import intro5 from '../../static/intro5.png';

const size = "(max-width: 479px) 61vw, (max-width: 767px) 30vw, (max-width: 991px) 29vw, (max-width: 1279px) 291.0080261230469px, (max-width: 1439px) 23vw, (max-width: 1919px) 20vw, 291.0080261230469px";

export default function SliderCross() {
    return (
        <div className='body'>
            <div className="card-image-row rotate-right-up">
                <div className="card-image-wrapper">
                    {}
                    <div className="card-wrapper">
                        <img src={intro1} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro2} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro3} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro4} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro5} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                    </div>
                    <div className="card-wrapper">
                        <img src={intro1} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro2} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro3} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro4} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro5} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                    </div>
                    <div className="card-wrapper">
                        <img src={intro1} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro2} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro3} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro4} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                        <img src={intro5} loading="lazy" sizes={size}  alt="Creativy Template" className="card-image _01" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}