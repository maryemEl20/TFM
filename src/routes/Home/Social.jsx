import React from 'react'
import './css/social.css'
import CountUp from 'react-countup';

function Social() {

  return (

    <section id="statistic" class="statistic-section one-page-section">
        <div className="container">
            <div className='social-blog' >
            <h2 className="timer count-title count-number">+
            <CountUp
              start={0}
              end={50}
              duration={3}
              separator=" "
              decimals={0}
              decimal=","
              />    
            </h2>
            <p className="stats-text">PROJETS <br/> ACCOMPAGNÉ</p>
            </div>
            <div className='social-blog' >
            <h2 className="timer count-title count-number">+
            <CountUp
              start={0}
              end={70}
              duration={3}/> 
             </h2>
            <p className="stats-text">CLIENTS</p>
            </div>
            <div className='social-blog' >
            <h2 className="timer count-title count-number">+
            <CountUp
              start={0}
              end={11}
              duration={3}/> 
            </h2>
            <p className="stats-text">PROJETS <br/> D’INVESTISSEMENTS <br/> +150M Mad</p>    
            </div>
        </div>
    </section>

  )
}

export default Social