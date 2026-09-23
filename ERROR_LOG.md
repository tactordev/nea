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
> <b r/>**Issue Description:** failed to specifically parse environment variable to Integer/Number type.
> <br />**Erraneous usage:**
> <br />&ensp;&ensp;&ensp;```const hash = await bcrypt.hash("admin@123", parseInt(process.env.SALT_ROUNDS || "10"));```
> <br />**Solution:** Added a specific parsing: ```const hash = awaiy bcrypt.hash("admin@123", process.env.SALT_ROUNDS || 10);``` 
> <br /> **Relevant information:** Sometimes environment variables can retain their type (int) however it can also be parsed as a string, requiring explicit casting.

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