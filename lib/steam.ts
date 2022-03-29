import axios from "axios";
import { SteamApiResponse, SteamGame } from "../types";

export const getOwnedGames = () => { 
    return new Promise<{ count: number, games: SteamGame[] }>(async (resolve, reject) => {
        try {
            const response = await axios.get(`${process.env.STEAM_API_URL}?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&include_appinfo=true&format=json`);
            const data = response.data as SteamApiResponse;

            let games: SteamGame[] = [];
            data.response.games.forEach(game => {
                let newGame = {...game};

                if (!game.img_icon_url || game.img_icon_url == "")
                    return;

                newGame.img_icon_url = `${process.env.STEAM_IMG_API_URL}/${game.appid}/${game.img_icon_url}.jpg`;
                games.push(newGame);
            });

            resolve({ count: data.response.game_count, games });
        } catch (err) {
            reject(new Error("Failed to contact Steam API!"));
        }
    });
}

export const getTopGames = (count = 8) => {
    return new Promise<SteamGame[]>(async (resolve, reject) => {
        try {
            const { count: gameCount, games } = await getOwnedGames();
            games.sort((a, b) => (a.playtime_forever - b.playtime_forever > 0 ? -1 : 1));
            resolve(games.splice(0, count));
        } catch (err) {
            reject(err as Error);
        }
    })
}