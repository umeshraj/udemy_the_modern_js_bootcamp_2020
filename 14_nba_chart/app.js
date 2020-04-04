const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

const makeChart = games => {
  const ulParent = document.createElement("ul");
  for (game of games) {
    // let awayTeam = game.awayTeam.team;
    // let homeTeam = game.homeTeam.team;
    const { homeTeam, awayTeam } = game;
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    let scoreLine;

    if (aPoints > hPoints) {
      scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
      scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;

    const gameLi = document.createElement("li");
    const teamNames = `${aTeam} @ ${hTeam}`;
    gameLi.innerHTML = `${teamNames} ${scoreLine}`;

    gameLi.classList.add(warriors.isWinner ? "win" : "loss");

    // append li to ul
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

// prepend to body so it comes before the script tag
const chart1 = makeChart(warriorsGames);
document.body.prepend(chart1);
