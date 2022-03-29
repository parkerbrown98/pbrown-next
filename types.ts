import { Moment } from "moment";

export interface SteamGame {
    appid: number;
    name: string;
    playtime_forever: number;
    img_icon_url: string;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
}

export interface SteamApiResponse {
    response: {
        game_count: number;
        games: SteamGame[];
    }
}

export interface BlogPost {
    matter: BlogFrontMatter;
    content: string;
    readTime: number;
}

export interface BlogFrontMatter {
    title: string;
    date: string;
    slug: string;
    cover?: string;
}