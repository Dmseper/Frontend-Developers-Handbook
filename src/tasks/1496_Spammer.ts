class Spammer {
  private _numberOfSubmits: number
  private _teamNames: Set<string>
  private _spammerTeamNames: Set<string>

  constructor(numberOfSubmits: number, teamNames: Array<string>) {

    let tempTeamNames = new Set<string>()
    let tempSpammerTeamNames = new Set<string>()

    teamNames.forEach((value) => {
      if (tempTeamNames.has(value)) {
        tempTeamNames.delete(value)
        tempSpammerTeamNames.add(value)
        return
      }
      tempTeamNames.add(value)
    })


    this._teamNames = tempTeamNames
    this._spammerTeamNames = tempSpammerTeamNames
    this._numberOfSubmits = numberOfSubmits
  }

  public getSpammers() {
    return this._spammerTeamNames
  }
}


const teams = ["naucoder", "iceman", "abikbaev", "abikbaev", "petr", "abikbaev", "abikbaev", "x", "abikbaev", "acrush", "x"]
const count = 11

const spam = new Spammer(count, teams)


console.log(spam.getSpammers())