const mysql = require("mysql")
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "alterPassword",
    database: "twoTable_db"
})

connection.connect((err) => {
    if (err) throw err;
    console.log("database connected...")
    start();
})

function start() {
    inquirer.prompt({

        message: "What would you like to do ?",
        name: "userChoice",
        type: "list",
        choices: [
            "Artist",
            "Songs",
            "Exit"
        ]
    }).then((answer) => {
        console.log(answer)
        if (answer.userChoice === "Artist") {
            findByArtist()
        }
        else if (answer.userChoice === "Songs") {
            findBySongs()
        }
        else {
            connection.end()
        }

    })
}

//Find by Artist
function findByArtist() {

    inquirer.prompt({

        message: "Type artist name",
        name: "artistName",
        type: "input"

    }).then((artistAnswer) => {
        console.log(artistAnswer)

        var sql = "SELECT topAlbum.year, albumPosition, topAlbum.artist, songs, topAlbum.album FROM topAlbum INNER JOIN topSongs ON topAlbum.artist = topSongs.artist AND topAlbum.year = topSongs.year WHERE topAlbum.artist = ?  ORDER BY topAlbum.artist,topAlbum.year  ASC";
        connection.query(sql, [artistAnswer.artistName], (err, response) => {
            if (err) throw err;
           // console.log(response);

            for(i=0;i<response.length;i++){
                console.log(
                "Year: "+ response[i].year + 
                "|| Album Position: "+ response[i].albumPosition +
                "|| Artist: "+ response[i].artist +
                "|| Song: "+ response[i].songs +
                "|| Album: "+ response[i].album)
            }

        })
    })
}