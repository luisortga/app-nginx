import { from } from "rxjs"
import { map, catchError } from "rxjs/operators"
import fetch from "node-fetch"

function getUser(id) {
  return from(
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json(),
    ),
  ).pipe(
    map((user) => ({ id: user.id, name: user.name, email: user.email })),
    catchError((err) => {
      console.error("Error fetching user", err)
      return []
    }),
  )
}

getUser(1).subscribe((user) => console.log("Usuario:", user))
