export interface Song {
    song_id:number,
    user_id:number,
    date:string,
    picture:string,
    audio:string,
    artist:string,
    description:string,
    downloads:number,
    likes:number,
    domain:string,
    album:string
}

export interface UploadSong {
    
}

export interface UploadSongResponse {
    response:boolean;
    data: {
        message:string;
        picture:string;
        audio:string;
        title: string;
        artist:string;
        album:string;
    }
}