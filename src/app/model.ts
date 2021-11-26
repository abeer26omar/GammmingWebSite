export interface Game{
    id: number;
    background_image: string;  
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description_raw: string;
    metacritic: number;
    rating: number;
    twitch_count: number;
    reviews_count: number;
    game_series_count: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Ratings>;
    screenShots: Array<Screenshots>;
    trailers: Array<Trailers>;
}

export interface APIResponse<T>{
    count: number;
    results: Array<T>;
}

interface Genre{
    name: string;
}

interface ParentPlatform{
    platform: {
        name: string;
    }
}

interface Publishers{
    name: string;
}

interface Ratings{
    id: number;
    count: number;
    title: string;
}

interface Screenshots{
    id: number;
    image: string;
}

interface Trailers{
    data: {
        max: string;
    }
}

