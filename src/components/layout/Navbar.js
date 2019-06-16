import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sampleAction } from '../../store/acitons/sampleAction'
import ClockWidget from '../daily/clockwidget';
import logo from '../../logo.png';





const Navbar = (props) => {
    console.log(props);
    const { sampleAction } = props;
    const handleClick = (action) => {
        sampleAction('haha')
    }
    return (
        
        <nav className="nav-wrapper yellow lighten-3 ">
            <div className="nav-wrapper">
                <Link to='/' className='brand-logo left' onClick={ handleClick }><img className='responsive-img' src={ logo } width='60px' style={{ padding: '3px' }} /></Link>
            </div>
           
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        abc: 'hah'
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sampleAction: (msg) => dispatch(sampleAction(msg))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);




