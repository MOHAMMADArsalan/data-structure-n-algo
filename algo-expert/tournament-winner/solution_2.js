/**
    "competitions": [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"]
    ],
  "results": [0, 0, 1]

  there are two teams 1 - home team 0 - away team;

  time complexity: O(n) | O(k) space complexity where the k is number of teams.
 */

const HOME_TEAM_WON = 1;
const tournamentWinner = function (compititions, results) {
    const scores = {};
    let highestScore = 0;
    let bestTeam = '';
    for (let i = 0; i < compititions.length; i++) {
        const [homeTeam, awayTeam] = compititions[i];

        const winner = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam;

        if (scores[winner]) {
            scores[winner] += 3
        } else {
            scores[winner] = 3
        }

    }

    Object.keys(scores).forEach(team => {
        if(scores[team] > highestScore) {
            highestScore = scores[team];
            bestTeam = team;
        }
    })

    return bestTeam;
}

const compititions = [
    ["HTML", "Javascript"],
    ["Javascript", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0, 1];
console.log(tournamentWinner(compititions, results));