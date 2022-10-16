function solve(ticketData, property) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticketList = [];
    ticketData.forEach(ticketInfo => {
        let [destination, price, status] = ticketInfo.split("|");
        let currTicket = new Ticket(destination, price, status);
        ticketList.push(currTicket);
    });
    if (property === 'price') {
        return ticketList.sort((a, b) => a[property] - (b[property]));
    } else {
        return ticketList.sort((a, b) => a[property].localeCompare(b[property]));
    }
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
);