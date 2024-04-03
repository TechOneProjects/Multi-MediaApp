export interface Album {
    basic_information : {
        artists : [{name: string}],
        cover_image: string,
        genres: [],
        title: string,
        year: number,
        id: number
    }
}

export interface DBAlbum {
    artist: string,
    cover_image: string,
    title: string,
    year: number,
    genres: string[],
    id: number
}