import { from, merge, of } from "rxjs"
import { filter, map, reduce, tap } from "rxjs/operators"

const obs1 = of("A").pipe(map(() => "Fuente 1"))
const obs2 = of("B").pipe(map(() => "Fuente 2"))

merge(obs1, obs2).subscribe(console.log)

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .pipe(
    filter((x) => x % 2 === 0),
    tap((x) => console.log("Después del filtro:", x)),
    map((x) => x * x),
    reduce((acc, x) => acc + x, 0),
  )
  .subscribe((result) => console.log("Resultado final:", result))
