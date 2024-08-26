import app from "./app.js";
import { conectDb } from "./db.js";

conectDb();
app.listen(3000);
console.log("server port a ", 3000);
