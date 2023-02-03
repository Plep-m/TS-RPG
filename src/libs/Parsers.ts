import fs from 'fs';
import Player from '../objects/Player';

// take the res/players.json file and parse it return array of Player
export default function PlayersParser(playersfile: string) {
  const playersArray: Player[] = [];
  // open players.json file
  const playersJson = fs.readFileSync(playersfile, 'utf8');
  // parse the json file
  const playersData = JSON.parse(playersJson);

  playersData.players.forEach((player: any) => {
    // create a new player object
    playersArray.push(
      new Player(
        player.name,
        player.level,
        player.hp,
        player.attack,
        player.magic_power,
        player.defense,
        player.magic_resistance,
        player.speed,
        player.inventory,
        player.gold,
        player.spells,
        player.is_alive,
        player.is_magical,
      ),
    );
  });
  return playersArray;
}
