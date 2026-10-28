/**
 * =========================================================================
 * CROWN CREATION - Netflix-Themed Portfolio Data Configuration
 * =========================================================================
 * Official client showcase for Crown Creation Studio
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // Brand & Studio Profile
  profile: {
    name: "Crown Creation",
    shortName: "Crown",
    role: "Brand Identity, Performance Ads & Digital Design Studio",
    brandTitle: "CROWN", // Logo in Netflix typography style
    tagline: "Engineering iconic visual identities, high-converting performance campaigns, and scalable digital systems that transform ambitious brands into category leaders.",
    bio: "Crown Creation is an independent brand identity, performance advertising, and digital design studio. From high-growth medical aesthetic clinics and celebrity talk shows to global education consultancies and retail brands, we craft design systems that command attention and drive measurable business ROI.",
    avatar: "assets/clonex-logo-brand.jpg",
    email: "crowncreations30@gmail.com",
    whatsappUrl: "https://wa.me/qr/KGEWR3H7AEQJM1",
    instagramUrl: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==",
    location: "Global Remote / Studio Commissions",
    status: {
      isAvailable: true,
      text: "Accepting Q2 & Q3 Design Commissions & Client Projects",
      badge: "Open for Commissions"
    },
    socials: {
      whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1",
      instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==",
      email: "mailto:crowncreations30@gmail.com"
    },
    stats: [
      { label: "Active Client Roster", value: "35+" },
      { label: "Performance ROAS Lift", value: "3.4x" },
      { label: "Lead Gen Surge", value: "+310%" },
      { label: "Client Satisfaction", value: "100% ⭐" }
    ]
  },

  // "Who's Watching?" Profiles (Audience-specific tailored entry)
  viewerProfiles: [
    {
      id: "crown-creation",
      name: "Crown Creation",
      avatar: "assets/clonex-logo-brand.jpg",
      description: "Official Studio Profile",
      welcomeMessage: "Welcome to Crown Creation Studio! Enjoy our cinematic client showcase."
    }
  ],

  // Guest Explorer profile fallback
  guestProfile: {
    id: "guest",
    name: "Guest Explorer",
    avatar: "assets/darshan-shah-studio-guest.jpg",
    description: "Browsing as Guest",
    welcomeMessage: "Welcome, Guest! Feel free to explore Crown Creation's client campaigns and case studies."
  },

  // Featured Project (Billboard Hero Banner)
  featuredProject: {
    id: "diva-healthcare",
    title: "Diva Healthcare & Aesthetics Clinic",
    client: "Diva Healthcare (Bangalore)",
    year: "2024",
    matchScore: "99% Match",
    duration: "Full Creative Suite",
    badge: "🏆 #1 IN CLIENT CAMPAIGNS TODAY",
    qualityTag: "Ultra HD Visuals",
    typeTag: "Healthcare & Aesthetics",
    tagline: "High-converting social ad campaigns, medical aesthetics branding, and patient acquisition creatives for premier clinic.",
    description: "Diva Healthcare needed to demystify advanced clinical procedures (Salmon DNA Facials, CoolSculpting fat freezing, pre-wedding contouring) with empathetic, high-trust visual storytelling. Crown Creation engineered bold emotional hooks ('Freeze it. Don't hide it.', 'You get the lehenga, we'll get you your dream body') driving a 3.2x patient booking surge.",
    backdropImage: "assets/diva-healthcare-coolsculpting.jpg",
    thumbnailImage: "assets/diva-healthcare-salmon-dna.jpg",
    tags: ["Healthcare", "Performance Ads", "Social Media", "Campaign Suite", "Creative Direction"],
    metrics: [
      { label: "Consultation Bookings", value: "+220% Growth" },
      { label: "Campaign ROAS", value: "3.2x ROAS" },
      { label: "Bridal Signups", value: "140+ Packages" }
    ],
    deliverables: [
      "Clinical Treatment Ad Campaigns",
      "Bridal & Festive Makeover Suites",
      "Offer Architecture & Package Design",
      "Omnichannel Social Media Kit"
    ],
    clientReview: {
      author: "Dr. Ananya Sharma",
      role: "Lead Aesthetician & Director, Diva Healthcare",
      avatar: "https://images.unsplash.com/photo-1594824813583-b9c1d0630b91?auto=format&fit=crop&w=200&q=80",
      comment: "Crown Creation transformed how patients perceive clinical aesthetic treatments. The ad creatives established instant trust and booked our appointment calendar weeks in advance."
    },
    links: {
      whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1?text=Hi%20Crown%20Creation,%20I%20love%20the%20Diva%20Healthcare%20campaign!",
      instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg=="
    }
  },

  // Project Categories & Rows (Netflix Row carousels)
  categories: [
    {
      id: "featured-client-work",
      title: "🔥 Trending Client Work by Crown",
      subtitle: "High-impact brand identities and performance ad campaigns driving explosive client revenue",
      projects: [
        {
          id: "diva-healthcare",
          title: "Diva Healthcare & Aesthetics",
          client: "Diva Healthcare Clinic",
          year: "2024",
          matchScore: "99%",
          duration: "4 Weeks",
          badge: "Top 10",
          category: "Healthcare / Performance Ads",
          thumbnail: "assets/diva-healthcare-salmon-dna.jpg",
          backdrop: "assets/diva-healthcare-coolsculpting.jpg",
          tagline: "High-converting social campaigns and patient acquisition creatives for aesthetic clinic.",
          description: "Demystified clinical procedures like Salmon DNA Facials, CoolSculpting fat freezing, and pre-wedding bridal contouring with empathetic, high-trust visual storytelling.",
          tags: ["Healthcare", "Social Ads", "Creative Direction", "Performance"],
          metrics: [
            { label: "Consultation Bookings", value: "+220%" },
            { label: "Campaign ROAS", value: "3.2x" },
            { label: "Bridal Signups", value: "140+" }
          ],
          deliverables: ["Clinical Ad Campaigns", "Bridal & Festive Suites", "Offer Architecture", "Social Media Kit"],
          clientReview: {
            author: "Dr. Ananya Sharma",
            role: "Director, Diva Healthcare",
            avatar: "https://images.unsplash.com/photo-1594824813583-b9c1d0630b91?auto=format&fit=crop&w=200&q=80",
            comment: "The ad creatives established instant trust and filled our appointment books across Bangalore."
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        },
        {
          id: "darshan-shah-podcast",
          title: "The Darshan Shah Show",
          client: "The Darshan Shah Show",
          year: "2024",
          matchScore: "98%",
          duration: "6 Weeks",
          badge: "Celebrity Suite",
          category: "Media / Talk Show",
          thumbnail: "assets/darshan-shah-studio-guest.jpg",
          backdrop: "assets/darshan-shah-podcast-launch.jpg",
          tagline: "Broadcast-grade visual identity, studio brand direction, and guest invitation campaign.",
          description: "Crafted a cinematic studio aesthetic featuring deep royal blues, theatrical spotlights, 3D gold typography ('Your Story. Your Voice. Your Moment.'), and swipe-stopping guest acquisition creatives.",
          tags: ["Podcast", "Brand Direction", "YouTube Thumbnail", "Typography"],
          metrics: [
            { label: "Guest Inquiries", value: "+180% DMs" },
            { label: "Monthly Impressions", value: "250K+" },
            { label: "Channel Engagement", value: "4.6x Lift" }
          ],
          deliverables: ["Podcast Key Art Suite", "Studio Stage Direction", "Guest Invitation Pack", "YouTube & Spotify Thumbnails"],
          clientReview: {
            author: "Darshan Shah",
            role: "Host & Producer, The Darshan Shah Show",
            avatar: "assets/darshan-shah-story-hearing.jpg",
            comment: "Crown Creation captured the high-stakes, cinematic energy our show needed. Top-tier creative vision!"
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        },
        {
          id: "dvivid-consultant",
          title: "D-Vivid Global Education",
          client: "D-Vivid Consultant",
          year: "2024",
          matchScore: "97%",
          duration: "3 Weeks",
          badge: "High ROAS",
          category: "Education / Lead Gen",
          thumbnail: "assets/dvivid-canada-abroad-ad.jpg",
          backdrop: "assets/dvivid-germany-admission-ad.jpg",
          tagline: "High-converting social ad campaigns and educational carousels for overseas university recruitment.",
          description: "Engineered high-contrast editorial ad carousels combining international landmarks (CN Tower, Brandenburg Gate), bold highlighter typography, and structured visa & admission decision frameworks.",
          tags: ["Study Abroad", "Carousels", "Ad Creatives", "Lead Gen"],
          metrics: [
            { label: "Lead Gen Surge", value: "+310%" },
            { label: "Share & Save Rate", value: "4.8x Avg" },
            { label: "Cost Per Acquisition", value: "-42%" }
          ],
          deliverables: ["Educational Carousels", "Country Ad Suites (Canada/Germany)", "Lead Magnet Creatives", "Social Guidelines"],
          clientReview: {
            author: "Bhavin Patel",
            role: "Managing Director, D-Vivid Consultant",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            comment: "The visual clarity solved our biggest challenge: communicating complex immigration guidelines into thumb-stopping social ads."
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        },
        {
          id: "gabardine-denim",
          title: "Gabardine Performance Denim",
          client: "Gabardine Apparels",
          year: "2024",
          matchScore: "96%",
          duration: "3 Weeks",
          badge: "B1G1 Launch",
          category: "Fashion / E-Commerce Ads",
          thumbnail: "assets/gabardine-stretch-ad.jpg",
          backdrop: "assets/gabardine-offer-ad.jpg",
          tagline: "Kinetic social media performance ad campaigns engineered for all-day flexible stretch jeans.",
          description: "Designed high-contrast athletic motion graphics, punchy typography ('Squat, Sprint, Dance – These Jeans Pass Every Test'), and limited-time promotional checkout banners ('4 Jeans for ₹3999').",
          tags: ["Fashion", "Performance Ads", "Typography", "Conversion Hooks"],
          metrics: [
            { label: "Ad Click-Through", value: "+148% CTR" },
            { label: "Batch Sellout", value: "100 Cust/48h" },
            { label: "Return on Spend", value: "3.8x ROAS" }
          ],
          deliverables: ["Performance Social Ad Suite", "Promotional Packs", "B1G1 Conversion Hooks", "Lookbook Carousel Assets"],
          clientReview: {
            author: "Rajesh Singhania",
            role: "Head of Growth, Gabardine",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            comment: "The energy of these ads is unmatched. Our online store converted visitors into buyers like never before."
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        },
        {
          id: "clonex-media",
          title: "CloneX Media & Digital Lab",
          client: "CloneX Technologies",
          year: "2024",
          matchScore: "99%",
          duration: "4 Weeks",
          badge: "Logo Mark",
          category: "Logo Design / Tech",
          thumbnail: "assets/clonex-logo-brand.jpg",
          backdrop: "assets/clonex-logo-brand.jpg",
          tagline: "Iconic optical camera lens mark and futuristic brand identity for digital video replication.",
          description: "Engineered a precision concentric iris logo mark with neon blue and purple depth rings, a minimalist video play symbol, and bespoke modern typography.",
          tags: ["Logo Design", "Concentric Geometry", "Identity Tokens", "Dark Mode"],
          metrics: [
            { label: "Brand Recall Score", value: "94%" },
            { label: "Scalability", value: "16px to 4K" },
            { label: "Production Formats", value: "SVG, AI, WebP" }
          ],
          deliverables: ["Concentric Optical Logo Mark", "Vector Identity System", "Digital Brand Tokens", "High-Contrast Theme"],
          clientReview: {
            author: "Vikram Malhotra",
            role: "Founder, CloneX Technologies",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
            comment: "Crown Creation delivered a logo that looks like it belongs on an Apple keynote screen. Absolute perfection."
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        },
        {
          id: "greentech-lifespace",
          title: "Greentech Lifespace Milestone",
          client: "Greentech Lifespace (Since 2008)",
          year: "2024",
          matchScore: "95%",
          duration: "2 Weeks",
          badge: "RERA Milestone",
          category: "Real Estate / Trust Campaign",
          thumbnail: "assets/greentech-rera-ad.jpg",
          backdrop: "assets/greentech-rera-ad.jpg",
          tagline: "Prestige commercial trust campaign and landmark RERA milestone announcement creative.",
          description: "Announced landmark official RERA approval to high-net-worth land investors with lush aerial perspectives of Dholera smart city developments, gold metallic emblems, and commanding editorial copy: 'Trust, Now Official.'",
          tags: ["Real Estate", "RERA Milestone", "Gold 3D Emblem", "Social Media"],
          metrics: [
            { label: "Investor Inquiries", value: "+230%" },
            { label: "Organic Shares", value: "14,500+" },
            { label: "Trust Benchmark", value: "Top Tier" }
          ],
          deliverables: ["RERA Milestone Campaign", "3D Gold Stamp Art", "Social Feed Creatives", "Investor Announcement Deck"],
          clientReview: {
            author: "Karan Mehta",
            role: "VP Marketing, Greentech Lifespace",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            comment: "Commanding, prestigious, and instantly trustworthy. Exactly what high-ticket real estate demands."
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        },
        {
          id: "impressly-retail",
          title: "Impressly Mobile Retail & E-Commerce",
          client: "Impressly Digital Store",
          year: "2024",
          matchScore: "96%",
          duration: "3 Weeks",
          badge: "App Store Ready",
          category: "UI Design / App Icon",
          thumbnail: "assets/impressly-app-brand.jpg",
          backdrop: "assets/impressly-app-brand.jpg",
          tagline: "Clean, friendly mobile-first shopping bag symbol and vibrant visual identity for retail.",
          description: "Designed a clean 3D-angled smartphone silhouette framing a vibrant coral-red shopping bag crowned with golden sparkle accents, paired with modern geometric typography.",
          tags: ["Mobile Icon", "App Store UI", "Identity System", "Vector"],
          metrics: [
            { label: "Icon Tap-Through", value: "+42%" },
            { label: "Launch Adoption", value: "50,000+" },
            { label: "Scalability", value: "16px to 1024px" }
          ],
          deliverables: ["Mobile App Icon (iOS/Android)", "Primary Wordmark Suite", "App Onboarding UI", "Color Dimension Specs"],
          clientReview: {
            author: "Pooja Desai",
            role: "Product Lead, Impressly",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
            comment: "Our app icon pops beautifully on both dark and light mobile home screens. We couldn't be happier!"
          },
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1", instagram: "https://www.instagram.com/crownc.reations?stkn=MTRxdW9jdHY3Z2U3cg==" }
        }
      ]
    },

    {
      id: "healthcare-beauty-ads",
      title: "✨ Diva Healthcare & Clinical Aesthetics Gallery",
      subtitle: "High-trust clinical advertising, festive offers, and pre-wedding makeover campaigns",
      projects: [
        {
          id: "diva-coolsculpting",
          title: "CoolSculpting Fat Freezing Campaign",
          client: "Diva Healthcare Clinic",
          year: "2024",
          matchScore: "99%",
          duration: "Ad Campaign",
          badge: "Patient Favorite",
          category: "Medical Aesthetics",
          thumbnail: "assets/diva-healthcare-coolsculpting.jpg",
          backdrop: "assets/diva-healthcare-coolsculpting.jpg",
          tagline: "Freeze it. Don't hide it. Non-surgical stubborn fat contouring ad creatives.",
          description: "Highlighted state-of-the-art non-invasive cryolipolysis with high-end clinical photography and clear patient pricing, overcoming cosmetic surgery fears.",
          tags: ["CoolSculpting", "Aesthetics", "Ad Creatives", "Lead Gen"],
          metrics: [
            { label: "Patient Signups", value: "+180%" },
            { label: "Ad ROAS", value: "3.4x" },
            { label: "Treatment Inquiries", value: "450+" }
          ],
          deliverables: ["Instagram Feed Ads", "Story Creatives", "In-Clinic Standees"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "diva-salmon-dna",
          title: "Salmon DNA Rejuran Skin Renewal",
          client: "Diva Healthcare Clinic",
          year: "2024",
          matchScore: "98%",
          duration: "Ad Campaign",
          badge: "Viral Treatment",
          category: "Dermatology",
          thumbnail: "assets/diva-healthcare-salmon-dna.jpg",
          backdrop: "assets/diva-healthcare-salmon-dna.jpg",
          tagline: "Recharge your skin from within. Salmon DNA glow rejuvenation ads.",
          description: "Demystified polynucleotide cellular skin boosters with calming scientific imagery and instant radiant transformation hooks.",
          tags: ["Salmon DNA", "Skin Glow", "Performance Ad", "Editorial"],
          metrics: [
            { label: "Click Through Rate", value: "4.2%" },
            { label: "Conversion Lift", value: "+95%" },
            { label: "Consultations", value: "120+" }
          ],
          deliverables: ["Product Explainer Ad", "Carousel Storyboard", "Pricing Banner"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "diva-bridal-body",
          title: "Pre-Wedding Dream Body Makeover",
          client: "Diva Healthcare Clinic",
          year: "2024",
          matchScore: "97%",
          duration: "Seasonal Suite",
          badge: "Bridal Hit",
          category: "Bridal Aesthetics",
          thumbnail: "assets/diva-healthcare-bridal-body.jpg",
          backdrop: "assets/diva-healthcare-bridal-body.jpg",
          tagline: "You get the lehenga, we'll get you your dream body. Bridal transformation suite.",
          description: "Emotional, high-aspiration pre-wedding fitness and non-invasive body sculpting packages for brides-to-be.",
          tags: ["Bridal", "Wedding Package", "Body Sculpting", "Social Media"],
          metrics: [
            { label: "Bridal Packages Sold", value: "140+" },
            { label: "Instagram Shares", value: "8,900+" },
            { label: "Average Package Value", value: "₹45,000" }
          ],
          deliverables: ["Bridal Campaign Suite", "WhatsApp Offer Broadcasts", "Clinic Posters"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "diva-flat-tummy",
          title: "Non-Surgical Flat Tummy Protocol",
          client: "Diva Healthcare Clinic",
          year: "2024",
          matchScore: "96%",
          duration: "Ad Campaign",
          badge: "Targeted Fat Loss",
          category: "Medical Aesthetics",
          thumbnail: "assets/diva-healthcare-flat-tummy.jpg",
          backdrop: "assets/diva-healthcare-flat-tummy.jpg",
          tagline: "Say goodbye to stubborn belly fat without surgery or downtime.",
          description: "Direct-response performance creative with clear visual contrast and irresistible introductory pricing.",
          tags: ["Fat Loss", "Performance Ad", "Health", "Conversion"],
          metrics: [
            { label: "Inbound Calls", value: "240+" },
            { label: "ROAS", value: "3.1x" },
            { label: "Cost Per Lead", value: "₹180" }
          ],
          deliverables: ["Performance Ads", "Offer Architecture", "Landing Creatives"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "diva-bhai-dooj",
          title: "Festive Festive Glow & Bhai Dooj Special",
          client: "Diva Healthcare Clinic",
          year: "2024",
          matchScore: "95%",
          duration: "Festive Suite",
          badge: "Festive Special",
          category: "Seasonal Campaign",
          thumbnail: "assets/diva-healthcare-bhai-dooj.jpg",
          backdrop: "assets/diva-healthcare-bhai-dooj.jpg",
          tagline: "Celebrate radiant sibling love with festive skincare gift packages.",
          description: "Warm, culturally resonant festive aesthetic combining gold marigold elements with premier clinical gift vouchers.",
          tags: ["Festive Ad", "Bhai Dooj", "Gift Vouchers", "Brand Trust"],
          metrics: [
            { label: "Gift Vouchers Sold", value: "280+" },
            { label: "Social Engagement", value: "12,000+" },
            { label: "Repeat Patients", value: "68%" }
          ],
          deliverables: ["Festive Campaign", "Digital Gift Card Design", "Story Series"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        }
      ]
    },

    {
      id: "media-entertainment-talkshow",
      title: "🎙️ The Darshan Shah Show Media & Broadcast Suite",
      subtitle: "Podcast key art, studio direction, and guest invitation campaigns for inspirational talk show",
      projects: [
        {
          id: "darshan-studio-guest",
          title: "Studio Broadcast & Guest Invitation Suite",
          client: "The Darshan Shah Show",
          year: "2024",
          matchScore: "99%",
          duration: "Studio Direction",
          badge: "Star Spotlight",
          category: "Broadcast Media",
          thumbnail: "assets/darshan-shah-studio-guest.jpg",
          backdrop: "assets/darshan-shah-studio-guest.jpg",
          tagline: "Your Story. Your Voice. Your Moment. High-caliber celebrity guest invitation suite.",
          description: "Commanding lighting, deep navy tones, and gold typography crafted to attract high-profile entrepreneurs, actors, and visionaries.",
          tags: ["Studio Branding", "Guest Invitation", "Celebrity", "Key Art"],
          metrics: [
            { label: "Guest Inbound DMs", value: "+180%" },
            { label: "Podcast Ranking", value: "Top 20" },
            { label: "Production Quality", value: "4K Broadcast" }
          ],
          deliverables: ["Key Art Suite", "VIP Guest Deck", "Studio Stage Assets"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "darshan-story-hearing",
          title: "The Art of Listening: Episode Key Art",
          client: "The Darshan Shah Show",
          year: "2024",
          matchScore: "97%",
          duration: "Episode Asset",
          badge: "Thought Leadership",
          category: "Media Key Art",
          thumbnail: "assets/darshan-shah-story-hearing.jpg",
          backdrop: "assets/darshan-shah-story-hearing.jpg",
          tagline: "Every story deserves to be heard. Intimate, focused interview spotlight framing.",
          description: "Focused acoustic depth, thoughtful studio posture, and cinematic spotlighting highlighting raw human storytelling.",
          tags: ["Episode Art", "Podcast Cover", "YouTube Thumbnail"],
          metrics: [
            { label: "Episode Views", value: "185,000+" },
            { label: "Retention Rate", value: "68%" },
            { label: "Audience Comments", value: "3,200+" }
          ],
          deliverables: ["YouTube Cover Suite", "Spotify Show Banners", "Reels Hooks"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "darshan-podcast-launch",
          title: "Official Podcast Season Launch",
          client: "The Darshan Shah Show",
          year: "2024",
          matchScore: "98%",
          duration: "Season Launch",
          badge: "Season 1",
          category: "Podcast Launch",
          thumbnail: "assets/darshan-shah-podcast-launch.jpg",
          backdrop: "assets/darshan-shah-podcast-launch.jpg",
          tagline: "Premier inspirational talk show season kickoff across all global audio networks.",
          description: "Bold announcement key art designed for billboards, Spotify marquee, Apple Podcasts, and social media blitz.",
          tags: ["Season Launch", "Podcast Suite", "Multichannel Blitz"],
          metrics: [
            { label: "Launch Day Downloads", value: "25,000+" },
            { label: "Social Reach", value: "350K+" },
            { label: "Channel Subscribers", value: "50,000+" }
          ],
          deliverables: ["Multichannel Launch Assets", "Audio Cover Art", "Billboard Mockups"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        }
      ]
    },

    {
      id: "brand-identity-logos",
      title: "🎨 Iconic Logo Systems & Corporate Identities",
      subtitle: "Bespoke logos, design tokens, precision vector geometry, and trust milestones",
      projects: [
        {
          id: "clonex-logo-brand",
          title: "CloneX Media Camera Shutter Mark",
          client: "CloneX Technologies",
          year: "2024",
          matchScore: "99%",
          duration: "Brand Identity",
          badge: "Master Logo",
          category: "Logo Design",
          thumbnail: "assets/clonex-logo-brand.jpg",
          backdrop: "assets/clonex-logo-brand.jpg",
          tagline: "Concentric optical camera shutter mark with neon ultraviolet gradient depth.",
          description: "Minimalist futuristic geometry representing the fusion of camera optics, video replication, and digital intelligence.",
          tags: ["Logo Design", "Optical Shutter", "Vector", "Identity System"],
          metrics: [
            { label: "Brand Recall", value: "94%" },
            { label: "Scale Precision", value: "16px to 4K" },
            { label: "Vector Formats", value: "SVG, AI, EPS" }
          ],
          deliverables: ["Master Vector Logo", "Brand Guidelines", "App Icon Tokens"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "greentech-rera-campaign",
          title: "Greentech Lifespace Trust Milestone",
          client: "Greentech Lifespace (Since 2008)",
          year: "2024",
          matchScore: "95%",
          duration: "Milestone Campaign",
          badge: "Corporate Trust",
          category: "Real Estate",
          thumbnail: "assets/greentech-rera-ad.jpg",
          backdrop: "assets/greentech-rera-ad.jpg",
          tagline: "Trust, Now Official. Landmark RERA approval announcement campaign for smart city lands.",
          description: "High-ticket investor creative highlighting government compliance, lush development grounds, and 16+ years of real estate trust.",
          tags: ["Real Estate", "RERA Milestone", "Prestige Copy", "Gold Seal"],
          metrics: [
            { label: "Investor DMs", value: "+230%" },
            { label: "Organic Reach", value: "14,500+" },
            { label: "Client Trust Index", value: "99%" }
          ],
          deliverables: ["Investor Announcement", "3D Gold Seal Badge", "Ad Creatives"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        },
        {
          id: "impressly-app-brand",
          title: "Impressly E-Commerce Smartphone Mark",
          client: "Impressly Digital Store",
          year: "2024",
          matchScore: "96%",
          duration: "App Identity",
          badge: "Mobile Retail",
          category: "UI Design",
          thumbnail: "assets/impressly-app-brand.jpg",
          backdrop: "assets/impressly-app-brand.jpg",
          tagline: "Vibrant shopping bag framed in sleek smartphone silhouette with golden spark accents.",
          description: "Engineered for maximum legibility in mobile app stores and notification badges across Android and iOS.",
          tags: ["App Icon", "Mobile Retail", "Vector Logo", "Design System"],
          metrics: [
            { label: "Tap-Through Rate", value: "+42%" },
            { label: "App Store Installs", value: "50K+" },
            { label: "Icon Variants", value: "iOS / Android" }
          ],
          deliverables: ["App Icon Grid", "Primary Wordmark", "Launch Splash UI"],
          links: { whatsapp: "https://wa.me/qr/KGEWR3H7AEQJM1" }
        }
      ]
    }
  ],

  // Skills & Studio Disciplines
  skills: [
    {
      category: "Brand Identity & Logo Systems",
      items: [
        { name: "Iconic Logo Design & Vector Geometry", level: "98%" },
        { name: "Brand Guidelines & Design Tokens", level: "95%" },
        { name: "Typography Hierarchy & Editorial Layout", level: "94%" },
        { name: "Color Science & High-Contrast Systems", level: "96%" }
      ]
    },
    {
      category: "Performance Advertising & Campaigns",
      items: [
        { name: "High-Converting Social Media Ads", level: "99%" },
        { name: "Multi-Slide Educational Carousels", level: "96%" },
        { name: "Offer Architecture & B1G1 Promotional Hooks", level: "94%" },
        { name: "Healthcare & Aesthetics Clinical Storytelling", level: "98%" }
      ]
    },
    {
      category: "Digital UI & Creative Direction",
      items: [
        { name: "Mobile App Icons & Storefront Visuals", level: "95%" },
        { name: "Web & Landing Page UI/UX", level: "92%" },
        { name: "Studio Key Art & YouTube Thumbnail Suites", level: "96%" },
        { name: "Commercial Print & Real Estate Collateral", level: "93%" }
      ]
    }
  ],

  // Official Client Testimonials
  testimonials: [
    {
      client: "Diva Healthcare Clinic (Bangalore)",
      quote: "Crown Creation transformed how patients perceive our aesthetic treatments. Their CoolSculpting and Salmon DNA campaigns established instant clinical trust and filled our appointment books across Bangalore.",
      author: "Dr. Ananya Sharma",
      title: "Lead Aesthetician & Director",
      avatar: "https://images.unsplash.com/photo-1594824813583-b9c1d0630b91?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: "Aesthetics Ad Campaigns"
    },
    {
      client: "The Darshan Shah Show",
      quote: "Crown Creation brought a broadcast-caliber cinematic polish to our podcast. The studio aesthetics, 3D typography, and key art helped us attract prominent thought leaders and celebrity guests seamlessly.",
      author: "Darshan Shah",
      title: "Host & Producer",
      avatar: "assets/darshan-shah-story-hearing.jpg",
      rating: 5,
      project: "Talk Show Key Art & Identity"
    },
    {
      client: "Gabardine Apparels",
      quote: "The visual energy Crown Creation brought to our stretch denim launch was electrifying. The ad creatives drove over 100 orders in the first 48 hours and achieved a 3.8x ROAS across social feeds.",
      author: "Rajesh Singhania",
      title: "Head of Growth",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: "Denim Performance Ads"
    },
    {
      client: "D-Vivid Consultant",
      quote: "Our study-abroad inquiries surged by 310% after Crown Creation redesigned our educational carousel campaigns. Complex visa policies were turned into clear, beautiful decision guides.",
      author: "Bhavin Patel",
      title: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: "Overseas Education Campaigns"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "What types of design projects does Crown Creation take on?",
      a: "Crown Creation specializes in 8 core creative disciplines: Brand Identity & Logo Design, High-Converting Performance Social Ads, Packaging & Unboxing Design, UI & Digital Product Experiences, Celebrity Podcast Key Art, and Omnichannel Marketing Suites."
    },
    {
      q: "What is your typical project timeline and turnaround?",
      a: "Performance ad campaign packs and promotional social suites typically take 1 to 2 weeks. Comprehensive brand identities and full design systems take 3 to 5 weeks with iterative concept reviews and organized vector handoffs."
    },
    {
      q: "How do we get started working with Crown Creation?",
      a: "You can click 'Direct WhatsApp Chat' or send an inquiry to crowncreations30@gmail.com. We'll discuss your brand goals, target deliverables, timeline, and share an instant transparent estimate."
    },
    {
      q: "What file formats and source deliverables are included upon completion?",
      a: "You receive clean, production-ready vector master files (AI, SVG, PDF, EPS), high-resolution web formats (WebP, PNG, JPG), ad-ready dimensions for Instagram/Facebook/LinkedIn, and a comprehensive Brand Guidelines handbook."
    }
  ]
};

// Expose globally for browser usage
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
