export default class TeamGenerator {
  constructor(team){
    this.team = team
  }
  
  *[Symbol.iterator]() {
    for (let i in this.team){
      yield this.team[i];
    }
  }
}