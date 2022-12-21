import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Homer and Bart",
      location: "Simpsons residence",
      issue: "ladder broken",
    },
    {
      names: "Lisa and Marge",
      location: "Art n Stuff",
      issue: "out of easels",
    },
    {
      names: "Patty and Selma",
      location: "Springfield Elementary",
      issue: "Bart in trouble",
    },
  ];
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
