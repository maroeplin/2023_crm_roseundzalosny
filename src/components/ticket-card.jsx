import { Link } from 'react-router-dom'

import AvatarDisplay from '../components/avatar-display'
import StatusDisplay from '../components/status-display'
import PriorityDisplay from '../components/priority-display'
import ProgressDisplay from '../components/progress-display'
import DeleteBlock from './delete-block'

const TicketCard = ({color,ticket}) => {
    return (
        <div className="ticket-card">
           
            <Link to={`/ticket/${ticket.documentId}`} id="link">
                <div className='ticket-color' style={{backgroundColor: color}}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket.avatar}/>
                <StatusDisplay status={ticket.status}/>
                <PriorityDisplay priority={Number(ticket.priority)}/>
                <ProgressDisplay progress={ticket.progress}/>
            </Link>
                <DeleteBlock documentId={ticket.documentId}/>
            
        </div>
    )
}

export default TicketCard