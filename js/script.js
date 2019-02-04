/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Lucid Dreams", "Sunflower", "Stressed Out", "The Way Life Geos"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgLinks = ["https://i.ytimg.com/vi/mzB1VGEGcSU/maxresdefault.jpg", "https://i.ytimg.com/vi/ZHVKlgfiYmU/maxresdefault.jpg", "https://i.kym-cdn.com/entries/icons/mobile/000/026/967/twentyonepilots-stressedout.jpg", "https://i.ytimg.com/vi/Vi2XaiKhgiU/maxresdefault.jpg"]
var artists = ["Juice WRLD", "Swae Lee and PostMalone", "Twenty One Pilots", "Lil Uzi Vert"]
var songLength = ["3:59", "2:41", "3:45", "3:41"]
var links = ["https://youtu.be/hHtv2XMZlKs", "https://youtu.be/ApXoWvfEYVU", "https://youtu.be/pXRviuL6vMY", "https://youtu.be/Vi2XaiKhgiU"]
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div



function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty()
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    songs.push($("#song").val());
    artists.push($("#artist").val());
    songLength.push($("#length").val());
    imgLinks.push($("#image").val());
    links.push($("#link").val());
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    
});








function displaySongInfo(){
songs.forEach(function(song){
        $("#songs").append("<p>" + song + "</p>");
    });
    
imgLinks.forEach(function(imglink){
    $("#images").append("<img src='" + imglink +"'>");
    });
    
artists.forEach(function(artist){
      $("#artists").append("<p>" + artist + "</p>");
    });
    
songLength.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
    });
    
links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Click Me </a>");    
});
}

displaySongInfo().show();