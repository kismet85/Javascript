let canditateList = [];

function mainProgram() {
    const canditates = parseInt(prompt("Number of canditates:"))

    for (let i = 1; i < canditates + 1; i++) {
        let canditateName = prompt("Name of canditate " + i + ":");
        let canditate = {name: canditateName, votes: 0}
        canditateList.push(canditate);
    }
    let numberOfVoters = parseInt(prompt("Number of voters:"))
    voters(numberOfVoters);
    let winner= "",mostVotes= 0;
    for (let canditate of canditateList)
    {
         if(canditate.votes > mostVotes)
        {
            mostVotes = canditate.votes;
            winner = canditate.name;
        }
    }
    let p = document.getElementById("code");
    p.innerHTML += '<p>' + 'The winner is ' + winner + ' with  ' + mostVotes + ' votes.' + '</p>';
    p.innerHTML += '<p>' + 'results:' + '</p>';
    for (let canditate of canditateList) {
        p.innerHTML += '<p>' + canditate.name + ": " + canditate.votes + ' votes' + '</p>';
    }
}
function voters(voters) {
    for (let voter = 0; voter < voters; voter++) {
        let vote = prompt("Enter vote for:")
        if (vote === null) {
            canditate.votes += 0;
        } else {
            for (let canditate of canditateList) {
                if (vote === canditate.name) {
                    canditate.votes += 1;
                }
            }
        }
    }
}
mainProgram();