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

export interface ContactCard {
  label: string;
  name: string;
  email: string;
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

export interface SiteContent {
  hero: {
    firstName: string;
    lastName: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    sliderImages: string[];
    techRiderPdfUrl: string;
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
    contacts: ContactCard[];
  };
  footer: {
    artistName: string;
    subtitle: string;
    socialHandle: string;
    socials: SocialLink[];
    streaming: StreamingPlatform[];
  };
}

export interface RoomItem {
  title: string;
  description: string;
}

export interface TechRiderItem {
  category: string;
  items: string[];
}

export const roomsData: RoomItem[] = [
  { title: "South Asian Weddings & Sangeet", description: "Full live-band sets for the baraat, sangeet and reception — authentic Hindi and Bollywood song lists for desi weddings across the US and Canada." },
  { title: "Corporate & Diwali Galas", description: "Polished, brand-appropriate live entertainment for corporate galas, Diwali nights, cultural associations and award evenings." },
  { title: "University & College Shows", description: "High-energy Bollywood concert sets for South Asian student associations and campus culture nights." },
  { title: "Private & Club Shows", description: "Intimate live-band evenings and club nights — from soulful ghazals to a full Bollywood dance floor." },
];

export const techRider: TechRiderItem[] = [
  {
    category: "Vocal Requirements",
    items: [
      "1x Shure SM58 or equivalent wireless handheld microphone",
      "1x floor monitor wedge (stage left)",
      "Reverb/delay on vocal channel (preferably TC Helicon or equivalent)",
    ],
  },
  {
    category: "Band Backline",
    items: [
      "1x keyboard/synth with sustain pedal (Yamaha or Roland preferred)",
      "1x acoustic guitar with DI box and cable",
      "1x Cajon / percussion kit with microphone",
      "1x bass guitar amplifier (minimum 100W)",
    ],
  },
  {
    category: "PA & Monitoring",
    items: [
      "FOH PA system suited to venue capacity (minimum 2kW for 200+ guests)",
      "8-channel mixing desk minimum (16 preferred)",
      "2x floor monitors for band",
      "DI boxes x3 minimum",
    ],
  },
  {
    category: "Stage & Lighting",
    items: [
      "Minimum stage area: 4m x 3m (larger preferred for full band)",
      "Basic stage lighting (warm wash + 2 spotlights on vocal position)",
      "1x microphone stand (boom arm preferred)",
      "Power: 3x 13A sockets minimum at stage area",
    ],
  },
  {
    category: "Technical Contact",
    items: [
      "Sound check: minimum 90 minutes before doors",
      "Technical contact to be available from load-in through sound check",
      "Set list and stage plot provided 48 hours before performance",
    ],
  },
];

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
    techRiderPdfUrl: "",
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
        tagColor: "#C5A059",
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
        tagColor: "#C5A059",
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
        tagColor: "#8B6914",
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
    contacts: [],
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
