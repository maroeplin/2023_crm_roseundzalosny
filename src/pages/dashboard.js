import TicketCard from "../components/ticket-card";

const Dashboard = () => {
  const tickets = [
    {
      category: "dbusiness",
      color: "red",
      title: "Eine Aufgabe für Marcel",
      owner: "Marcel R",
      avatar: "name",
      priority: 5,
      progress: 40,
      description: "Mach dies oder jenes!",
      timestamp: "2023-1403",
      status: "pending"
    },

    {
      category: "C/O Vienna",
      color: "black",
      title: "Datenbankmigration und so",
      owner: "Leon Z.",
      avatar: "name",
      priority: 2,
      progress: 100,
      description: "Ne Menge Peng ung Pow!",
      timestamp: "2023-1403",
      status: "done"
    },
  ];

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)',
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  
  return (
    <div className="dashboard">
      <h1>Projekte</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => {
            return (
              <div key={categoryIndex}>
                <h3>{uniqueCategory}</h3>
                {tickets.filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                        <TicketCard
                            id={_index}
                            color={colors[categoryIndex] || colors[0]}
                            ticket={filteredTicket}
                        />
                    ))
                }
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
