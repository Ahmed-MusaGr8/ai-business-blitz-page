
export interface Country {
  code: string;
  name: string;
  flag: string;
  states: State[];
  cities: string[];
}

export interface State {
  name: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    states: [
      { name: "California", cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Oakland"] },
      { name: "New York", cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"] },
      { name: "Texas", cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"] },
      { name: "Florida", cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"] }
    ],
    cities: ["Los Angeles", "New York City", "Houston", "Miami", "San Francisco", "Dallas", "Austin", "Orlando", "San Diego", "Buffalo"]
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    states: [
      { name: "Ontario", cities: ["Toronto", "Ottawa", "Hamilton", "London", "Windsor"] },
      { name: "Quebec", cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"] },
      { name: "British Columbia", cities: ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond"] }
    ],
    cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa", "Edmonton", "Quebec City", "Winnipeg"]
  },
  {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    states: [
      { name: "England", cities: ["London", "Manchester", "Birmingham", "Liverpool", "Bristol"] },
      { name: "Scotland", cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling"] },
      { name: "Wales", cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"] }
    ],
    cities: ["London", "Manchester", "Birmingham", "Liverpool", "Bristol", "Edinburgh", "Glasgow", "Cardiff"]
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    states: [
      { name: "New South Wales", cities: ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland"] },
      { name: "Victoria", cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Frankston"] },
      { name: "Queensland", cities: ["Brisbane", "Gold Coast", "Townsville", "Cairns", "Toowoomba"] }
    ],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra"]
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    states: [
      { name: "Bavaria", cities: ["Munich", "Nuremberg", "Augsburg", "Würzburg", "Regensburg"] },
      { name: "North Rhine-Westphalia", cities: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Duisburg"] },
      { name: "Berlin", cities: ["Berlin"] }
    ],
    cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund"]
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    states: [
      { name: "Île-de-France", cities: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Argenteuil", "Montreuil"] },
      { name: "Provence-Alpes-Côte d'Azur", cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Antibes"] },
      { name: "Auvergne-Rhône-Alpes", cities: ["Lyon", "Grenoble", "Saint-Étienne", "Villeurbanne", "Clermont-Ferrand"] }
    ],
    cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier"]
  },
  {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    states: [
      { name: "Tokyo", cities: ["Tokyo", "Shibuya", "Shinjuku", "Harajuku", "Ginza"] },
      { name: "Osaka", cities: ["Osaka", "Sakai", "Higashiosaka", "Hirakata", "Toyonaka"] },
      { name: "Kanagawa", cities: ["Yokohama", "Kawasaki", "Sagamihara", "Fujisawa", "Chigasaki"] }
    ],
    cities: ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto"]
  },
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    states: [
      { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"] },
      { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"] },
      { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"] }
    ],
    cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"]
  },
  {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    states: [
      { name: "São Paulo", cities: ["São Paulo", "Campinas", "Santos", "São Bernardo do Campo", "Santo André"] },
      { name: "Rio de Janeiro", cities: ["Rio de Janeiro", "Niterói", "Nova Iguaçu", "Duque de Caxias", "São Gonçalo"] },
      { name: "Minas Gerais", cities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"] }
    ],
    cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba"]
  },
  {
    code: "MX",
    name: "Mexico",
    flag: "🇲🇽",
    states: [
      { name: "Mexico City", cities: ["Mexico City", "Ecatepec", "Guadalajara", "Puebla", "Tijuana"] },
      { name: "Jalisco", cities: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá", "Puerto Vallarta"] },
      { name: "Nuevo León", cities: ["Monterrey", "Guadalupe", "San Nicolás de los Garza", "Apodaca", "General Escobedo"] }
    ],
    cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Juárez", "Zapopan"]
  }
];

export const getCountriesList = () => countries;

export const getStatesByCountry = (countryCode: string) => {
  const country = countries.find(c => c.code === countryCode);
  return country?.states || [];
};

export const getCitiesByCountry = (countryCode: string) => {
  const country = countries.find(c => c.code === countryCode);
  return country?.cities || [];
};

export const getCitiesByState = (countryCode: string, stateName: string) => {
  const country = countries.find(c => c.code === countryCode);
  const state = country?.states.find(s => s.name === stateName);
  return state?.cities || [];
};
