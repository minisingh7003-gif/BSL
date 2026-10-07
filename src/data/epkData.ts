export interface VideoItem {
  title: string;
  url: string;
  id: string;
  thumbnail: string;
  description: string;
}

export interface PhotoItem {
  src: string;
  credit: string;
}

export interface ReleaseItem {
  title: string;
  type: 'ALBUM' | 'EP' | 'SINGLE';
  year: string;
  cover: string;
  streams: string;
  links: { label: string; url: string }[];
  tagColor?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface StreamingPlatform {
  platform: string;
  url: string;
  icon: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface PressLogo {
  name: string;
  logo: string;
}

export interface DownloadableAsset {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  url: string;
  icon: string;
}

export interface SiteContent {
  hero: {
    firstName: string;
    lastName: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    sliderImages: string[];
  };
  about: {
    heading: string;
    highlightWord: string;
    paragraphs: string[];
    showreelTitle: string;
    showreelUrl: string;
    showreelThumbnail: string;
    showreelDescription: string;
  };
  music: {
    heading: string;
    highlightWord: string;
    showcaseHeading: string;
    showcaseDescription: string;
    showcaseVideos: VideoItem[];
    releases: ReleaseItem[];
  };
  photos: {
    heading: string;
    highlightWord: string;
    photos: PhotoItem[];
  };
  contact: {
    heading: string;
    highlightWord: string;
    blurb: string;
    bookingEmail: string;
    instagramDmUrl: string;
  };
  footer: {
    artistName: string;
    subtitle: string;
    socialHandle: string;
    socials: SocialLink[];
    streaming: StreamingPlatform[];
  };
}

function ytThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export const defaultContent: SiteContent = {
  hero: {
    firstName: "Bhaswati",
    lastName: "Sen Gupta",
    subtitle: "Singer / Live Performer / Playback Artist",
    description: "A Bollywood voice raised on riyaaz — bringing the songs that raised us to your stage, live, wherever home is now.",
    backgroundImage: "https://i.ytimg.com/vi/77AX44whQyY/maxresdefault.jpg",
    sliderImages: [],
  },
  about: {
    heading: "Every song carries a little bit of home",
    highlightWord: "home",
    paragraphs: [
      "Every song I sing carries a little bit of home in it. Here is how a girl doing riyaaz before sunrise ended up on stages an ocean away — and why, when the lights come up, it still feels like I am singing for family.",
      "Before I understood the words, I knew the melodies. Ours was a house where the harmonium was never really put away — mornings meant riyaaz, evenings meant old film songs drifting from the radio. Music was not a lesson. It was the language we spoke.",
      "The moment I fell in love with the stage was not applause — it was silence. A room full of people going quiet, leaning in, feeling a lyric land the same instant I did. That hush is what I have chased ever since.",
      "Then came the studios — playback work, original releases, the strange thrill of hearing my own voice come back through the speakers. It taught me discipline and range. But a record is a photograph. Live is the real thing, breathing.",
      "Now I bring that voice to stages across the US, Canada and India — to weddings, galas and campus nights full of people far from where they grew up. When the first familiar notes hit, I watch a room remember home. That is the whole reason I do this.",
      "I do not just want you to hear the song. For three minutes, I want the whole room to feel like it is back home.",
    ],
    showreelTitle: "Hear it for yourself.",
    showreelUrl: "https://youtu.be/_RQKF-RxzMk",
    showreelThumbnail: ytThumb("_RQKF-RxzMk"),
    showreelDescription: "Words can only carry a voice so far. Sixty seconds is all it takes to feel the room — the energy, the range, and that hush right before the chorus lands.",
  },
  music: {
    heading: "Three songs, three moods",
    highlightWord: "moods",
    showcaseHeading: "Three songs, three moods.",
    showcaseDescription: "This is the range I bring to a night — a devotional opener to settle the room, a full-floor mashup to lift it, and a romantic hit that has everyone singing the words back to me.",
    showcaseVideos: [
      { title: "Jhoom Jhoom Baba", url: "https://youtu.be/wL_gLi4KLtg", id: "wL_gLi4KLtg", thumbnail: ytThumb("wL_gLi4KLtg"), description: "A devotional opener to settle the room" },
      { title: "Live Mashup", url: "https://youtu.be/77AX44whQyY", id: "77AX44whQyY", thumbnail: ytThumb("77AX44whQyY"), description: "A full-floor mashup to lift it" },
      { title: "Chaleya", url: "https://youtu.be/0miwmaEUb8k", id: "0miwmaEUb8k", thumbnail: ytThumb("0miwmaEUb8k"), description: "A romantic hit that has everyone singing the words back" },
    ],
    releases: [
      {
        title: "Playback Release 1",
        type: "SINGLE",
        year: "2024",
        cover: ytThumb("tB-SVGFH7Is"),
        streams: "Released",
        links: [
          { label: "YouTube", url: "https://youtu.be/tB-SVGFH7Is" },
          { label: "Spotify", url: "https://spotify.com" },
        ],
        tagColor: "#FF1E42",
      },
      {
        title: "Playback Release 2",
        type: "SINGLE",
        year: "2024",
        cover: ytThumb("oEBC1Or8teQ"),
        streams: "Released",
        links: [
          { label: "YouTube", url: "https://youtu.be/oEBC1Or8teQ" },
          { label: "Spotify", url: "https://spotify.com" },
        ],
        tagColor: "#FF1E42",
      },
      {
        title: "Original Composition",
        type: "SINGLE",
        year: "2023",
        cover: ytThumb("iV5rNXgQySg"),
        streams: "Beyond covers",
        links: [
          { label: "YouTube", url: "https://youtu.be/iV5rNXgQySg" },
          { label: "Spotify", url: "https://spotify.com" },
        ],
        tagColor: "#8B0A1E",
      },
    ],
  },
  photos: {
    heading: "Press Photos",
    highlightWord: "Photos",
    photos: [
      { src: "https://images.pexels.com/photos/30397932/pexels-photo-30397932.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Stage / Mumbai" },
      { src: "https://images.pexels.com/photos/26588618/pexels-photo-26588618.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Studio / Delhi" },
      { src: "https://images.pexels.com/photos/10168224/pexels-photo-10168224.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Live / Bangalore" },
      { src: "https://images.pexels.com/photos/7699976/pexels-photo-7699976.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Portrait / Kolkata" },
      { src: "https://images.pexels.com/photos/23911182/pexels-photo-23911182.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Session / Mumbai" },
      { src: "https://images.pexels.com/photos/16929699/pexels-photo-16929699.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Feature / Jaipur" },
    ],
  },
  contact: {
    heading: "Let's give your night a voice",
    highlightWord: "voice",
    blurb: "Tell me about your evening — the date, the city, the people who will be in the room. You'll hear back from me personally, not an autoresponder. This part I like to do myself.",
    bookingEmail: "bhaswatis.music@gmail.com",
    instagramDmUrl: "https://ig.me/m/itsmebsg",
  },
  footer: {
    artistName: "Bhaswati Sen Gupta",
    subtitle: "Singer / Live Performer / Playback Artist",
    socialHandle: "@itsmebsg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/itsmebsg", icon: "instagram" },
      { platform: "Facebook", url: "https://facebook.com/itsmebsg", icon: "facebook" },
      { platform: "YouTube", url: "https://youtube.com/@itsmebsg", icon: "youtube" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/itsmebsg", icon: "linkedin" },
    ],
    streaming: [
      { platform: "Spotify", url: "https://spotify.com", icon: "spotify" },
      { platform: "Apple Music", url: "https://music.apple.com", icon: "apple" },
      { platform: "JioSaavn", url: "https://jiosaavn.com", icon: "jiosaavn" },
      { platform: "Wynk", url: "https://wynkmusic.com", icon: "wynk" },
    ],
  },
};

export const statsData: StatItem[] = [
  { value: 150, suffix: "+", label: "Live Performances" },
  { value: 40, suffix: "+", label: "Original Releases" },
  { value: 3, suffix: "", label: "Countries Toured" },
  { value: 500, suffix: "K", label: "Total Streams" },
];

export const pressLogos: PressLogo[] = [
  { name: "Rolling Stone India", logo: "Rolling Stone" },
  { name: "Vogue India", logo: "Vogue" },
  { name: "Times of India", logo: "TOI" },
  { name: "Bollywood Hungama", logo: "BH" },
  { name: "Filmfare", logo: "Filmfare" },
  { name: "NDTV", logo: "NDTV" },
];

export const downloadableAssets: DownloadableAsset[] = [
  { title: "Press Kit", description: "Complete bio, photos, and contact info", fileType: "PDF", fileSize: "2.4 MB", url: "#", icon: "file" },
  { title: "Hi-Res Photos", description: "High-resolution promotional images", fileType: "ZIP", fileSize: "45 MB", url: "#", icon: "image" },
  { title: "Stage Plot", description: "Technical requirements and stage layout", fileType: "PDF", fileSize: "1.1 MB", url: "#", icon: "layout" },
  { title: "Set List", description: "Sample performance set lists", fileType: "PDF", fileSize: "0.8 MB", url: "#", icon: "music" },
];
