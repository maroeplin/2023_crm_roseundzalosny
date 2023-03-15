
import {AiOutlineDelete} from 'react-icons/ai'

const iconStyle = {color: 'white', fontSize: '1.25rem'}

const DeleteBlock = () => {

    const deleteTicket = () => {
        console.log('deleted');
    }

    return (
        <div className="delete-block">
           <div className="delete-icon"onClick={deleteTicket}>
                <AiOutlineDelete style={iconStyle}/>
           </div>
        </div>
    )
}

export default DeleteBlock