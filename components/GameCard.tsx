import { SteamGame } from "../types"

type Props = {
    game: SteamGame
}

export default function GameCard({ game }: Props) {
    return (
        <a href={`${process.env.NEXT_PUBLIC_STEAM_STORE_URL}/${game.appid}`}>
            <div className="rounded-md border shadow-md bg-white p-2 flex items-center gap-x-2">
                <img className="rounded-sm" src={game.img_icon_url} width="32" height="32" />
                <div>
                    <div className="text-sm text-slate-700 font-semibold leading-tightest">
                        { game.name }
                    </div>
                    <div className="text-xs text-slate-500">
                        { Math.round(game.playtime_forever / 60) } hours
                    </div>
                </div>
            </div>
        </a>
    )
}