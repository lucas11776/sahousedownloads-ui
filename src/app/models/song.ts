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
    picture:File;
    audio:File;
    title: string;
    artist:string;
    album:number;
}
