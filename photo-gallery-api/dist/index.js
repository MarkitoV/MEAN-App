"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
// app.listen(3000, () => {
//   console.log('Server on port', 3000);
// });
async function main() {
    database_1.startConnection();
    await app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
}
main();
