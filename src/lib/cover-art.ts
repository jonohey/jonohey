import type { StaticImageData } from "next/image";
import afterThePractice from "../../public/images/covers/after-the-practice.jpg";
import ameliasDance from "../../public/images/covers/amelias-dance.jpg";
import blossom from "../../public/images/covers/blossom.jpg";
import deepDown from "../../public/images/covers/deep-down-and-not-forgotten.jpg";
import foundling from "../../public/images/covers/foundling-reprise.jpg";
import freshStart from "../../public/images/covers/fresh-start.jpg";
import iBelong from "../../public/images/covers/i-belong.jpg";
import outro from "../../public/images/covers/outro.jpg";
import spaceBetween from "../../public/images/covers/the-space-between.jpg";

export type CoverArt = {
  image: StaticImageData;
  // Where the photograph was taken.
  location: string;
  // Redbubble prints page. The link is hidden until this is set.
  printsUrl?: string;
  // Sheet music PDF on the Spotify store. The link is hidden until this is set.
  sheetMusicUrl?: string;
};

// Keyed by the release's spotifyId (see `releases` in music.ts).
export const coverArt: Record<string, CoverArt> = {
  "1nE57DcoCozher3qu0nXYJ": {
    image: ameliasDance,
    location: "Mt Rainier rising over Seattle",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/amelias-dance-sheet-music-pdf-download",
  },
  "2ynprhSHVBFBYIMIkzgKU9": {
    image: afterThePractice,
    location: "Mt Rainier rising over Seattle",
    printsUrl: "https://www.redbubble.com/shop/ap/185174095?asc=u",
  },
  "71cc1moGqj4mx2a80R5In6": {
    image: iBelong,
    location: "Sunrise in Richmond Park, London",
    printsUrl: "https://www.redbubble.com/shop/ap/185173845?asc=u",
  },
  "569iMRcuBw4kNexgmdCw8y": {
    image: spaceBetween,
    location: "Lake Washington, USA",
    printsUrl: "https://www.redbubble.com/shop/ap/185173726?asc=u",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/the-space-between-sheet-music-pdf-download",
  },
  "2BciIeBDGtRL3dQVqmCjSH": {
    image: foundling,
    location: "Russell Square, London",
    printsUrl: "https://www.redbubble.com/shop/ap/177646618?asc=u",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/foundling-reprise-piano-solo-version-sheet-music-pdf-download",
  },
  "444xXPngvFEBKhOTSuFFZB": {
    image: outro,
    location: "Sea of clouds sunset, Mt Tajumulco, Guatemala",
    printsUrl: "https://www.redbubble.com/shop/ap/176054510?asc=u",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/outro-sheet-music-pdf-download",
  },
  "2sIjVFbjnlAyMmQl4cdAZx": {
    image: blossom,
    location: "Isabella Plantation, Richmond Park, London",
    printsUrl: "https://www.redbubble.com/shop/ap/176054312?asc=u",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/blossom-sheet-music-pdf-download",
  },
  "7fIFrkNpX7T3C2L2EI03T6": {
    image: deepDown,
    location: "Sunset on the water, Ko Tao, Thailand",
    printsUrl: "https://www.redbubble.com/shop/ap/176054388?asc=u",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/download-deep-down-and-not-forgotten-piano-sheet-music",
  },
  "5JMIw7f71dsF4IefH1R4EZ": {
    image: freshStart,
    location: "Dartmoor National Park, England",
    printsUrl: "https://www.redbubble.com/shop/ap/176054472?asc=u",
    sheetMusicUrl:
      "https://shop.spotify.com/en/artist/729QwZLCsOw3JtZmbQSFTj/product/fresh-start-piano-sheet-music-pdf-download",
  },
};
