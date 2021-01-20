// Fetch config variables defined in window.*
const envSettings = window;

export const configuration = {
  favourite_song: envSettings.FAVOURITE_SONG,
  favourite_era: envSettings.FAVOURITE_ERA
}
