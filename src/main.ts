import PlayersParser from './libs/Parsers';

function main() {
  const players = PlayersParser('jsons/players.json');
  console.log(players);
  return 0;
}

main();
