//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(ar_name:string, al_name:string, no_tracks?:number): {artist:string, album:string, number_of_tracks?:number} { 
    return {
        artist: ar_name,
        album:al_name,
        number_of_tracks: no_tracks
    }
};

let album_A = make_album("21 Savage", "I am > I was");
let album_B = make_album("The Weeknd", "After hours");
let album_C = make_album("Bruno mars", "Hoonigans", 20);


console.log("Album 1: ", album_A); 
console.log("Album 2: ", album_B); 
console.log("Album 3: ", album_C); 