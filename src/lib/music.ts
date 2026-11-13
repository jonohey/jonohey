export const streamingLinks = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/729QwZLCsOw3JtZmbQSFTj",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/gb/artist/jono-hey/1606865649",
  },
  {
    name: "YouTube Music",
    href: "https://music.youtube.com/@jonoheymusic",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.co.uk/artists/B09R4DKBCK/jono-hey",
  },
  {
    name: "Bandcamp",
    href: "https://jonohey.bandcamp.com/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@jonoheymusic",
  },
];

export const sheetMusicStore =
  "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/store";

export const latestReleasesPlaylist = "5cavi1ykSQhqkejYZQmaLi";

export type Release = {
  title: string;
  type: "Album" | "EP" | "Single";
  year: number;
  spotifyId: string;
  // Renders the embed in Spotify's default (coloured) theme instead of black.
  // Only the newest release should have this.
  latest?: boolean;
};

// Newest first. IDs are Spotify album IDs (open.spotify.com/album/<id>).
export const releases: Release[] = [
  { title: "Amelia's Dance", type: "Single", year: 2026, spotifyId: "1nE57DcoCozher3qu0nXYJ", latest: true },
  { title: "After the Practice", type: "Single", year: 2026, spotifyId: "2ynprhSHVBFBYIMIkzgKU9" },
  { title: "I Belong", type: "Single", year: 2026, spotifyId: "71cc1moGqj4mx2a80R5In6" },
  { title: "The Space Between", type: "Single", year: 2026, spotifyId: "569iMRcuBw4kNexgmdCw8y" },
  { title: "Foundling (Reprise)", type: "Single", year: 2026, spotifyId: "2BciIeBDGtRL3dQVqmCjSH" },
  { title: "Outro", type: "Single", year: 2025, spotifyId: "444xXPngvFEBKhOTSuFFZB" },
  { title: "Blossom", type: "Single", year: 2025, spotifyId: "2sIjVFbjnlAyMmQl4cdAZx" },
  { title: "Deep Down and Not Forgotten", type: "EP", year: 2025, spotifyId: "7fIFrkNpX7T3C2L2EI03T6" },
  { title: "Fresh Start", type: "Album", year: 2022, spotifyId: "5JMIw7f71dsF4IefH1R4EZ" },
];
