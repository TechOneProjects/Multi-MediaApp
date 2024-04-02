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