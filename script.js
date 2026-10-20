const directory = {
    "W17": "guessWhoW17",
    "acti": "activity",
    "SB": "BdaySB",
    "AG": "BdayAG",
    "JM": "BdayJM",
    "AN": "BdayAN",
}

function reroute(destination) {
    console.log(`click ${destination}`)
    window.location.href = `${directory[destination]}/index_${destination}.html`;
}
