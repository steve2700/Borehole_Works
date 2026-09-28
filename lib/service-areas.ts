export const SITE_URL = "https://www.boreholeworks.co.za"
export const BUSINESS_ID = SITE_URL

type PhotoMeta = { caption: string; watermark: boolean }

// Real Borehole Works job photos from /gallery. Irrigation shots already carry
// their own watermark in the source file, so the droplet overlay is skipped.
export const GALLERY = {
  "/borehole_drilling_water_gushing.jpg": { caption: "Borehole drilling, water strike", watermark: true },
  "/borehole_drilling_rig_action.webp": { caption: "Drilling rig on site", watermark: true },
  "/pump_installation_hero.jpg": { caption: "Pump installation", watermark: true },
  "/water_pump_installation.jpg": { caption: "Submersible pump installation", watermark: true },
  "/pump_systems_boreholes.jpg": { caption: "Borehole pump system", watermark: true },
  "/borehole_pump_water_tank_installation.jpg": { caption: "Borehole pump feeding a storage tank", watermark: true },
  "/pressure_pumps_installations.jpg": { caption: "Pressure pump installation", watermark: true },
  "/pump_supply_replacements.jpg": { caption: "Pump breakdown and replacement", watermark: true },
  "/jojo_installation.jpg": { caption: "Water tank installation", watermark: true },
  "/jojo_tank_installation.jpg": { caption: "Tank on stand", watermark: true },
  "/jojo_tank_installation_randburg.jpg": { caption: "Tank installation, Randburg", watermark: true },
  "/3_jojo_tank_installation.jpg": { caption: "Multiple tank installation", watermark: true },
  "/water_pump_for_Jojo_tank.jpg": { caption: "Pump fitted for a tank system", watermark: true },
  "/eco_water_tanks_installation.jpg": { caption: "Eco water tank installation", watermark: true },
  "/green_water_tank_installation.jpg": { caption: "Water tank installation", watermark: true },
  "/pump_tank_storage_installation.jpg": { caption: "Pump installed for tank storage", watermark: true },
  "/solar_borehole_pump_aerial_view.jpg": { caption: "Solar borehole pump, aerial view", watermark: true },
  "/solar_borehole_tank_installation.jpg": { caption: "Solar-powered tank installation", watermark: true },
  "/solar_geyser_installation_pretoria.jpg": { caption: "Solar geyser installation, Pretoria", watermark: true },
  "/apollo_solar_geyser_installation.jpg": { caption: "Apollo solar geyser installation", watermark: true },
  "/pump_system_installation.webp": { caption: "Pump system installation", watermark: true },
  "/water-pump-tank-pipes-green.webp": { caption: "Pump and tank pipework", watermark: true },
  "/water-pump-tank-pipes-green-controls.webp": { caption: "Pump control system", watermark: true },
  "/Pump-and-tanks.jpg": { caption: "Pump and water tank installation", watermark: true },
  "/large_scale_drip_irrigation_farm.jpg": { caption: "Large scale drip irrigation", watermark: false },
  "/farm_workers_drip_irrigation.jpg": { caption: "Drip irrigated field", watermark: false },
  "/young_crops_drip_irrigation.jpg": { caption: "Young crops under drip irrigation", watermark: false },
  "/emergency_plumber_Gauteng.jpg": { caption: "Emergency plumbing callout", watermark: true },
  "/burst_pipe_centurion.jpg": { caption: "Burst pipe repair, Centurion", watermark: true },
  "/blocked_drains.jpg": { caption: "Blocked drain clearing", watermark: true },
  "/blocked_drains_pretoria.jpg": { caption: "Blocked drain clearing, Pretoria", watermark: true },
  "/geyser-installation.jpg": { caption: "Geyser installation", watermark: true },
  "/kwikot_geyser_installation.jpg": { caption: "Kwikot geyser installation", watermark: true },
} as const satisfies Record<string, PhotoMeta>

export type GalleryPhoto = keyof typeof GALLERY

export const SERVICES = {
  borehole: { name: "Borehole drilling", href: "/borehole-drilling" },
  pumps: { name: "Pump installation and repairs", href: "/pump-installation-repairs" },
  solar: { name: "Solar borehole pumps", href: "/solar-borehole-pumps" },
  tanks: { name: "JoJo water tanks", href: "/jojo-water-tank-installation" },
  irrigation: { name: "Irrigation systems", href: "/irrigation-systems" },
  plumbing: { name: "Plumbing", href: "/plumbing-services" },
  geysers: { name: "Geyser installation and repairs", href: "/geyser-installation-repairs" },
  drains: { name: "Blocked drains", href: "/blocked-drains-unblocking" },
  emergency: { name: "Burst pipes and emergencies", href: "/emergency-plumber-burst-pipes" },
} as const

export type ServiceKey = keyof typeof SERVICES

export const JOB_TYPES = [
  "No water or low pressure",
  "Borehole pump not working",
  "New borehole",
  "Water tank and pump",
  "Burst pipe or leak",
  "Geyser problem",
  "Blocked drain",
  "Irrigation or solar pump",
] as const

export type AreaSlug =
  | "pretoria"
  | "centurion"
  | "midrand"
  | "johannesburg"
  | "sandton"
  | "morningside"
  | "fourways"
  | "randburg"
  | "rosebank"
  | "roodepoort"
  | "bedfordview"

export interface ServiceArea {
  slug: AreaSlug
  name: string
  municipality: string
  character: string
  geo: { lat: number; lng: number }
  metaTitle: string
  metaDescription: string
  keywords: string[]
  headline: string
  lede: string
  heroPhotos: [GalleryPhoto, GalleryPhoto, GalleryPhoto]
  facts: { label: string; value: string }[]
  story: { heading: string; paragraphs: string[]; pullQuote: string; photo: GalleryPhoto }
  callouts: { service: ServiceKey; title: string; copy: string; photo: GalleryPhoto }[]
  suburbs: string[]
  faqs: { q: string; a: string }[]
  nearby: AreaSlug[]
  marquee: GalleryPhoto[]
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "pretoria",
    name: "Pretoria",
    municipality: "City of Tshwane",
    character: "Big gardens in the east, plots to the north, jacaranda roots everywhere.",
    geo: { lat: -25.7479, lng: 28.2293 },
    metaTitle: "Borehole Drilling, Pumps & Plumbing in Pretoria",
    metaDescription:
      "Borehole drilling, JoJo tanks, pump repairs, geysers and root-blocked drains across Pretoria East, North and Moreleta Park. Local Tshwane advice. Call 072 411 5472.",
    keywords: [
      "borehole drilling Pretoria",
      "borehole pump repairs Pretoria East",
      "JoJo tank installation Pretoria",
      "blocked drains Pretoria",
      "plumber Moreleta Park",
      "solar geyser Pretoria",
    ],
    headline: "Boreholes, pumps and plumbing across Pretoria",
    lede:
      "From the plots north of Montana to the big gardens of Moreleta Park, Pretoria properties ask a lot of their water. We drill it, pump it, store it and plumb it, and we pick up the phone when it stops.",
    heroPhotos: [
      "/solar_borehole_pump_aerial_view.jpg",
      "/solar_geyser_installation_pretoria.jpg",
      "/blocked_drains_pretoria.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Tshwane" },
      { label: "Ground", value: "Dolomite in parts, harder rock elsewhere" },
      { label: "Most asked for", value: "Boreholes and backup tanks" },
      { label: "Also common", value: "Root-blocked drains, geysers" },
    ],
    story: {
      heading: "What water looks like in Pretoria right now",
      paragraphs: [
        "Tshwane's supply has become harder to rely on. Planned maintenance, burst mains and low reservoirs mean many east and north Pretoria suburbs now plan for a day or two without municipal water, not just a few hours.",
        "The ground changes more than people expect. Parts of the south and east sit on dolomite, which can hold good water but needs careful siting, while other areas are harder rock where yield depends on finding the right fractures. That is why we look at a property before we quote a borehole.",
        "Pretoria also has a lot of trees. Jacarandas and old street trees are beautiful, but their roots find their way into clay drain lines, so root-blocked drains are one of the most common calls from older suburbs like Brooklyn, Arcadia and Sunnyside.",
      ],
      pullQuote: "In Pretoria East, most calls start with the same sentence: the municipal water is off again.",
      photo: "/blocked_drains_pretoria.jpg",
    },
    callouts: [
      {
        service: "borehole",
        title: "Boreholes for Pretoria East homes",
        copy: "Site look first, then drilling, casing and a yield test, so the pump that follows is sized to what the ground actually gives.",
        photo: "/borehole_drilling_water_gushing.jpg",
      },
      {
        service: "tanks",
        title: "Tanks that carry you through outages",
        copy: "A JoJo tank that fills when Tshwane's supply is on and feeds the house through a pressure pump when it is not.",
        photo: "/jojo_installation.jpg",
      },
      {
        service: "drains",
        title: "Root-blocked drains in older suburbs",
        copy: "We clear the line properly and tell you honestly if a section needs replacing, so you stop paying for the same callout.",
        photo: "/blocked_drains_pretoria.jpg",
      },
      {
        service: "geysers",
        title: "Solar and electric geysers",
        copy: "Pretoria gets serious sun. Solar geysers pay for themselves here faster than most places, and we handle the compliance certificate.",
        photo: "/solar_geyser_installation_pretoria.jpg",
      },
    ],
    suburbs: [
      "Montana", "Hatfield", "Menlyn", "Brooklyn", "Waterkloof", "Lynnwood", "Faerie Glen", "Garsfontein",
      "Moreleta Park", "Pretoria East", "Pretoria North", "Pretoria West", "Arcadia", "Sunnyside",
    ],
    faqs: [
      {
        q: "Do I need permission to drill a borehole in Pretoria?",
        a: "For normal household use you generally do not need a water use licence, but the City of Tshwane expects private boreholes to be registered, and stands on dolomite may need a geotechnical check first. We tell you what applies to your property before any drilling starts.",
      },
      {
        q: "Is borehole water in Pretoria safe to drink?",
        a: "It can be, but it should be tested rather than assumed. We recommend a lab test after drilling, and where it is needed we fit filtration so the water suits the house and not just the garden.",
      },
      {
        q: "Can a borehole run my whole house during an outage?",
        a: "Yes, if it is set up for it. We connect the borehole to a storage tank and a pressure pump so taps, showers and toilets keep working when the municipal supply is off.",
      },
      {
        q: "Do you work on smallholdings north and east of Pretoria?",
        a: "Yes. Plots need more water and often have weaker power supply, so we usually pair the borehole with a solar pump and larger storage.",
      },
      {
        q: "My drain keeps blocking. Is it tree roots?",
        a: "In older Pretoria suburbs it very often is. We clear the line and tell you whether the pipe can be repaired or needs a section replaced.",
      },
    ],
    nearby: ["centurion", "midrand", "sandton", "johannesburg"],
    marquee: [
      "/solar_borehole_pump_aerial_view.jpg",
      "/borehole_drilling_rig_action.webp",
      "/solar_geyser_installation_pretoria.jpg",
      "/blocked_drains_pretoria.jpg",
      "/jojo_tank_installation.jpg",
      "/pump_systems_boreholes.jpg",
    ],
  },
  {
    slug: "centurion",
    name: "Centurion",
    municipality: "City of Tshwane",
    character: "Dolomite ground, where a slow leak is never a small job.",
    geo: { lat: -25.8603, lng: 28.1894 },
    metaTitle: "Boreholes, Leak Repairs & Water Tanks in Centurion",
    metaDescription:
      "Borehole drilling on dolomite, urgent burst pipe and leak repairs, JoJo tanks and pressure pumps in Centurion, Irene, Eldoraigne and Rooihuiskraal. Call 072 411 5472.",
    keywords: [
      "borehole drilling Centurion",
      "dolomite borehole Centurion",
      "burst pipe Centurion",
      "plumber Centurion",
      "JoJo tanks Centurion",
      "pressure pump Irene",
    ],
    headline: "Borehole, pump and plumbing work in Centurion",
    lede:
      "Centurion sits between two metros and on some of the most talked-about ground in Gauteng. We know where drilling makes sense here, where it does not, and why a leak here cannot wait until next week.",
    heroPhotos: [
      "/borehole_drilling_rig_action.webp",
      "/burst_pipe_centurion.jpg",
      "/green_water_tank_installation.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Tshwane" },
      { label: "Ground", value: "Largely dolomitic" },
      { label: "Most asked for", value: "Leak repairs and backup water" },
      { label: "Also common", value: "Tanks, pressure pumps" },
    ],
    story: {
      heading: "Drilling and plumbing on Centurion's dolomite",
      paragraphs: [
        "Large parts of Centurion lie on dolomite. It is the reason the area is known for sinkholes, and it is also why groundwater here can be plentiful. Both facts matter when you are deciding whether to drill.",
        "On dolomitic land a borehole has to be sited and sealed with care, and some stands carry conditions from the City of Tshwane or a geotechnical report. We check first. If a borehole is not the right answer for your property, we say so and look at tanks and a pump instead.",
        "Leaking water is its own risk here. A burst pipe or a leaking geyser that runs for days can soften the ground under a house, which is why we treat leaks in Centurion as urgent rather than routine.",
      ],
      pullQuote: "On dolomite, a slow leak is not a small problem. It is the first thing we fix.",
      photo: "/burst_pipe_centurion.jpg",
    },
    callouts: [
      {
        service: "emergency",
        title: "Burst pipes and hidden leaks",
        copy: "Fast isolation, repair and a check for where the water has gone, because on dolomite the damage is not always where the leak is.",
        photo: "/burst_pipe_centurion.jpg",
      },
      {
        service: "borehole",
        title: "Carefully sited boreholes",
        copy: "Drilled where the ground allows it, cased and sealed properly so surface water cannot follow the hole down.",
        photo: "/borehole_drilling_rig_action.webp",
      },
      {
        service: "tanks",
        title: "Backup water without drilling",
        copy: "For stands where a borehole is not advisable, a tank with a bypass keeps the house running through Tshwane outages.",
        photo: "/green_water_tank_installation.jpg",
      },
      {
        service: "pumps",
        title: "Pressure pumps for double storeys",
        copy: "Sized to the house and the tank, mounted properly, and set up so you can switch back to mains in seconds.",
        photo: "/pressure_pumps_installations.jpg",
      },
    ],
    suburbs: [
      "Highveld", "Eldoraigne", "Irene", "Wierda Park", "Zwartkop", "Die Hoewes", "Rooihuiskraal", "Lyttelton", "Clubview",
    ],
    faqs: [
      {
        q: "Can I drill a borehole on dolomite in Centurion?",
        a: "Often yes, but not everywhere. Some properties carry restrictions from the City of Tshwane or a geotechnical report. We check first, and we drill and seal the hole properly so it does not create a path for surface water.",
      },
      {
        q: "Why do you treat leaks as an emergency in Centurion?",
        a: "Water soaking into dolomitic ground is one of the main triggers for sinkholes. Fixing a burst pipe or leaking geyser quickly protects the property, not just the water bill.",
      },
      {
        q: "What is the best backup if I cannot drill?",
        a: "A JoJo tank filled from the municipal supply, with a pressure pump and a bypass, keeps the house running through outages without any drilling.",
      },
      {
        q: "Do you cover Irene, Rooihuiskraal and Eldoraigne?",
        a: "Yes, along with every Centurion suburb listed on this page and the smallholdings on its edges.",
      },
    ],
    nearby: ["pretoria", "midrand", "sandton", "johannesburg"],
    marquee: [
      "/burst_pipe_centurion.jpg",
      "/green_water_tank_installation.jpg",
      "/pressure_pumps_installations.jpg",
      "/borehole_drilling_rig_action.webp",
      "/water_pump_for_Jojo_tank.jpg",
    ],
  },
  {
    slug: "midrand",
    name: "Midrand",
    municipality: "City of Johannesburg",
    character: "Estates, office parks and Kyalami horse plots on one stretched supply.",
    geo: { lat: -25.9992, lng: 28.1263 },
    metaTitle: "Borehole Drilling, Solar Pumps & Tanks in Midrand",
    metaDescription:
      "Boreholes, solar borehole pumps, JoJo tanks and pump repairs in Midrand, Kyalami, Carlswald, Waterfall and Halfway House. Estate-friendly installs. Call 072 411 5472.",
    keywords: [
      "borehole drilling Midrand",
      "borehole Kyalami",
      "solar borehole pump Midrand",
      "JoJo tank Midrand",
      "water outage Midrand backup",
      "pump repairs Halfway House",
    ],
    headline: "Water systems for Midrand homes, estates and plots",
    lede:
      "Midrand is where Joburg meets Tshwane, with estates, office parks and horse plots in Kyalami all sharing the same stretched supply. We set up water that keeps working when the mains do not.",
    heroPhotos: [
      "/3_jojo_tank_installation.jpg",
      "/borehole_drilling_water_gushing.jpg",
      "/solar_borehole_tank_installation.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Ground", value: "Granite, water in fractures" },
      { label: "Most asked for", value: "Boreholes and tank storage" },
      { label: "Also common", value: "Solar pumps on Kyalami plots" },
    ],
    story: {
      heading: "Why Midrand plans for outages",
      paragraphs: [
        "Midrand and Kyalami have lived through long municipal water outages in recent years, some lasting well past a weekend. Many households now treat storage and a borehole as part of the house, like a geyser or a gate motor.",
        "The area sits largely on granite. Water is found in fractures and weathered zones rather than one big underground lake, so yields can differ between neighbours. A proper site look, and a yield test after drilling, tell you what you actually have.",
        "Estates like Waterfall, Carlswald and Blue Hills each have their own rules about where tanks can stand and whether boreholes are allowed. We work to those rules and can prepare the details your HOA asks for.",
      ],
      pullQuote: "In Kyalami, water is not just for the house. It is for horses, paddocks and troughs, every day.",
      photo: "/solar_borehole_tank_installation.jpg",
    },
    callouts: [
      {
        service: "borehole",
        title: "Boreholes on granite ground",
        copy: "Realistic depth and yield estimates for your stand, then drilling, casing and testing done by our own crew.",
        photo: "/borehole_drilling_water_gushing.jpg",
      },
      {
        service: "solar",
        title: "Solar pumps for Kyalami plots",
        copy: "Water for troughs, paddocks and the house that keeps flowing through power cuts, with no running costs.",
        photo: "/solar_borehole_tank_installation.jpg",
      },
      {
        service: "tanks",
        title: "Linked tank storage",
        copy: "Several tanks joined together for real outage cover, placed to satisfy estate guidelines.",
        photo: "/3_jojo_tank_installation.jpg",
      },
      {
        service: "pumps",
        title: "Pump fault finding and replacement",
        copy: "Tripping, running dry or not starting at all. We find the cause before replacing anything.",
        photo: "/pump_installation_hero.jpg",
      },
    ],
    suburbs: [
      "Carlswald", "Halfway House", "Vorna Valley", "Glen Austin", "Noordwyk", "Halfway Gardens", "Kyalami", "Waterfall",
    ],
    faqs: [
      {
        q: "How deep are boreholes in Midrand?",
        a: "It depends on the granite. Some stands find water at moderate depth, others need to go deeper to reach a fracture. We give you a realistic estimate after a site look, not a number off a price list.",
      },
      {
        q: "Will my estate allow a borehole or tank?",
        a: "Many do, with conditions on placement, screening and noise. Send us your estate rules and we will plan the install to fit them.",
      },
      {
        q: "Can you set up water for horses in Kyalami?",
        a: "Yes. We size the pump, storage and float valves for livestock use, and a solar pump is often the most reliable choice on plots.",
      },
      {
        q: "What happens to my borehole during a power cut?",
        a: "A standard borehole pump stops when the power does. A solar pump, or a setup that fills a tank while power is available, keeps water moving.",
      },
    ],
    nearby: ["centurion", "fourways", "sandton", "pretoria", "johannesburg"],
    marquee: [
      "/borehole_drilling_water_gushing.jpg",
      "/3_jojo_tank_installation.jpg",
      "/solar_borehole_tank_installation.jpg",
      "/pump_installation_hero.jpg",
      "/borehole_pump_water_tank_installation.jpg",
    ],
  },
  {
    slug: "johannesburg",
    name: "Johannesburg",
    municipality: "City of Johannesburg",
    character: "An old, overworked network. Planning for the next outage is the job.",
    geo: { lat: -26.2041, lng: 28.0473 },
    metaTitle: "Plumber, Water Tanks & Boreholes in Johannesburg",
    metaDescription:
      "Emergency plumbing, burst pipes, JoJo tanks, pressure pumps and boreholes across Johannesburg, from Melville and Houghton to the CBD. Homes and businesses. Call 072 411 5472.",
    keywords: [
      "plumber Johannesburg",
      "emergency plumber Johannesburg",
      "water tank installation Johannesburg",
      "borehole Johannesburg",
      "pressure pump Johannesburg",
      "commercial water backup Johannesburg",
    ],
    headline: "Plumbing, pumps and water backup across Johannesburg",
    lede:
      "From Melville to Houghton and the CBD, Joburg's water network is old and under strain. We help homes and businesses stop depending on it completely.",
    heroPhotos: ["/Pump-and-tanks.jpg", "/emergency_plumber_Gauteng.jpg", "/pump_supply_replacements.jpg"],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "We cover", value: "Suburbs, CBD and commercial" },
      { label: "Most asked for", value: "Backup tanks, burst pipes" },
      { label: "Also common", value: "Boreholes, commercial storage" },
    ],
    story: {
      heading: "Living with Joburg's water network",
      paragraphs: [
        "Johannesburg Water has been dealing with ageing pipes, reservoir pressure and repeated outages across the city. For many households a day without water is no longer unusual, and a week is not unheard of.",
        "We look at each property and suggest the simplest thing that will actually work: a tank and pump for most homes, a borehole where the ground and the stand allow it, and proper repairs to the plumbing already in the walls.",
        "Businesses have the same problem with higher stakes. Restaurants, salons and small factories cannot trade without water, so we set up commercial storage and pumping that carries them through an outage.",
      ],
      pullQuote: "Planning for the next outage is cheaper than paying for the last one.",
      photo: "/emergency_plumber_Gauteng.jpg",
    },
    callouts: [
      {
        service: "emergency",
        title: "Burst pipes and emergency callouts",
        copy: "Tell us your suburb and what is happening, and you get a straight answer on when we can be there.",
        photo: "/emergency_plumber_Gauteng.jpg",
      },
      {
        service: "tanks",
        title: "Tank and pump backup systems",
        copy: "Storage that fills when supply is on, with a pump and bypass so the house or shop keeps running when it is off.",
        photo: "/Pump-and-tanks.jpg",
      },
      {
        service: "borehole",
        title: "Boreholes where the stand allows",
        copy: "Drilled, tested and plumbed into storage, so the water ends up in your taps and not only in the ground.",
        photo: "/borehole_pump_water_tank_installation.jpg",
      },
      {
        service: "pumps",
        title: "Pump breakdowns and replacements",
        copy: "Diagnosed on site, repaired where it makes sense, replaced with the right size when it does not.",
        photo: "/pump_supply_replacements.jpg",
      },
    ],
    suburbs: [
      "Parktown", "Melrose", "Hyde Park", "Bryanston", "Norwood", "Houghton", "Johannesburg CBD", "Melville",
      "Greenside", "Parkhurst", "Illovo",
    ],
    faqs: [
      {
        q: "Do you offer emergency plumbing in Johannesburg?",
        a: "Yes. Burst pipes, major leaks and geyser failures are priority callouts. Call, tell us your suburb, and we will give you a realistic arrival time.",
      },
      {
        q: "Can businesses in the CBD get backup water?",
        a: "Yes. We install commercial tanks and pump sets for shops, restaurants and small factories, sized to your actual daily use.",
      },
      {
        q: "Do I need to register my borehole with the City?",
        a: "The City of Johannesburg expects private boreholes to be registered. We explain the process and what you need when we quote.",
      },
      {
        q: "Can you fix low pressure without a tank?",
        a: "Sometimes. If the cause is a failing valve, a faulty pressure reducer or corroded pipes, repairing that may be enough. We check before recommending a tank.",
      },
    ],
    nearby: ["sandton", "rosebank", "randburg", "roodepoort", "bedfordview", "midrand"],
    marquee: [
      "/Pump-and-tanks.jpg",
      "/emergency_plumber_Gauteng.jpg",
      "/pump_supply_replacements.jpg",
      "/borehole_pump_water_tank_installation.jpg",
      "/pump_tank_storage_installation.jpg",
      "/blocked_drains.jpg",
    ],
  },
  {
    slug: "sandton",
    name: "Sandton",
    municipality: "City of Johannesburg",
    character: "Big homes, pools and gardens that notice every pressure drop.",
    geo: { lat: -26.1076, lng: 28.0567 },
    metaTitle: "Pressure Pumps, Boreholes & Water Tanks in Sandton",
    metaDescription:
      "Pressure pump systems, boreholes for gardens and pools, JoJo tanks and geysers in Sandton, Bryanston, Rivonia and Sunninghill. Quiet, tidy installs. Call 072 411 5472.",
    keywords: [
      "pressure pump Sandton",
      "borehole Sandton",
      "water tank installation Sandton",
      "low water pressure Bryanston",
      "plumber Rivonia",
      "geyser replacement Sandton",
    ],
    headline: "Pumps, pressure and borehole systems in Sandton",
    lede:
      "Big houses, pools and gardens use a lot of water, and they notice fast when the pressure drops. Most of our Sandton work is about keeping supply steady when the municipal side is not.",
    heroPhotos: [
      "/pressure_pumps_installations.jpg",
      "/pump_tank_storage_installation.jpg",
      "/pump_systems_boreholes.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Ground", value: "Granite dome" },
      { label: "Most asked for", value: "Pressure pumps and booster sets" },
      { label: "Also common", value: "Boreholes for gardens and pools" },
    ],
    story: {
      heading: "The Sandton pressure problem",
      paragraphs: [
        "Larger Sandton homes often have long pipe runs, bathrooms on two floors and several people showering at once. Add a municipal supply that dips at peak times or cuts out entirely, and weak pressure becomes the main complaint.",
        "The fix is usually a system, not a single part: a storage tank that fills when supply is there, a correctly sized pressure pump, and a bypass so you can switch back to mains without calling anyone. Where the stand allows, a borehole takes over the garden and pool.",
        "We work in occupied homes and busy complexes, so noisy work, water shut-offs and access are planned in advance, and the site is left clean.",
      ],
      pullQuote: "A good pressure system is one you forget exists, until the street goes dry and your showers do not.",
      photo: "/pump_tank_storage_installation.jpg",
    },
    callouts: [
      {
        service: "pumps",
        title: "Pressure and booster pumps",
        copy: "Measured first, then sized to the house, mounted quietly and set up with a simple bypass.",
        photo: "/pressure_pumps_installations.jpg",
      },
      {
        service: "tanks",
        title: "Storage that fills itself",
        copy: "Tanks that top up whenever supply is available, so an outage becomes something you read about, not live through.",
        photo: "/pump_tank_storage_installation.jpg",
      },
      {
        service: "borehole",
        title: "Boreholes for pools and gardens",
        copy: "Take the heaviest water users off the municipal meter and keep the garden green through restrictions.",
        photo: "/pump_systems_boreholes.jpg",
      },
      {
        service: "geysers",
        title: "Geyser replacements",
        copy: "Burst, leaking or simply too small for the household. Replaced properly, with the compliance certificate.",
        photo: "/geyser-installation.jpg",
      },
    ],
    suburbs: ["Rivonia", "Sunninghill", "Bryanston", "Hyde Park", "Sandown", "Atholl", "Inanda", "Morningside"],
    faqs: [
      {
        q: "Why is my water pressure so low upstairs?",
        a: "Usually a mix of supply pressure, pipe size and height. We measure it before recommending anything, and often a pressure pump with a small tank solves it without replumbing the house.",
      },
      {
        q: "Can a borehole fill my pool?",
        a: "Yes, and it is one of the best uses for one. We plumb the borehole to the pool and garden separately from the house, so drinking water stays on mains or treated supply.",
      },
      {
        q: "Will a pressure pump be noisy?",
        a: "A correctly sized, well-mounted pump is quiet. We place it away from bedrooms where possible and fit it on proper mounts.",
      },
      {
        q: "Do you work in complexes and body corporates?",
        a: "Yes. We quote shared tank and pump systems and work with the managing agent on access and approvals.",
      },
    ],
    nearby: ["morningside", "rosebank", "fourways", "randburg", "midrand"],
    marquee: [
      "/pressure_pumps_installations.jpg",
      "/pump_systems_boreholes.jpg",
      "/pump_tank_storage_installation.jpg",
      "/water-pump-tank-pipes-green.webp",
      "/geyser-installation.jpg",
    ],
  },
  {
    slug: "morningside",
    name: "Morningside",
    municipality: "City of Johannesburg",
    character: "Clusters and complexes sharing one connection, plus older freestanding homes.",
    geo: { lat: -26.0869, lng: 28.061 },
    metaTitle: "Shared Water Tanks, Pumps & Plumbing in Morningside",
    metaDescription:
      "Shared tank and pump systems for complexes and body corporates, old pipe replacement and geysers in Morningside, Benmore, Strathavon and Sandown. Call 072 411 5472.",
    keywords: [
      "plumber Morningside",
      "complex water tank Morningside",
      "body corporate water backup Sandton",
      "pipe replacement Morningside",
      "geyser Morningside",
      "pressure pump Benmore",
    ],
    headline: "Plumbing and backup water for Morningside",
    lede:
      "Morningside is cluster homes, townhouse complexes and older freestanding houses on big stands. Each needs a different answer when the water goes off.",
    heroPhotos: [
      "/water-pump-tank-pipes-green-controls.webp",
      "/pump_system_installation.webp",
      "/kwikot_geyser_installation.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Housing", value: "Clusters, complexes, freestanding" },
      { label: "Most asked for", value: "Shared tank and pump systems" },
      { label: "Also common", value: "Old pipe replacement" },
    ],
    story: {
      heading: "Sectional title, shared supply",
      paragraphs: [
        "A lot of Morningside lives in complexes, where one municipal connection feeds many units. When pressure drops, the units at the end of the line feel it first.",
        "For body corporates we plan shared systems: bulk tanks, a pump set sized for every unit, and simple controls the managing agent can check. For freestanding homes near Strathavon and Benmore, a private tank and pressure pump is usually enough.",
        "The older freestanding houses also have older plumbing. Galvanised pipes corrode from the inside, which shows up as brown water, poor pressure and pinhole leaks. We replace those sections rather than patch them.",
      ],
      pullQuote: "In a complex, the right tank size is decided by the busiest morning, not the average day.",
      photo: "/pump_system_installation.webp",
    },
    callouts: [
      {
        service: "tanks",
        title: "Shared tanks for complexes",
        copy: "Bulk storage and a pump set for the whole complex, explained clearly to trustees before anything is installed.",
        photo: "/pump_system_installation.webp",
      },
      {
        service: "pumps",
        title: "Pump sets with simple controls",
        copy: "Controls a managing agent can read at a glance, and a bypass that anyone can switch.",
        photo: "/water-pump-tank-pipes-green-controls.webp",
      },
      {
        service: "plumbing",
        title: "Replacing old galvanised pipe",
        copy: "Section by section, starting with the worst runs, so pressure and water colour improve without a full replumb at once.",
        photo: "/water-pump-tank-pipes-green.webp",
      },
      {
        service: "geysers",
        title: "Geysers in units and homes",
        copy: "Replacements, valves and leaks, with the certificate your insurer and body corporate will ask for.",
        photo: "/kwikot_geyser_installation.jpg",
      },
    ],
    suburbs: ["Sandton Central", "Atholl", "Inanda", "Sandown", "Benmore", "Strathavon"],
    faqs: [
      {
        q: "Can a body corporate install a shared water backup?",
        a: "Yes. We quote the full system, explain it at a trustees meeting if needed, and install it with as little disruption to residents as possible.",
      },
      {
        q: "How big should a complex's tank be?",
        a: "It depends on the number of units, occupants and how long you want to be covered. We work it out from real usage rather than guessing, then size the pump to match.",
      },
      {
        q: "Why is my water brown after an outage?",
        a: "Sediment stirred up in the mains is common when supply returns. If it keeps happening, old galvanised pipes inside the property are often the cause.",
      },
      {
        q: "Do you do geysers in Morningside?",
        a: "Yes. Geyser replacements, valves, leaks and new installs, with a certificate of compliance where it is required.",
      },
    ],
    nearby: ["sandton", "rosebank", "randburg", "fourways"],
    marquee: [
      "/water-pump-tank-pipes-green-controls.webp",
      "/pump_system_installation.webp",
      "/water-pump-tank-pipes-green.webp",
      "/kwikot_geyser_installation.jpg",
      "/eco_water_tanks_installation.jpg",
    ],
  },
  {
    slug: "fourways",
    name: "Fourways",
    municipality: "City of Johannesburg",
    character: "Estates with strict rules and gardens that drink most of the water.",
    geo: { lat: -26.021, lng: 28.006 },
    metaTitle: "Water Tanks, Irrigation & Boreholes in Fourways",
    metaDescription:
      "Estate-approved JoJo tank installs, garden irrigation from borehole or tank, and pump systems in Fourways, Dainfern, Lonehill and Cedar Lakes. Call 072 411 5472.",
    keywords: [
      "water tank installation Fourways",
      "JoJo tank Dainfern",
      "irrigation Fourways",
      "borehole Fourways",
      "estate water tank Lonehill",
      "pump installation Fourways",
    ],
    headline: "Tanks, pumps and irrigation for Fourways estates",
    lede:
      "Fourways grew fast, and much of it is estates with big gardens and strict rules. We install water systems that suit both.",
    heroPhotos: [
      "/eco_water_tanks_installation.jpg",
      "/jojo_tank_installation.jpg",
      "/large_scale_drip_irrigation_farm.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Ground", value: "Granite dome" },
      { label: "Most asked for", value: "Tanks within estate rules" },
      { label: "Also common", value: "Garden irrigation, boreholes" },
    ],
    story: {
      heading: "Estate living, estate rules",
      paragraphs: [
        "Dainfern, Cedar Lakes, Lonehill and the estates around them mostly have their own approval process for anything installed outside the house. Tank position, colour, screening and pump noise can all be specified.",
        "We plan installs around those rules: tanks placed where they are screened, pumps in housings, and neat pipework that passes an estate inspection. If your HOA needs product sheets or a layout, we provide them.",
        "Gardens in Fourways are large, and irrigation is where much of the water goes. Moving the garden onto borehole or stored water is often the single biggest saving on a municipal bill.",
      ],
      pullQuote: "The fastest way to cut a Fourways water bill is to take the garden off the municipal meter.",
      photo: "/jojo_tank_installation.jpg",
    },
    callouts: [
      {
        service: "tanks",
        title: "Tanks that pass estate approval",
        copy: "Placed, screened and plumbed to your estate guidelines, with the paperwork your HOA wants to see.",
        photo: "/eco_water_tanks_installation.jpg",
      },
      {
        service: "irrigation",
        title: "Drip irrigation for big gardens",
        copy: "The same drip principles we use on farms, scaled down to beds, hedges and trees. Water at the roots, far less wasted.",
        photo: "/large_scale_drip_irrigation_farm.jpg",
      },
      {
        service: "borehole",
        title: "Boreholes feeding the garden",
        copy: "Borehole to tank to irrigation controller, so the pump is not starting and stopping all day.",
        photo: "/borehole_pump_water_tank_installation.jpg",
      },
      {
        service: "pumps",
        title: "Pumps for tank systems",
        copy: "Quiet, housed pumps that give normal pressure from a tank without upsetting the neighbours.",
        photo: "/water_pump_for_Jojo_tank.jpg",
      },
    ],
    suburbs: ["Lonehill", "Dainfern", "Broadacres", "Cedar Lakes", "Chartwell", "Pineslopes", "Douglasdale", "Magaliessig"],
    faqs: [
      {
        q: "Will my estate approve a JoJo tank?",
        a: "Most do if it is placed and screened correctly. We check your estate guidelines first and can send the product details your HOA needs.",
      },
      {
        q: "Is drip irrigation worth it for a home garden?",
        a: "For beds, hedges and trees, yes. It puts water at the roots and wastes far less than sprayers, which matters more when it comes from a tank or borehole.",
      },
      {
        q: "Can I run my irrigation from a borehole?",
        a: "Yes. We connect the borehole to the irrigation controller, usually through a tank so the pump runs in longer, healthier cycles.",
      },
      {
        q: "Do you cover Broadacres and Chartwell?",
        a: "Yes, along with the smallholdings further out toward Lanseria.",
      },
    ],
    nearby: ["midrand", "sandton", "randburg", "roodepoort"],
    marquee: [
      "/eco_water_tanks_installation.jpg",
      "/jojo_tank_installation.jpg",
      "/large_scale_drip_irrigation_farm.jpg",
      "/water_pump_for_Jojo_tank.jpg",
      "/borehole_pump_water_tank_installation.jpg",
    ],
  },
  {
    slug: "randburg",
    name: "Randburg",
    municipality: "City of Johannesburg",
    character: "High ground around Northcliff that loses pressure first.",
    geo: { lat: -26.0936, lng: 28.0064 },
    metaTitle: "JoJo Tanks, Pressure Pumps & Plumbers in Randburg",
    metaDescription:
      "JoJo tank and pressure pump systems for high-lying Northcliff and Blairgowrie, plus geysers and burst pipes across Randburg, Ferndale and Fairland. Call 072 411 5472.",
    keywords: [
      "JoJo tank installation Randburg",
      "low water pressure Northcliff",
      "plumber Randburg",
      "pressure pump Randburg",
      "geyser replacement Ferndale",
      "burst pipe Randburg",
    ],
    headline: "Water tanks, pumps and plumbing in Randburg",
    lede:
      "Randburg runs from the high ground of Northcliff down to the busy streets of Ferndale. When supply drops, the high ground usually feels it first.",
    heroPhotos: [
      "/apollo_solar_geyser_installation.jpg",
      "/jojo_tank_installation_randburg.jpg",
      "/emergency_plumber_Gauteng.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Terrain", value: "Ridges and high-lying suburbs" },
      { label: "Most asked for", value: "Tanks with pressure pumps" },
      { label: "Also common", value: "Geysers, burst pipes" },
    ],
    story: {
      heading: "High ground, low pressure",
      paragraphs: [
        "Northcliff Ridge is one of the highest points in Johannesburg. Homes on and around it, and in the higher parts of Blairgowrie and Fairland, tend to lose pressure early whenever reservoirs run low.",
        "A tank that fills overnight and a pressure pump that serves the house during the day is the setup we fit most here. It is simple, it works through planned and unplanned outages, and it does not need a borehole.",
        "Randburg also has plenty of older homes with original plumbing, which means worn geysers, tired valves and burst pipes. We aim to fix those the same week, not the same month.",
      ],
      pullQuote: "A two-day tank is a sensible starting point for most Randburg households.",
      photo: "/jojo_tank_installation_randburg.jpg",
    },
    callouts: [
      {
        service: "tanks",
        title: "Tank systems for high-lying homes",
        copy: "Slim or standard tanks that fill when pressure is there and carry the house when it is not.",
        photo: "/jojo_tank_installation_randburg.jpg",
      },
      {
        service: "pumps",
        title: "Pressure pumps sized to the house",
        copy: "Enough pressure for a shower upstairs and a tap downstairs at the same time, without hammering the pipes.",
        photo: "/water_pump_installation.jpg",
      },
      {
        service: "geysers",
        title: "Solar and electric geysers",
        copy: "Replacements for burst or failing geysers, and solar upgrades for homes with good roof exposure.",
        photo: "/apollo_solar_geyser_installation.jpg",
      },
      {
        service: "emergency",
        title: "Burst pipes in older homes",
        copy: "Isolated, repaired and checked, with honest advice on whether the rest of that pipe run is next.",
        photo: "/emergency_plumber_Gauteng.jpg",
      },
    ],
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff", "Boskruin", "Fairland", "Bordeaux", "Randpark Ridge", "Fontainebleau"],
    faqs: [
      {
        q: "Why does Northcliff lose water before other areas?",
        a: "Higher suburbs sit closer to the limit of what the reservoirs can push, so when levels drop, pressure there falls first. Storage on your property evens that out.",
      },
      {
        q: "What size tank do I need?",
        a: "A family of four uses roughly 600 to 1,000 litres a day on essentials. A 2,500 to 5,000 litre tank covers most homes for a day or two.",
      },
      {
        q: "Do I need a pump with my tank?",
        a: "Almost always. Unless the tank stands high on a strong stand, a pressure pump is what gives you normal pressure at the taps.",
      },
      {
        q: "Can you replace my geyser with a solar one?",
        a: "Yes. We install solar and conventional geysers, including the certificate of compliance.",
      },
    ],
    nearby: ["fourways", "sandton", "roodepoort", "rosebank", "johannesburg"],
    marquee: [
      "/jojo_tank_installation_randburg.jpg",
      "/water_pump_installation.jpg",
      "/apollo_solar_geyser_installation.jpg",
      "/emergency_plumber_Gauteng.jpg",
      "/jojo_installation.jpg",
    ],
  },
  {
    slug: "rosebank",
    name: "Rosebank",
    municipality: "City of Johannesburg",
    character: "Beautiful old houses, older pipes and very big trees.",
    geo: { lat: -26.1467, lng: 28.0436 },
    metaTitle: "Blocked Drains, Pipe Replacement & Geysers in Rosebank",
    metaDescription:
      "Root-blocked drains, old galvanised pipe replacement, geysers and compact tank setups in Rosebank, Parkhurst, Greenside, Saxonwold and Westcliff. Call 072 411 5472.",
    keywords: [
      "blocked drains Rosebank",
      "plumber Parkhurst",
      "tree roots drain Greenside",
      "pipe replacement Saxonwold",
      "geyser Rosebank",
      "plumber Westcliff",
    ],
    headline: "Plumbing and drains for Rosebank's older homes",
    lede:
      "Parkhurst, Greenside, Saxonwold and Westcliff are full of beautiful old houses, and the pipes to match. That is most of what we do here.",
    heroPhotos: ["/kwikot_geyser_installation.jpg", "/blocked_drains.jpg", "/water_pump_for_Jojo_tank.jpg"],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Housing", value: "Older and heritage homes" },
      { label: "Most asked for", value: "Drains and pipe replacement" },
      { label: "Also common", value: "Geysers, compact tank setups" },
    ],
    story: {
      heading: "Old houses, old pipes, big trees",
      paragraphs: [
        "Many homes around Rosebank were built long before plastic pipe. Original galvanised steel rusts from the inside over the decades, which is why pressure drops, water discolours and leaks appear inside walls.",
        "The same suburbs sit under one of the largest urban forests in the world. Tree roots follow moisture into old clay sewer lines, crack the joints, and cause the slow drains and backups we are called out for most often.",
        "Newer water systems still matter here. Tanks and pressure pumps fit well on smaller stands when they are planned properly, and we keep installs neat on properties where appearance matters.",
      ],
      pullQuote: "When a Parkhurst drain blocks twice in a year, it is rarely bad luck. It is usually roots.",
      photo: "/blocked_drains.jpg",
    },
    callouts: [
      {
        service: "drains",
        title: "Root-blocked sewer lines",
        copy: "Cleared properly, with a clear answer on whether the line needs a section replaced before it blocks again.",
        photo: "/blocked_drains.jpg",
      },
      {
        service: "geysers",
        title: "Geysers in older roofs",
        copy: "Replacements and new drip trays in tight, older roof spaces, done without damaging ceilings.",
        photo: "/kwikot_geyser_installation.jpg",
      },
      {
        service: "emergency",
        title: "Leaks inside old walls",
        copy: "Traced, opened up with care and repaired, then closed and left tidy on heritage finishes.",
        photo: "/emergency_plumber_Gauteng.jpg",
      },
      {
        service: "tanks",
        title: "Compact tanks for small stands",
        copy: "Slim-line tanks along side walls, with a pump and pipework planned to stay out of sight.",
        photo: "/water_pump_for_Jojo_tank.jpg",
      },
    ],
    suburbs: ["Parktown", "Saxonwold", "Dunkeld", "Forest Town", "Parkhurst", "Greenside", "Westcliff", "Killarney"],
    faqs: [
      {
        q: "Should I replace old galvanised pipes or repair them?",
        a: "If there are several leaks or poor pressure throughout the house, replacement usually costs less over time. We can replace in stages, starting with the worst sections.",
      },
      {
        q: "Can you tell if tree roots are in my drain?",
        a: "Recurring blockages in the same line are the main sign. We clear it and advise whether the pipe needs a section repaired or replaced.",
      },
      {
        q: "Is there space for a tank on a small Rosebank stand?",
        a: "Usually. Slim-line tanks fit along side walls, and we plan the pump and pipework so it stays tidy.",
      },
      {
        q: "Do you work in Saxonwold and Westcliff heritage homes?",
        a: "Yes, and we take care with older finishes, walls and floors when plumbing has to be opened up.",
      },
    ],
    nearby: ["sandton", "morningside", "johannesburg", "randburg"],
    marquee: [
      "/blocked_drains.jpg",
      "/kwikot_geyser_installation.jpg",
      "/emergency_plumber_Gauteng.jpg",
      "/water_pump_for_Jojo_tank.jpg",
      "/geyser-installation.jpg",
    ],
  },
  {
    slug: "roodepoort",
    name: "Roodepoort",
    municipality: "City of Johannesburg",
    character: "Suburbs in Florida, plots in Ruimsig and Honeydew, sun everywhere.",
    geo: { lat: -26.1625, lng: 27.8725 },
    metaTitle: "Borehole Drilling, Solar Pumps & Irrigation in Roodepoort",
    metaDescription:
      "Borehole drilling with solar pumps, irrigation and water tanks for Ruimsig and Honeydew plots, plus plumbing across Florida, Weltevredenpark and Constantia Kloof. Call 072 411 5472.",
    keywords: [
      "borehole drilling Roodepoort",
      "solar borehole pump Ruimsig",
      "borehole Honeydew",
      "irrigation West Rand",
      "water tank Roodepoort",
      "plumber Florida Roodepoort",
    ],
    headline: "Boreholes and solar pumps for Roodepoort and the West Rand",
    lede:
      "Roodepoort runs from established suburbs like Florida to the plots of Ruimsig and Honeydew. The bigger the stand, the more a borehole makes sense.",
    heroPhotos: [
      "/solar_borehole_tank_installation.jpg",
      "/young_crops_drip_irrigation.jpg",
      "/borehole_pump_water_tank_installation.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Johannesburg" },
      { label: "Ground", value: "Changes street to street" },
      { label: "Most asked for", value: "Boreholes with solar pumps" },
      { label: "Also common", value: "Irrigation, tanks" },
    ],
    story: {
      heading: "Plots, estates and the western edge",
      paragraphs: [
        "Ruimsig, Honeydew and the areas toward Muldersdrift have plenty of smallholdings and large estates, where lawns, horses and vegetable gardens use far more water than a typical suburban house.",
        "On those properties we usually pair a borehole with a solar pump. It keeps working through power cuts, costs nothing to run once installed, and fills a tank during the day for use at night.",
        "Closer in, suburbs like Florida, Weltevredenpark and Constantia Kloof are more about household backup and plumbing: tanks with pressure pumps, geysers, and pipes that have been in the ground for decades.",
      ],
      pullQuote: "On a West Rand plot, the sun is the cheapest pump operator you will ever hire.",
      photo: "/solar_borehole_tank_installation.jpg",
    },
    callouts: [
      {
        service: "solar",
        title: "Solar borehole pumps",
        copy: "Panels, controller and pump matched to your borehole's yield, filling a tank all day with no power bill.",
        photo: "/solar_borehole_tank_installation.jpg",
      },
      {
        service: "borehole",
        title: "Drilling on plots and estates",
        copy: "Site look, drilling, casing and yield test, then plumbed into storage so the water is ready to use.",
        photo: "/borehole_pump_water_tank_installation.jpg",
      },
      {
        service: "irrigation",
        title: "Irrigation for gardens and small farms",
        copy: "Drip and sprinkler systems fed from borehole or tank, from vegetable gardens to commercial plots.",
        photo: "/young_crops_drip_irrigation.jpg",
      },
      {
        service: "tanks",
        title: "Household tank backup",
        copy: "For the suburbs closer in: tank, pump and bypass so the house keeps running when the mains do not.",
        photo: "/jojo_tank_installation.jpg",
      },
    ],
    suburbs: [
      "Wilgeheuwel", "Honeydew", "Constantia Kloof", "Ruimsig", "Featherbrooke Estate", "Radiokop", "Florida",
      "Weltevredenpark", "Little Falls", "Strubensvalley", "Laser Park", "Quellerina",
    ],
    faqs: [
      {
        q: "Is a solar borehole pump worth it on a plot?",
        a: "On most smallholdings, yes. There are no running costs, it works through power cuts, and with a tank it gives you water around the clock.",
      },
      {
        q: "Can you set up irrigation for a vegetable garden or small farm?",
        a: "Yes. We design drip and sprinkler systems fed from a borehole or tank, from home gardens to small commercial plots.",
      },
      {
        q: "How long does a borehole and solar pump install take?",
        a: "Drilling is usually a day or two. Once the yield is tested, the pump, panels and tank can often follow within a few days.",
      },
      {
        q: "Do you cover Featherbrooke and Little Falls?",
        a: "Yes, along with every Roodepoort suburb listed on this page.",
      },
    ],
    nearby: ["randburg", "fourways", "johannesburg", "midrand"],
    marquee: [
      "/solar_borehole_tank_installation.jpg",
      "/young_crops_drip_irrigation.jpg",
      "/farm_workers_drip_irrigation.jpg",
      "/borehole_pump_water_tank_installation.jpg",
      "/solar_borehole_pump_aerial_view.jpg",
    ],
  },
  {
    slug: "bedfordview",
    name: "Bedfordview",
    municipality: "City of Ekurhuleni",
    character: "Hilly homes and East Rand industry drawing on the same supply.",
    geo: { lat: -26.1789, lng: 28.1364 },
    metaTitle: "Water Tanks, Pumps & Plumbing in Bedfordview & East Rand",
    metaDescription:
      "Commercial and home water tanks, pump sets, geysers and plumbing in Bedfordview, Edenvale, Germiston, Kempton Park, Boksburg and Benoni. Call 072 411 5472.",
    keywords: [
      "water tank installation Bedfordview",
      "plumber Edenvale",
      "commercial water tanks Germiston",
      "pump installation Kempton Park",
      "geyser Boksburg",
      "water backup East Rand",
    ],
    headline: "Water tanks, pumps and plumbing in Bedfordview and the East Rand",
    lede:
      "Bedfordview, Edenvale, Germiston and Kempton Park fall under Ekurhuleni, with homes, warehouses and workshops all drawing on the same supply.",
    heroPhotos: [
      "/green_water_tank_installation.jpg",
      "/water-pump-tank-pipes-green.webp",
      "/geyser-installation.jpg",
    ],
    facts: [
      { label: "Municipality", value: "City of Ekurhuleni" },
      { label: "We cover", value: "Homes and light industry" },
      { label: "Most asked for", value: "Commercial tanks and pumps" },
      { label: "Also common", value: "Geysers, leak repairs" },
    ],
    story: {
      heading: "Homes and business on the East Rand",
      paragraphs: [
        "Ekurhuleni has its own outage pattern, separate from Joburg's, and the metro is home to a lot of light industry. When the water goes off here, it affects production as much as households.",
        "For businesses in Germiston and Kempton Park we install larger storage and pump sets that keep bathrooms, kitchens and processes running. For homes in Bedfordview and Edenvale, a tank and pressure pump is usually the right starting point.",
        "Bedfordview's hills mean pressure changes from street to street. We measure it on site before recommending anything, so the pump we fit is matched to your property.",
      ],
      pullQuote: "A warehouse without water is a warehouse with its doors closed.",
      photo: "/water-pump-tank-pipes-green.webp",
    },
    callouts: [
      {
        service: "tanks",
        title: "Commercial storage",
        copy: "Linked tanks sized for staff numbers and process water, with automatic changeover so nobody has to remember to switch.",
        photo: "/green_water_tank_installation.jpg",
      },
      {
        service: "pumps",
        title: "Pump sets and controls",
        copy: "Pumps matched to measured pressure and demand, with controls that are easy to check on a walk-round.",
        photo: "/water-pump-tank-pipes-green-controls.webp",
      },
      {
        service: "geysers",
        title: "Geysers for homes and staff kitchens",
        copy: "Burst, leaking or undersized geysers replaced, with a certificate of compliance.",
        photo: "/geyser-installation.jpg",
      },
      {
        service: "drains",
        title: "Blocked drains",
        copy: "Household and commercial drains cleared, and the cause found so it does not come straight back.",
        photo: "/blocked_drains.jpg",
      },
    ],
    suburbs: ["Edenvale", "Germiston", "Kensington", "Kempton Park", "Boksburg", "Benoni"],
    faqs: [
      {
        q: "Do you install water backup for factories and warehouses?",
        a: "Yes. We size storage and pumps for staff numbers and any process water, and can fit automatic changeover so you do not have to switch anything by hand.",
      },
      {
        q: "Is Bedfordview under Joburg or Ekurhuleni?",
        a: "Ekurhuleni. That matters for outage notices and any borehole registration, and we work in both metros.",
      },
      {
        q: "Can you install several tanks together?",
        a: "Yes. Linked tanks give you more storage in a smaller footprint and are common on commercial sites.",
      },
      {
        q: "Do you cover Boksburg and Benoni?",
        a: "Yes, along with Kempton Park, Germiston and the rest of the suburbs listed here.",
      },
    ],
    nearby: ["johannesburg", "sandton", "rosebank", "midrand"],
    marquee: [
      "/green_water_tank_installation.jpg",
      "/water-pump-tank-pipes-green.webp",
      "/water-pump-tank-pipes-green-controls.webp",
      "/geyser-installation.jpg",
      "/3_jojo_tank_installation.jpg",
    ],
  },
]

export function getServiceArea(slug: AreaSlug): ServiceArea {
  const area = SERVICE_AREAS.find((a) => a.slug === slug)
  if (!area) throw new Error(`Unknown service area: ${slug}`)
  return area
}

export function areaUrl(slug: AreaSlug) {
  return `${SITE_URL}/service-areas/${slug}`
}

export function photoAlt(src: GalleryPhoto, areaName?: string) {
  const caption = GALLERY[src].caption
  return areaName ? `${caption} - Borehole Works, serving ${areaName}` : `${caption} - Borehole Works`
}
