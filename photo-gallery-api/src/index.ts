import app from './app';
import { startConnection } from './database';

// app.listen(3000, () => {
//   console.log('Server on port', 3000);
// });

async function main() {
  startConnection();
  await app.listen(app.get('port'));
  console.log('Server on port', app.get('port'));
}

main();
