document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const currentSong = document.getElementById("current-song");
    const playButton = document.getElementById("play-button");
    const backButton = document.getElementById("back-button");
    const skipButton = document.getElementById("skip-button");
    const songImage = document.querySelector("#music-player img");
    const songLinks = document.querySelectorAll("#playlist tbody tr .title a");

    const songs = [
        {
            title: "Lan Man",
            album: "Lan Man",
            dateAdded: "26 Jul 2023",
            duration: "3:36",
            image: "image/LanMan.jpg",
            audio: "audio/LanMan.mp3"
        },
        {
            title: "À lôi",
            album: "À lôi",
            dateAdded: "17 Jul 2023",
            duration: "3:17",
            image: "image/ALoi.png",
            audio: "audio/ALoi.mp3"
        },
        {
            title: "Head In The Clouds",
            album: "Changes - EP",
            dateAdded: "2 Apr 2023",
            duration: "3:39",
            image: "image/HeadInTheClouds.png",
            audio: "audio/HeadInTheClouds.mp3"
        },
        {
            title: "Thích quá rùi nà",
            album: "Trung Trần",
            dateAdded: "2 Apr 2023",
            duration: "2:58",
            image: "image/ThichQuaRuiNa.png",
            audio: "audio/ThichQuaRuiNa.mp3"
        }
        // Thêm các bài hát khác
    ];

    let currentSongIndex = 0;

    updateSongInfo();

    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pause";
        } else {
            audio.pause();
            playButton.textContent = "Play";
        }
    });

    backButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        changeSong();
    });

    skipButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        changeSong();
    });

    audio.addEventListener("ended", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        changeSong();
    });

    songLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const songIndex = link.getAttribute("data-song-index");
            if (songIndex !== null) {
                currentSongIndex = parseInt(songIndex, 10);
                changeSong();
            }
        });
    });

    function changeSong() {
        audio.src = songs[currentSongIndex].audio;
        audio.play();
        updateSongInfo();
    }

    function updateSongInfo() {
        const song = songs[currentSongIndex];
        currentSong.textContent = `${song.title} - ${song.album}`;
        songImage.src = song.image;
        playButton.textContent = "Pause";
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     const audio = document.getElementById("audio");
//     const currentSong = document.getElementById("current-song");
//     const playButton = document.getElementById("play-button");
//     const backButton = document.getElementById("back-button");
//     const skipButton = document.getElementById("skip-button");
//     const songImage = document.querySelector("#music-player img");
//     const songRows = document.querySelectorAll("#playlist tbody tr");

//     const songs = [
// {
//     title: "Lan Man",
//     album: "Lan Man",
//     dateAdded: "26 Jul 2023",
//     duration: "3:36",
//     image: "image/LanMan.jpg",
//     audio: "audio/LanMan.mp3"
// },
// {
//     title: "À lôi",
//     album: "À lôi",
//     dateAdded: "17 Jul 2023",
//     duration: "3:17",
//     image: "image/ALoi.png",
//     audio: "audio/ALoi.mp3"
// },
//         {
//             title: "Head In The Clouds",
//             album: "Changes - EP",
//             dateAdded: "2 Apr 2023",
//             duration: "3:39",
//             image: "image/HeadInTheClouds.png",
//             audio: "audio/HeadInTheClouds.mp3"
//         },
//         {
//             title: "Thích quá rùi nà",
//             album: "Trung Trần",
//             dateAdded: "2 Apr 2023",
//             duration: "2:58",
//             image: "image/ThichQuaRuiNa.png",
//             audio: "audio/ThichQuaRuiNa.mp3"
//         }
//         // Thêm các bài hát khác
//     ];

//     let currentSongIndex = 0;

//     updateSongInfo();

//     playButton.addEventListener("click", function() {
//         if (audio.paused) {
//             audio.play();
//             playButton.textContent = "Pause";
//         } else {
//             audio.pause();
//             playButton.textContent = "Play";
//         }
//     });

//     backButton.addEventListener("click", function() {
//         currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//         changeSong();
//     });

//     skipButton.addEventListener("click", function() {
//         currentSongIndex = (currentSongIndex + 1) % songs.length;
//         changeSong();
//     });

//     audio.addEventListener("ended", function() {
//         currentSongIndex = (currentSongIndex + 1) % songs.length;
//         changeSong();
//     });

//     songRows.forEach(function(row, index) {
//         row.addEventListener("click", function() {
//             currentSongIndex = index;
//             changeSong();
//         });
//     });

//     function changeSong() {
//         audio.src = songs[currentSongIndex].audio;
//         audio.play();
//         updateSongInfo();
//     }

//     function updateSongInfo() {
//         const song = songs[currentSongIndex];
//         currentSong.textContent = `${song.title}`;
//         songImage.src = song.image;
//         playButton.textContent = "Pause";
//     }
// });
