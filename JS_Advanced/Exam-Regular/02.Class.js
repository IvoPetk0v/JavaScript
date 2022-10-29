class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let playersName = new Set();
        footballPlayers.forEach(el => {
            let [namePlayer, age, playerValue] = el.split("/");
            if (!this.invitedPlayers.find(e => e.name === namePlayer)) {
                let currPlayer = { "name": namePlayer, "age": Number(age), "playerValue": Number(playerValue) };
                this.invitedPlayers.push(currPlayer);
                playersName.add(namePlayer);
            } else {
                storedPlayer = this.invitedPlayers.find(e => e.name === namePlayer);
                if (storedPlayer.playerValue < playerValue) {
                    storedPlayer.playerValue = playerValue;
                }
            };
        });
        return `You successfully invite ${Array.from(playersName).join(", ")}.`
    }
    signContract(selectedPlayer) {

        let [namePlayer, playerOffer] = selectedPlayer.split("/");
        if (!this.invitedPlayers.find(e => e.name === namePlayer)) {
            throw new Error(`${namePlayer} is not invited to the selection list!`)
        }
        let bookedPlayer = this.invitedPlayers.find(e => e.name === namePlayer);
        if (bookedPlayer.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${namePlayer}, ${bookedPlayer.playerValue - playerOffer} million more are needed to sign the contract!`)
        } else {
            let result = `Congratulations! You sign a contract with ${namePlayer} for ${playerOffer} million dollars.`
            bookedPlayer.playerValue = "Bought";
            return result;
        }
    }
    ageLimit(name, age) {
        if (!this.invitedPlayers.find(e => e.name === name)) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let bookedPlayer = this.invitedPlayers.find(e => e.name === name);
        if (bookedPlayer.age < age) {
            let differenceAge = age - bookedPlayer.age;
            if (differenceAge >= 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!"`
            } else {
                return `${name} will sign a contract for ${differenceAge} years with ${this.clubName} in ${this.country}!"`
            }
        }
        return `${name} is above age limit!`;
    }
    transferWindowResult() {
        let firstRow = "Players list:\n";
        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        let addOnStr = [];
        sorted.forEach(p => {
            addOnStr.push(`Player ${p.name}-${p.playerValue}`)
        });
        return firstRow + addOnStr.join("\n");
    }
}



let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));

