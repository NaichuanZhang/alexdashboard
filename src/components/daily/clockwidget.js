import React from 'react';
import { Clock } from '@bit/grommet.grommet.clock';


//time-zone aware clock 

const ClockWidget = () => {

  return(
    <div className='card'>
      <div className="card-content">
        <Clock size='large' type='digital' margin='none' />
      </div>
    </div> 
  )
}

export default ClockWidget;