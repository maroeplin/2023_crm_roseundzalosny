import TicketCard from '../components/ticket-card'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Projekte</h1>
            <div className="ticket-container">
                <TicketCard />
            </div>
        </div>
    )
}

export default Dashboard