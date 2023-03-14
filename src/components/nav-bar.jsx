import { useNavigate } from 'react-router-dom'

import logo from '../../src/images/fluent-emoji-flat_cheese-wedge.png'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'

const NavBar = () => {

    const navigate = useNavigate()
    return(
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>

            <div className='controls-container'>
                <div className='icon' onClick={() => navigate('/ticket')}><AiOutlinePlusCircle/></div>
                <div className='icon' onClick={() => navigate('/')}>
                    <BiArrowBack />
                </div>
            </div>
        </nav>
    )
}

export default NavBar