/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Lucid Dreams", "Sunflower", "Stressed Out", "The Way Life Geos"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgLinks = ["https://i.ytimg.com/vi/mzB1VGEGcSU/maxresdefault.jpg", "https://i.ytimg.com/vi/ZHVKlgfiYmU/maxresdefault.jpg", "https://i.kym-cdn.com/entries/icons/mobile/000/026/967/twentyonepilots-stressedout.jpg", "https://i.ytimg.com/vi/Vi2XaiKhgiU/maxresdefault.jpg"]
var artists = ["Juice WRLD", "Swae Lee and PostMalone", "Twenty One Pilots", "Lil Uzi Vert"]
var songLength = [359, 241, 345, 341]
var links = ["https://youtu.be/hHtv2XMZlKs", "https://youtu.be/ApXoWvfEYVU", "https://youtu.be/pXRviuL6vMY", "https://youtu.be/Vi2XaiKhgiU"]
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div



function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
