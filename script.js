const songs = [
  "https://open.spotify.com/embed/track/6cjIlxXM1ca6nxkJ0p27jU", // Dilerim Ki
  "https://open.spotify.com/embed/track/20pZiwzG0Pa1Exsh273YYH", // Sevdin Diye Mi
  "https://open.spotify.com/embed/track/5OuQxqw8BIflUuJXxCLknH", // Islanırsın
  "https://open.spotify.com/embed/track/30AIltFnZ2viseRTFedAym", // Bir Bildiğin Vardır
  "https://open.spotify.com/embed/track/0QVVOMUDgLOixwS9V8Q66o", // Sana Bu Kadar Uzakken
  "https://open.spotify.com/embed/track/0RdUX4WE0fO30VnlUbDVL6", // Still Loving You
  "https://open.spotify.com/embed/track/4rDbp1vnvEhieiccprPMdI", // Somebody to Love
  "https://open.spotify.com/embed/track/5hVepr5CHiTGtJY5bP4i5n"   // No One Like You
];

const colorThief = new ColorThief();

function switchSong(index) {
  const frame = document.getElementById("spotify-frame");
  frame.src = songs[index] + "?utm_source=generator";

  const img = document.getElementById(`cover-${index}`);
  if (img.complete) {
    applyColors(img);
  } else {
    img.addEventListener('load', () => applyColors(img));
  }
}

function applyColors(img) {
  const color = colorThief.getColor(img);
  const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

  document.body.style.background = `linear-gradient(to bottom, ${rgb}, #ffffff)`;

  const buttons = document.querySelectorAll('.song-buttons button');
  buttons.forEach(btn => {
    btn.style.backgroundColor = rgb;
    btn.style.color = getTextColorBasedOnBackground(color);
  });
}

function getTextColorBasedOnBackground([r, g, b]) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "black" : "white";
}
function switchSong(index) {
  const frame = document.getElementById("spotify-frame");
  frame.src = songs[index] + "?utm_source=generator";

  // Remove active class from all buttons
  const allButtons = document.querySelectorAll(".song-buttons button");
  allButtons.forEach(btn => btn.classList.remove("active-song"));

  // Add active class to selected button
  allButtons[index].classList.add("active-song");

  // Handle cover color logic
  const img = document.getElementById(`cover-${index}`);
  if (img.complete) {
    applyColors(img);
  } else {
    img.addEventListener('load', () => applyColors(img));
  }
}

