### Error Logging
___
#### `1.` Database Connection
> **Location:** `lib/db.ts`.
> <br />**Issues Description:** began by using `drizzle-orm/postgres-js`. Ran into type errors.
> <br />**Erraneous usage:**
> <br />&ensp;&ensp;&ensp;```import { drizzle } from "drizzle-orm/postgres-js";```
> <br />&ensp;&ensp;&ensp;```                                                  ```
> <br />&ensp;&ensp;&ensp;```                        ...                         ```
> <br />&ensp;&ensp;&ensp;```                                                  ```
> <br />&ensp;&ensp;&ensp;```export const db = drizzle(client, { schema });    ```
> <br />**Solution:** Migrated to `drizzle-orm/node-postgres`. 
> <br /> **Relevant information:** See [docs](https://orm.drizzle.team/docs/get-started-postgresql) (includes a list of differences).


#### `2.` Environment variables usage (type mismatch)
> **Location:** `db/init.ts`.
> <br />**Issue Description:** failed to specifically parse environment variable to Integer/Number type.
> <br />**Erraneous usage:**
> <br />&ensp;&ensp;&ensp;```const hash = await bcrypt.hash("admin@123", parseInt(process.env.SALT_ROUNDS || "10"));```
> <br />**Solution:** Added a specific parsing: ```const hash = awaiy bcrypt.hash("admin@123", process.env.SALT_ROUNDS || 10);``` 
> <br /> **Relevant information:** Sometimes environment variables can retain their type (int) however it can also be parsed as a string, requiring explicit casting.


#### `3.` Invalid cookie fetching
> **Location:** `app/app/page.tsx`.
> <br />**Issue Description:** Incorrectly fetching the cookie from the database - method chosen only works on server components and not on the client side.
> <br />**Erroneous usage:** Additions in [Commit 517af21](https://github.com/tactordev/nea/commit/517af21869ceb49ddb0cad2cacec34555d3d46bf).
> <br /> **Solution:** unsolved, still working on it.
> <br /> **Relevant information:** N/A.
---


### Format
#### `No.` Title
> **Location:** `path`.
> <br />**Issue Description:** Lorem ipsum dolor sit amet, consectetur adipiscing
> <br />**Erraneous usage:**
> <br />&ensp;&ensp;&ensp;```Lorem ipsum dolor sit amet, consectetur adipiscing```
> <br />&ensp;&ensp;&ensp;```                                                  ```
> <br />&ensp;&ensp;&ensp;```                        ...                         ```
> <br />&ensp;&ensp;&ensp;```                                                  ```
> <br />&ensp;&ensp;&ensp;```Lorem ipsum dolor sit amet, consectetur adipiscing```
> <br />**Solution:** Lorem ipsum dolor sit amet, consectetur adipiscing`. 
> <br /> **Relevant information:** Lorem ipsum dolor sit amet, consectetur adipiscing