// init

export class Subscribers {
  constructor(actions, final) {
    /* */
    this.actions = actions
    this.final = final
  }

  toString() {
    return ""
  }
}
// pending
const sub = new Subscribers("Observer delay", 16)
