export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Shows", href: "#shows" },
  { label: "Clients", href: "#clients" },
  { label: "Media", href: "#media" },
  { label: "Booking", href: "#booking" },
];

export const showFormats = [
  {
    number: "01",
    title: "The Grand Bollywood Spectacular",
    description: "A full live band, cinematic costume changes, dancers and the biggest Bollywood anthems for a room ready to move.",
    tags: ["Full Band", "Dancers", "High Energy"],
    tone: "gold",
  },
  {
    number: "02",
    title: "Bollywood Meets EDM",
    description: "Bollywood classics reimagined with festival-ready drops, live vocals and club energy that takes the night higher.",
    tags: ["EDM Fusion", "Club Ready", "DJ Set"],
    tone: "pink",
  },
  {
    number: "03",
    title: "Rock & Funk Bollywood",
    description: "Electric guitar-driven arrangements, deep funk grooves and raw stage presence for an unforgettable live act.",
    tags: ["Pop Rock", "Funk", "Live Band"],
    tone: "emerald",
  },
  {
    number: "04",
    title: "Acoustic Soul Sessions",
    description: "An intimate, stripped-back set of Bollywood and pop favourites — perfect for cocktail hours, dinners and private rooms.",
    tags: ["Acoustic", "Intimate", "Pop"],
    tone: "champagne",
  },
  {
    number: "05",
    title: "Corporate Elegance Show",
    description: "Polished, tailored entertainment that brings warmth, style and a memorable musical signature to corporate audiences.",
    tags: ["Corporate", "Tailored", "Premium"],
    tone: "blue",
  },
  {
    number: "06",
    title: "Wedding Sangeet Spectacular",
    description: "A bespoke Bollywood celebration built around your story, your family and the moments everyone will remember.",
    tags: ["Weddings", "Bespoke", "Celebration"],
    tone: "rose",
  },
] as const;

export const clients = [
  { title: "Event Companies", description: "A dependable headline act with the polish, flexibility and production awareness to make your event feel effortless.", icon: "spark" },
  { title: "Talent Agencies", description: "A distinctive female Bollywood artist for hire with a show that reads beautifully in decks, lineups and global briefs.", icon: "star" },
  { title: "Wedding Planners", description: "A full-spectrum wedding performer who can take a room from emotional sangeet moments to a packed dance floor.", icon: "rings" },
  { title: "Corporate Event Managers", description: "Sophisticated, inclusive corporate Bollywood entertainment designed for gala dinners, awards nights and brand celebrations.", icon: "briefcase" },
  { title: "Nightclub & Venue Promoters", description: "Bollywood singer for clubs and nightlife with the vocal power and EDM fusion energy to own a late-night stage.", icon: "moon" },
  { title: "Private & VIP Events", description: "A personal, high-touch performance experience for hosts who want their guests to feel genuinely transported.", icon: "crown" },
  { title: "Artist & Talent Managers", description: "A versatile collaborator for touring, playback, showcase and crossover projects across India and the world.", icon: "globe" },
] as const;

export const testimonials = [
  { quote: "Bhaswati turned our sangeet into the emotional centre of the entire wedding weekend. She read the room perfectly, and then lifted every single guest out of their seats.", name: "Ananya Mehta", role: "Founder, The Wedding Atelier", type: "Luxury Wedding" },
  { quote: "The most polished live act we have booked for a corporate gala. The band sounded incredible, the set was beautifully tailored and the energy never dipped.", name: "Daniel Reed", role: "Director of Experiences, Northstar Group", type: "Corporate Gala" },
  { quote: "She brings the rare combination of a trained voice and true nightlife instinct. Our floor was full from the first drop to the final encore.", name: "Arjun Kapoor", role: "Promoter, Afterdark Mumbai", type: "Club Night" },
  { quote: "A natural headliner with a global point of view. Bhaswati is the artist we recommend when a brief needs both credibility and spectacle.", name: "Maya Patel", role: "Senior Agent, Meridian Talent", type: "Talent Agency" },
  { quote: "Our guests are still talking about the acoustic set. It felt intimate, cinematic and completely personal to the evening we wanted to create.", name: "Sofia Laurent", role: "Private Client, Mumbai", type: "Private Celebration" },
] as const;

export const riderHighlights = [
  { title: "Full Live Band", description: "A tight, versatile ensemble with the musicianship to move between Bollywood, pop, rock and funk." },
  { title: "Sound & Lighting", description: "Professional production coordination for a confident, seamless show from soundcheck to encore." },
  { title: "Custom Setlist", description: "Every performance is shaped around your audience, event arc, cultural moments and brand tone." },
  { title: "Costume & Styling", description: "Editorial styling and visual changes that make the performance feel as considered as it sounds." },
  { title: "Flexible Durations", description: "30, 60, 90 or 120-minute formats designed for your run of show and venue rhythm." },
  { title: "Soundcheck & Rehearsal", description: "Prepared, punctual and production-friendly, with the detail required for high-pressure events." },
  { title: "Worldwide Travel", description: "Available globally for destination weddings, tours, festivals, galas and private shows." },
] as const;

export const mediaImages = [
  { src: "https://picsum.photos/seed/bhaswati-stage/1000/1250", label: "Live at The Grand Hyatt", size: "tall" },
  { src: "https://picsum.photos/seed/bhaswati-mic/1000/800", label: "Studio Session / Mumbai", size: "wide" },
  { src: "https://picsum.photos/seed/bhaswati-red/1000/1250", label: "Theatre Royal / Delhi", size: "tall" },
  { src: "https://picsum.photos/seed/bhaswati-band/1000/800", label: "Band Rehearsal / London", size: "wide" },
  { src: "https://picsum.photos/seed/bhaswati-gold/1000/1250", label: "Sangeet Night / Dubai", size: "tall" },
  { src: "https://picsum.photos/seed/bhaswati-crowd/1000/800", label: "Live at The Blue Room", size: "wide" },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/itsmebsg" },
  { label: "YouTube", href: "https://youtube.com/@itsmebsg" },
  { label: "Facebook", href: "https://facebook.com/itsmebsg" },
  { label: "Spotify", href: "https://spotify.com" },
  { label: "TikTok", href: "https://tiktok.com" },
] as const;
