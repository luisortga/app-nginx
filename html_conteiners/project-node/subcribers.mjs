import { merge, of } from "rxjs"
import { map } from "rxjs/operators"

const obs1 = of("A").pipe(map(() => "Fuente 1"))
const obs2 = of("B").pipe(map(() => "Fuente 2"))

merge(obs1, obs2).subscribe(console.log)
