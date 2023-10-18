import React from "react";
import "./Branding.css";
import avatar from './avatar.jpg'
import appleicon from './appleicon.png'
import mac from './mac.jpg'
import iphone from './iphone.jpg'
import ipad from './ipad.jpg'
import airpod from './airpod.jpg'
import watch from './watch.jpg'
import appletv from './appletv.jpg'
import acc from './acc.jpg'
import { StepBackwardOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
export const Branding= () =>{
    return(
        <div> 
                {/* <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iphone</li>
                    <li>Watch</li>
                    <li>Airpods</li>
                    <li>TV & Home</li>
                    <li>Entertainment</li>
                    <li>Accessories</li>
                </ul> */}
                <div className="head">
                    <p className="line1">Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards.</p> 
                    <p className="line2">Plus No Cost EMI from most leading banks.</p>
                    <p ><Link className="line3" to='/seeoffers'>see offers  </Link></p>
                </div>
         <div className="center">
            <div className="left">
                
                <p className="br"><span  style={{color:'black'}} className="bright">Store.</span>Brighten the season with products you love.</p>
            </div>
            <div className="right">
                <div className="help">
                    
                    <img className="icon1" src={avatar} alt='avatar'/>
                    
                    <div className="rtext1">
                        <p className="htext">Need Shopping Help?</p>
                       <p className="link"><Link to='/askhelp'>Ask help</Link> </p>
                    </div>
                </div>
                <div className="visit">
                <img className="icon2" src={appleicon} alt='icon'/>
                
                    <div className="vtext">
                        <p className="ftext">Visit an apple store</p>
                       <p className="link"><Link to='/Find one near you'>Find one near you > </Link> </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="photos">
                <div className="mac">
                    <div className="img"> <Link to='/'><img src={ mac } alt='mac'/></Link> </div>
                    <div className="txt"><p>Mac</p></div>
                </div>
                <div className="phone">
                    <div className="img"> <Link to='/'><img src={ iphone } alt='iphone'/></Link> </div>
                    <div className="txt"><p>iPhone</p></div>
                </div>
                <div className="ipad">
                    <div className="img"> <Link to='/'><img src={ ipad } alt='iPad'/></Link> </div>
                    <div className="txt"><p>iPad</p></div>
                </div>
                <div className="airpod">
                    <div className="img"> <Link to='/'><img src={ airpod } alt='airpod'/></Link> </div>
                    <div className="txt"><p>Airpods</p></div>
                </div>
                <div className="watch">
                    <div className="img"> <Link to='/'><img src={ watch } alt='watch'/></Link> </div>
                    <div className="txt"><p>Watch</p></div>
                </div>
                <div className="tv">
                    <div className="img"> <Link to='/'><img src={ appletv } alt='TV'/></Link> </div>
                    <div className="txt"><p>apple TV</p></div>
                </div>
                <div className="acc">
                    <div className="img"> <Link to='/'><img src={ acc } alt='accessories'/></Link> </div>
                    <div className="txt"><p>Accessories</p></div>
                </div>
            </div>
         </div>
    )
}