import './template.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationArrow, faCloudSunRain, faEllipsis, faDroplet, faWind, faCloudRain,faSun, faTemperatureHalf, faUmbrella} from '@fortawesome/free-solid-svg-icons'
import pro from './pro.jpg';
import Graph from './Graph';
export function Temp(){
    return(
        <div>
            <div className="img_bg">
            <div>
                <div className="flex1">
                    
                <p className="para1"><FontAwesomeIcon icon={faLocationArrow} /> New York, USA</p>
                    <p className="para_time1"><FontAwesomeIcon icon={faCloudSunRain} /> 07:19</p>
                </div>
                <div className="flex2">
                    <p className="para2">Today 30 Sept</p>
                    <p className="para_time2"><FontAwesomeIcon icon={faCloudSunRain} /> 19:32</p>
                </div>
                <div className="flex4">
                    <p className="arrow1">&#60;</p>
                    <h1 className="head1">27°</h1>
                    <p className="arrow2">&#62;</p>
                </div>
                <p className='content2'><FontAwesomeIcon icon={faSun}/> Sunny</p>
                
            </div>
            <div className="div1">
                <table className="table">
                    <tr>
                        <td><h4>Welcome back isabella!</h4></td>
                        <td rowspan="2" className="table_left"> <FontAwesomeIcon icon={faEllipsis} className='ellipsis' /><img src={pro} alt="blank" className='profile' /></td>
                    </tr>
                    <tr>
                        <td><p>Check out today's weather information</p></td>
                    </tr>
                </table>
                <div className="container1">
                    <div className="flex3">
                         <p>Upcoming hours</p>
                         <div className='flex3_div1'>Rain precipitation &#8744;</div>
                         <div className='flex3_div2'>Next days &#62;</div>
                    </div>
                    <div className='flex5'>
                        <div><Graph/></div>
                        <div className='flex5_con'>
                        <FontAwesomeIcon icon={faDroplet} className='flex5_icon' />
                        <FontAwesomeIcon icon={faWind} className='flex5_icon' />
                        <FontAwesomeIcon icon={faCloudRain} className='flex5_icon' />
                        <FontAwesomeIcon icon={faSun} className='flex5_icon' />
                        <FontAwesomeIcon icon={faTemperatureHalf} className='flex5_icon' />
                        <FontAwesomeIcon icon={faUmbrella} className='flex5_icon' />
                        </div>
                    </div>
                    
                </div>
                <h4 className="content">More details of today's weather</h4>

                <div className="card_div1">
                    <div className="card1">
                        <div className="card1_flex1">
                            <p>Humidity</p>
                            <p><FontAwesomeIcon icon={faDroplet} className='icon'/></p>
                        </div>
                        <div className='card1_flex2'>
                            <h3>82%</h3>
                            <p className='bad'>bad</p>
                        </div>
                        <div className='card1_flex3'>
                            <p className='flex3_para'>good</p>
                            <p className='flex3_para'>normal</p>
                            <p className='flex3_para'>bad</p>
                        </div>
                        <div className='card1_flex4'>
                            <progress id='file' value={100} max='100' className='card1_progress1'></progress>
                            <progress id='file' value={100} max='100' className='card1_progress2'></progress>
                            <progress id='file' value={20} max='100' className='card1_progress3'></progress>
                            
                        </div>


                    </div>
                    <div className="card2">
                        <div className='card2_flex1'>
                            <p>Wind</p>
                            <p className='icon2'><FontAwesomeIcon icon={faWind} /></p>
                        </div>
                        <div className='card2_flex2'>
                          <h3>8 km/h</h3>
                        </div>
                        <div className='card2_flex3'>
                            <p>0</p>
                            <p>5</p>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                        </div>
                        <div className='card2_flex4'>
                          <progress value={100} max='100' className='pro1'></progress>
                          <progress value={100} max='100' className='pro2'></progress>
                          <progress value={0} max='100' className='pro3'></progress>
                          <progress value={0} max='100' className='pro4'></progress>
                          <progress value={0} max='100' className='pro5'></progress>

                        </div>
                    </div>
                    <div className="card3">
                        <div className="card3_flex1">
                            <p>precipitation</p>
                            <p><FontAwesomeIcon icon={faCloudRain} className='icon3'/></p>
                        </div>
                        <div className='card3_flex2'>
                            <h3>1.4 cm</h3>
                        </div>
                        <div className='card3_flex3'>
                            <p>0</p>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                            <p>50</p>
                            <p>60</p>
                            <p>70</p>
                            <p>80</p>
                            <p>90</p>
                        </div>
                        <div className='card3_flex4'>
                            <progress value={100} max='100'></progress>
                            <progress value={80} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                        </div>
                    </div>
                </div>
                <div className="card_div2">  
                    <div className="card4">
                        <div className="card4_flex1">
                            <p>UV index</p>
                            <p><FontAwesomeIcon icon={faSun} className='icon'/></p>
                        </div>
                        <div className='card4_flex2'>
                            <h3>4</h3>
                            <p className='bad'>medium</p>
                        </div>
                        <div className='card4_flex3'>
                            <p>0-2</p>
                            <p>3-5</p>
                            <p>6-7</p>
                            <p>8-10</p>
                            <p>11+</p>
                        </div>
                        <div className='card4_flex4'>
                            <progress value={100} max='100'></progress>
                            <progress value={50} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                            <progress value={0} max='100'></progress>
                        </div>
                    
                    </div>
                    <div className="card5">
                        <div className="card5_flex1">
                            <p>Feel like</p>
                            <p><FontAwesomeIcon icon={faTemperatureHalf} className='icon' /></p>
                        </div>
                        <div className='card5_flex2'>
                            <h3>27°</h3>
                        </div>
                        <div className='card5_flex3'>
                            <p>0°</p>
                            <p className='card5_para'>25°</p>
                            <p className='card5_para'>50°</p>
                        </div>
                        <div className='card5_progress'>
                            <progress value={65} max='100'></progress>
                        </div>
                    </div>
                    <div className="card6">
                        <div className="card6_flex1">
                            <p>Chance of rain</p>
                            <p><FontAwesomeIcon icon={faUmbrella} className='icon6'/></p>
                        </div>
                        <div className='card6_flex2'>
                            <h3>42%</h3>
                        </div>
                        <div className='card6_flex3'>
                            <p>0%</p>
                            <p>25%</p>
                            <p>50%</p>
                            <p>75%</p>
                            <p>100%</p>
                        </div>
                        <progress value={40} max='100' className='card6_progress'></progress>

                    </div>
                </div>  
                

            </div>
         </div>
   
        </div>
    )
}