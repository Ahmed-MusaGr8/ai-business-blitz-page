
export interface Country {
  code: string;
  name: string;
  flag: string;
  states: State[];
}

export interface State {
  code: string;
  name: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    states: [
      {
        code: "AL",
        name: "Alabama",
        cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison", "Florence", "Gadsden", "Vestavia Hills", "Prattville", "Phenix City", "Alabaster", "Bessemer", "Enterprise", "Opelika", "Homewood"]
      },
      {
        code: "AK",
        name: "Alaska",
        cities: ["Anchorage", "Fairbanks", "Juneau", "Wasilla", "Sitka", "Ketchikan", "Kenai", "Kodiak", "Bethel", "Palmer", "Homer", "Unalaska", "Barrow", "Nome", "Kotzebue", "Dillingham", "Soldotna", "Valdez", "Seward", "Petersburg"]
      },
      {
        code: "AZ",
        name: "Arizona",
        cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise", "Yuma", "Avondale", "Goodyear", "Flagstaff", "Buckeye", "Lake Havasu City", "Casa Grande", "Sierra Vista", "Maricopa", "Oro Valley"]
      },
      {
        code: "AR",
        name: "Arkansas",
        cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville", "Hot Springs", "Benton", "Sherwood", "Texarkana", "Paragould", "Cabot", "Searcy", "Van Buren", "El Dorado", "West Memphis"]
      },
      {
        code: "CA",
        name: "California",
        cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Irvine", "Chula Vista", "Fremont", "San Bernardino", "Modesto", "Fontana", "Oxnard", "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita", "Garden Grove", "Oceanside", "Rancho Cucamonga", "Santa Rosa", "Ontario", "Lancaster", "Elk Grove", "Corona", "Palmdale", "Salinas", "Pomona", "Alameda", "Torrance", "Sunnyvale", "Escondido", "Hollywood", "Pasadena", "Burbank", "Santa Monica", "Beverly Hills", "Palo Alto", "Cupertino", "Mountain View", "Redwood City", "San Mateo", "Walnut Creek", "Concord", "Antioch", "Richmond", "Berkeley", "Vallejo", "Fairfield", "Vacaville", "Davis", "Napa", "Petaluma", "Santa Barbara", "Ventura", "Thousand Oaks", "Simi Valley"]
      },
      {
        code: "CO",
        name: "Colorado",
        cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial", "Boulder", "Greeley", "Longmont", "Loveland", "Grand Junction", "Broomfield", "Castle Rock", "Commerce City", "Northglenn", "Brighton"]
      },
      {
        code: "CT",
        name: "Connecticut",
        cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich", "Hamden", "Meriden", "Bristol", "Manchester", "West Haven", "Milford", "Stratford", "East Hartford", "Middletown", "Wallingford"]
      },
      {
        code: "DE",
        name: "Delaware",
        cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle", "Laurel", "Harrington", "Camden", "Clayton", "Lewes", "Milton", "Selbyville", "Bridgeville", "Delmar", "Frankford"]
      },
      {
        code: "FL",
        name: "Florida",
        cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Miami Gardens", "Clearwater", "Palm Bay", "Pompano Beach", "West Palm Beach", "Lakeland", "Davie", "Miami Beach", "Sunrise", "Boca Raton", "Deltona", "Plantation", "Alafaya", "Palm Coast", "Largo", "Boynton Beach", "Lauderhill", "Weston", "Kissimmee", "Homestead", "Delray Beach", "Tamarac", "Daytona Beach", "North Miami", "Wellington", "North Port", "Jupiter", "Ocala", "Port Orange", "Margate", "Coconut Creek", "Sanford", "Sarasota", "Pensacola", "Fort Myers", "Naples", "Bradenton", "Key West"]
      },
      {
        code: "GA",
        name: "Georgia",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Athens", "Sandy Springs", "Roswell", "Johns Creek", "Albany", "Warner Robins", "Alpharetta", "Marietta", "Valdosta", "Smyrna", "Dunwoody", "Rome", "East Point", "Peachtree Corners", "Gainesville"]
      },
      {
        code: "HI",
        name: "Hawaii",
        cities: ["Honolulu", "East Honolulu", "Pearl City", "Hilo", "Kailua", "Waipahu", "Kaneohe", "Mililani Town", "Kahului", "Ewa Gentry", "Mililani Mauka", "Kihei", "Wahiawa", "Ewa Beach", "Royal Kunia", "Wailuku", "Halawa", "Waimalu", "Nanakuli", "Schofield Barracks"]
      },
      {
        code: "ID",
        name: "Idaho",
        cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello", "Caldwell", "Coeur d'Alene", "Twin Falls", "Lewiston", "Post Falls", "Rexburg", "Eagle", "Chubbuck", "Ammon", "Hayden", "Mountain Home", "Blackfoot", "Garden City", "Jerome", "Burley"]
      },
      {
        code: "IL",
        name: "Illinois",
        cities: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero", "Champaign", "Bloomington", "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook", "Palatine", "Skokie", "Des Plaines", "Orland Park", "Tinley Park", "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates", "Elmhurst", "Lombard", "Downers Grove", "Glen Ellyn", "DeKalb", "Urbana", "Crystal Lake", "Quincy", "Carbondale", "Rock Island", "Moline", "Oak Park", "Calumet City", "St. Charles"]
      },
      {
        code: "IN",
        name: "Indiana",
        cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Bloomington", "Fishers", "Hammond", "Gary", "Muncie", "Lafayette", "Terre Haute", "Kokomo", "Anderson", "Noblesville", "Greenwood", "Elkhart", "Mishawaka", "Lawrence", "Jeffersonville"]
      },
      {
        code: "IA",
        name: "Iowa",
        cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Council Bluffs", "Ames", "West Des Moines", "Dubuque", "Ankeny", "Urbandale", "Cedar Falls", "Marion", "Bettendorf", "Mason City", "Marshalltown", "Clinton", "Burlington", "Ottumwa"]
      },
      {
        code: "KS",
        name: "Kansas",
        cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina", "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City", "Emporia", "Junction City", "Derby", "Prairie Village", "Hays"]
      },
      {
        code: "KY",
        name: "Kentucky",
        cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Hopkinsville", "Richmond", "Florence", "Georgetown", "Henderson", "Elizabethtown", "Nicholasville", "Jeffersontown", "Frankfort", "Paducah", "Independence", "Radcliff", "Ashland", "Madisonville", "Murray"]
      },
      {
        code: "LA",
        name: "Louisiana",
        cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma", "Marrero", "New Iberia", "Laplace", "Slidell", "Prairieville", "Central", "Ruston", "Sulphur", "Hammond", "Natchitoches"]
      },
      {
        code: "ME",
        name: "Maine",
        cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Sanford", "Saco", "Augusta", "Westbrook", "Waterville", "Presque Isle", "Brewer", "Caribou", "Orono", "Old Town", "Bath", "Calais", "Rockland", "Belfast"]
      },
      {
        code: "MD",
        name: "Maryland",
        cities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie", "Hagerstown", "Annapolis", "College Park", "Salisbury", "Laurel", "Greenbelt", "Cumberland", "Westminster", "Hyattsville", "Takoma Park", "Easton", "Glen Burnie", "Elkton", "Cambridge", "Havre de Grace"]
      },
      {
        code: "MA",
        name: "Massachusetts",
        cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "Fall River", "Newton", "Lawrence", "Somerville", "Framingham", "Haverhill", "Waltham", "Malden", "Brookline", "Plymouth", "Medford", "Taunton", "Chicopee", "Weymouth", "Revere", "Peabody", "Methuen", "Barnstable", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield", "Leominster", "Fitchburg", "Beverly", "Holyoke", "Marlborough", "Woburn", "Amherst", "Chelsea", "Braintree"]
      },
      {
        code: "MI",
        name: "Michigan",
        cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland", "Troy", "Farmington Hills", "Kalamazoo", "Wyoming", "Southfield", "Rochester Hills", "Taylor", "Pontiac", "St. Clair Shores", "Royal Oak", "Novi", "Dearborn Heights", "Battle Creek", "Saginaw", "Kentwood", "East Lansing", "Roseville", "Portage", "Midland", "Lincoln Park", "Bay City", "Eastpointe", "Wyandotte", "Inkster", "Ypsilanti", "Burton", "Jackson", "Garden City", "Westland", "Muskegon"]
      },
      {
        code: "MN",
        name: "Minnesota",
        cities: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "St. Cloud", "Eagan", "Woodbury", "Maple Grove", "Eden Prairie", "Coon Rapids", "Burnsville", "Blaine", "Lakeville", "Minnetonka", "Apple Valley", "Edina", "St. Louis Park", "Moorhead", "Mankato", "Shakopee", "Cottage Grove", "Richfield", "Roseville", "Inver Grove Heights", "Brooklyn Center", "Faribault", "Andover"]
      },
      {
        code: "MS",
        name: "Mississippi",
        cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian", "Tupelo", "Greenville", "Olive Branch", "Horn Lake", "Clinton", "Pearl", "Ridgeland", "Starkville", "Columbus", "Vicksburg", "Pascagoula", "Oxford", "Clarksdale", "Laurel"]
      },
      {
        code: "MO",
        name: "Missouri",
        cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "St. Peters", "Blue Springs", "Florissant", "Joplin", "Chesterfield", "Jefferson City", "Cape Girardeau", "Oakville", "Wildwood", "University City", "Ballwin"]
      },
      {
        code: "MT",
        name: "Montana",
        cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Havre", "Anaconda", "Miles City", "Belgrade", "Livingston", "Laurel", "Whitefish", "Lewistown", "Sidney", "Glendive", "Columbia Falls", "Hamilton", "Polson"]
      },
      {
        code: "NE",
        name: "Nebraska",
        cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "North Platte", "Norfolk", "Columbus", "Papillion", "La Vista", "Scottsbluff", "South Sioux City", "Beatrice", "Lexington", "Gering", "Alliance", "York", "McCook"]
      },
      {
        code: "NV",
        name: "Nevada",
        cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City", "Fernley", "Elko", "Mesquite", "Boulder City", "Fallon", "Winnemucca", "West Wendover", "Ely", "Yerington", "Carlin", "Lovelock", "Wells", "Caliente", "Hawthorne"]
      },
      {
        code: "NH",
        name: "New Hampshire",
        cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack", "Hudson", "Londonderry", "Keene", "Bedford", "Portsmouth", "Goffstown", "Laconia", "Hampton", "Milford", "Durham", "Exeter", "Windham"]
      },
      {
        code: "NJ",
        name: "New Jersey",
        cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Woodbridge", "Lakewood", "Toms River", "Hamilton", "Trenton", "Clifton", "Camden", "Brick", "Cherry Hill", "Passaic", "Union City", "Middletown", "Gloucester", "East Orange", "Bayonne", "Vineland", "New Brunswick", "Hoboken", "Perth Amboy", "West New York", "Plainfield", "Hackensack", "Sayreville", "Kearny", "Linden", "Atlantic City", "Fort Lee", "Fair Lawn", "Paramus", "Wayne", "Ridgewood"]
      },
      {
        code: "NM",
        name: "New Mexico",
        cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Clovis", "Hobbs", "Alamogordo", "Carlsbad", "Gallup", "Deming", "Los Alamos", "Chaparral", "Sunland Park", "Las Vegas", "Portales", "Silver City", "Artesia", "Lovington"]
      },
      {
        code: "NY",
        name: "New York",
        cities: ["New York City", "Buffalo", "Yonkers", "Rochester", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream", "Long Beach", "Rome", "Watertown", "Ithaca", "Middletown", "Spring Valley", "Jamestown", "Poughkeepsie", "Elmira", "Tonawanda", "Newburgh", "Beacon", "Oswego", "Kingston", "Glens Falls", "Plattsburgh", "Oneonta", "Cortland", "Amsterdam", "Auburn", "Geneva", "Ogdensburg", "Cohoes"]
      },
      {
        code: "NC",
        name: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Greenville", "Asheville", "Concord", "Gastonia", "Jacksonville", "Chapel Hill", "Rocky Mount", "Burlington", "Wilson", "Huntersville", "Kannapolis", "Apex", "Hickory", "Goldsboro", "Indian Trail", "Mooresville", "Salisbury", "Monroe", "Thomasville", "Cornelius", "Mint Hill"]
      },
      {
        code: "ND",
        name: "North Dakota",
        cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton", "Devils Lake", "Valley City", "Grafton", "Rugby", "Beulah", "Hazen", "Casselton", "Watford City", "New Town", "Horace"]
      },
      {
        code: "OH",
        name: "Ohio",
        cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain", "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls", "Middletown", "Newark", "Euclid", "Mansfield", "Mentor", "Beavercreek", "Cleveland Heights", "Strongsville", "Fairborn", "Findlay", "Warren", "Lancaster", "Lima", "Huber Heights", "Westerville", "Marion", "Grove City", "Reynoldsburg", "Stow", "Upper Arlington", "Gahanna", "Hilliard", "Tallmadge", "Sidney"]
      },
      {
        code: "OK",
        name: "Oklahoma",
        cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton", "Edmond", "Moore", "Midwest City", "Enid", "Stillwater", "Muskogee", "Bartlesville", "Owasso", "Shawnee", "Ponca City", "Ardmore", "Duncan", "Bixby", "McAlester", "Tahlequah"]
      },
      {
        code: "OR",
        name: "Oregon",
        cities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Bend", "Beaverton", "Medford", "Springfield", "Corvallis", "Albany", "Tigard", "Lake Oswego", "Keizer", "Grants Pass", "Oregon City", "McMinnville", "Redmond", "Tualatin", "West Linn"]
      },
      {
        code: "PA",
        name: "Pennsylvania",
        cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "Altoona", "York", "State College", "Wilkes-Barre", "Chester", "Williamsport", "Easton", "Lebanon", "Hazleton", "New Castle", "Johnstown", "Washington", "West Chester", "Norristown", "Greensburg", "McKeesport", "Butler", "Hermitage", "Carbondale", "Pottstown", "Chambersburg", "Bloomsburg", "Indiana", "Meadville", "Uniontown", "Coatesville", "Oil City", "Franklin", "Gettysburg", "Hanover"]
      },
      {
        code: "RI",
        name: "Rhode Island",
        cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Newport", "Central Falls", "Westerly", "North Providence", "West Warwick", "Johnston", "North Kingstown", "South Kingstown", "Coventry", "Cumberland", "Lincoln", "Smithfield", "Middletown", "Bristol"]
      },
      {
        code: "SC",
        name: "South Carolina",
        cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Sumter", "Goose Creek", "Hilton Head Island", "Florence", "Spartanburg", "Anderson", "Myrtle Beach", "Greer", "Aiken", "Greenwood", "North Augusta", "Easley", "Simpsonville"]
      },
      {
        code: "SD",
        name: "South Dakota",
        cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Pierre", "Huron", "Vermillion", "Spearfish", "Brandon", "Box Elder", "Sturgis", "Madison", "Belle Fourche", "Hot Springs", "Lead", "Deadwood", "Winner"]
      },
      {
        code: "TN",
        name: "Tennessee",
        cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Johnson City", "Bartlett", "Hendersonville", "Kingsport", "Collierville", "Smyrna", "Cleveland", "Brentwood", "Germantown", "Columbia", "Spring Hill", "La Vergne", "Gallatin"]
      },
      {
        code: "TX",
        name: "Texas",
        cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo", "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie", "Brownsville", "McKinney", "Frisco", "Pasadena", "Mesquite", "Killeen", "McAllen", "Carrollton", "Midland", "Waco", "Denton", "Odessa", "Round Rock", "Richardson", "Tyler", "Lewisville", "College Station", "Pearland", "Sugar Land", "Beaumont", "Missouri City", "Abilene", "League City", "Longview", "Bryan", "Pharr", "San Angelo", "Baytown", "Temple", "Conroe", "Cedar Park", "Georgetown", "Galveston", "Port Arthur", "Flower Mound", "North Richland Hills", "Keller", "Wichita Falls", "Edinburg", "New Braunfels", "Pflugerville", "Mission", "Allen", "Mansfield", "Euless", "Huntsville", "Texarkana", "The Woodlands", "Burleson"]
      },
      {
        code: "UT",
        name: "Utah",
        cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "Ogden", "St. George", "Layton", "Taylorsville", "South Jordan", "Lehi", "Logan", "Murray", "Draper", "Bountiful", "Riverton", "Roy", "Pleasant Grove", "Tooele"]
      },
      {
        code: "VT",
        name: "Vermont",
        cities: ["Burlington", "Essex", "South Burlington", "Colchester", "Rutland", "Bennington", "Brattleboro", "Milton", "Hartford", "Williston", "Middlebury", "Barre", "Montpelier", "Winooski", "St. Albans", "Northfield", "St. Johnsbury", "Vergennes", "Morristown", "Swanton"]
      },
      {
        code: "VA",
        name: "Virginia",
        cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Portsmouth", "Suffolk", "Roanoke", "Lynchburg", "Harrisonburg", "Leesburg", "Charlottesville", "Danville", "Blacksburg", "Manassas", "Petersburg", "Fredericksburg", "Winchester", "Bristol", "Staunton", "Salem", "Hopewell", "Waynesboro", "Falls Church", "Fairfax", "Radford", "Herndon", "Poquoson"]
      },
      {
        code: "WA",
        name: "Washington",
        cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Yakima", "Federal Way", "Spokane Valley", "Bellingham", "Kennewick", "Auburn", "Pasco", "Marysville", "Lakewood", "Redmond", "Shoreline", "Richland", "Kirkland", "Burien", "Sammamish", "Olympia", "Lacey", "Edmonds", "Bremerton", "Puyallup", "Bothell", "Lynnwood", "Longview", "Issaquah", "Wenatchee", "Mount Vernon", "University Place", "Walla Walla", "Pullman", "Des Moines", "SeaTac", "Mercer Island"]
      },
      {
        code: "WV",
        name: "West Virginia",
        cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Martinsburg", "Fairmont", "Beckley", "Clarksburg", "Lewisburg", "Buckhannon", "Charles Town", "Hurricane", "South Charleston", "Bridgeport", "Nitro", "Keyser", "Summersville", "Oak Hill", "Princeton"]
      },
      {
        code: "WI",
        name: "Wisconsin",
        cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville", "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac", "New Berlin", "Wausau", "Brookfield", "Greenfield", "Beloit", "Franklin", "Oak Creek", "Manitowoc", "West Bend", "Sun Prairie", "Superior", "Fitchburg", "Stevens Point", "Neenah", "Middleton"]
      },
      {
        code: "WY",
        name: "Wyoming",
        cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston", "Riverton", "Jackson", "Cody", "Rawlins", "Lander", "Torrington", "Powell", "Douglas", "Worland", "Buffalo", "Newcastle", "Wheatland"]
      },
      {
        code: "DC",
        name: "District of Columbia",
        cities: ["Washington"]
      }
    ]
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    states: [
      {
        code: "AB",
        name: "Alberta",
        cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Okotoks", "Lloydminster", "Camrose", "Fort Saskatchewan", "Brooks", "Cochrane", "Wetaskiwin", "Cold Lake", "Lacombe", "Stony Plain", "Sylvan Lake"]
      },
      {
        code: "BC",
        name: "British Columbia",
        cities: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Saanich", "Delta", "Langley", "Victoria", "North Vancouver", "Burnaby", "Kamloops", "Nanaimo", "Chilliwack", "Prince George", "Vernon", "Penticton", "Campbell River"]
      },
      {
        code: "MB",
        name: "Manitoba",
        cities: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Winkler", "Selkirk", "Morden", "Dauphin", "The Pas", "Flin Flon", "Swan River", "Neepawa", "Virden", "Gimli", "Stonewall", "Beausejour", "Niverville", "Altona", "Carman"]
      },
      {
        code: "NB",
        name: "New Brunswick",
        cities: ["Moncton", "Saint John", "Fredericton", "Dieppe", "Riverview", "Edmundston", "Miramichi", "Campbellton", "Bathurst", "Sackville", "Caraquet", "Sussex", "Woodstock", "Shediac", "Oromocto", "Dalhousie", "Grand Falls", "Tracadie", "Richibucto", "St. Stephen"]
      },
      {
        code: "NL",
        name: "Newfoundland and Labrador",
        cities: ["St. John's", "Mount Pearl", "Corner Brook", "Conception Bay South", "Paradise", "Grand Falls-Windsor", "Happy Valley-Goose Bay", "Gander", "Carbonear", "Stephenville", "Torbay", "Labrador City", "Bay Roberts", "Clarenville", "Portugal Cove-St. Philip's", "Placentia", "Deer Lake", "Channel-Port aux Basques", "Marystown", "Bonavista"]
      },
      {
        code: "NT",
        name: "Northwest Territories",
        cities: ["Yellowknife", "Hay River", "Inuvik", "Fort Smith", "Behchoko", "Iqaluit", "Norman Wells", "Fort Resolution", "Tuktoyaktuk", "Aklavik", "Fort Simpson", "Fort Providence", "Enterprise", "Tsiigehtchic", "Fort Good Hope", "Paulatuk", "Sachs Harbour", "Ulukhaktok", "Colville Lake", "Deline"]
      },
      {
        code: "NS",
        name: "Nova Scotia",
        cities: ["Halifax", "Dartmouth", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Amherst", "Yarmouth", "Bridgewater", "North Sydney", "Wolfville", "Antigonish", "Port Hawkesbury", "Windsor", "Middleton", "Westville", "Stellarton", "Liverpool", "Digby"]
      },
      {
        code: "NU",
        name: "Nunavut",
        cities: ["Iqaluit", "Rankin Inlet", "Arviat", "Baker Lake", "Igloolik", "Pangnirtung", "Cape Dorset", "Pond Inlet", "Gjoa Haven", "Kugluktuk", "Cambridge Bay", "Coral Harbour", "Repulse Bay", "Hall Beach", "Clyde River", "Resolute", "Sanikiluaq", "Whale Cove", "Chesterfield Inlet", "Naujaat"]
      },
      {
        code: "ON",
        name: "Ontario",
        cities: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor", "Richmond Hill", "Oakville", "Burlington", "Oshawa", "Barrie", "St. Catharines", "Cambridge", "Kingston", "Whitby", "Guelph", "Thunder Bay", "Waterloo", "Sudbury", "Peterborough", "Brantford", "Pickering", "Sarnia", "Sault Ste. Marie", "Ajax", "Milton", "Niagara Falls", "Welland", "North Bay", "Belleville", "Cornwall", "Chatham-Kent", "Georgetown", "St. Thomas", "Woodstock", "Bowmanville"]
      },
      {
        code: "PE",
        name: "Prince Edward Island",
        cities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague", "Kensington", "Souris", "Alberton", "Georgetown", "O'Leary", "Tignish", "Borden-Carleton", "Cavendish", "Hunter River", "Crapaud", "Wellington", "Murray River", "Bloomfield", "Cardigan", "Morell"]
      },
      {
        code: "QC",
        name: "Quebec",
        cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Lévis", "Trois-Rivières", "Terrebonne", "Saint-Jean-sur-Richelieu", "Repentigny", "Brossard", "Drummondville", "Saint-Jérôme", "Granby", "Blainville", "Saint-Hyacinthe", "Shawinigan", "Dollard-des-Ormeaux", "Joliette", "Victoriaville", "Rimouski", "Saint-Eustache", "Mascouche", "Rouyn-Noranda", "Thetford Mines", "Sept-Îles", "Val-d'Or", "Alma"]
      },
      {
        code: "SK",
        name: "Saskatchewan",
        cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current", "North Battleford", "Yorkton", "Estevan", "Weyburn", "Lloydminster", "Melfort", "Warman", "Humboldt", "Kindersley", "Melville", "Tisdale", "Unity", "Rosetown", "Canora", "Biggar"]
      },
      {
        code: "YT",
        name: "Yukon",
        cities: ["Whitehorse", "Dawson City", "Watson Lake", "Haines Junction", "Mayo", "Carmacks", "Faro", "Ross River", "Teslin", "Pelly Crossing", "Old Crow", "Beaver Creek", "Destruction Bay", "Burwash Landing", "Swift River", "Champagne", "Little Salmon", "Stewart Crossing", "Eagle Plains", "Rock Creek"]
      }
    ]
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    states: [
      {
        code: "ENG",
        name: "England",
        cities: ["London", "Birmingham", "Manchester", "Liverpool", "Sheffield", "Bristol", "Newcastle", "Leicester", "Nottingham", "Coventry", "Bradford", "Stoke-on-Trent", "Wolverhampton", "Plymouth", "Southampton", "Reading", "Derby", "Luton", "Northampton", "Preston", "Portsmouth", "Brighton", "Milton Keynes", "Swindon", "Norwich", "Bournemouth", "Peterborough", "Cambridge", "Oxford", "Blackpool", "Ipswich", "York", "Gloucester", "Watford", "Exeter", "Bath", "Chester", "Canterbury", "St Albans", "Worcester"]
      },
      {
        code: "SCT",
        name: "Scotland",
        cities: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Kirkcaldy", "Dunfermline", "Ayr", "Perth", "Kilmarnock", "Inverness", "Greenock", "Coatbridge", "Glenrothes", "Airdrie", "Stirling"]
      },
      {
        code: "WAL",
        name: "Wales",
        cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Barry", "Caerphilly", "Bridgend", "Neath", "Port Talbot", "Cwmbran", "Pontypridd", "Llanelli", "Rhondda", "Aberdare", "Merthyr Tydfil", "Colwyn Bay", "Flint", "Bangor", "Conwy", "Carmarthen"]
      },
      {
        code: "NIR",
        name: "Northern Ireland",
        cities: ["Belfast", "Derry", "Lisburn", "Newtownabbey", "Bangor", "Craigavon", "Castlereagh", "Ballymena", "Newtownards", "Carrickfergus", "Coleraine", "Omagh", "Larne", "Dungannon", "Armagh", "Antrim", "Newry", "Limavady", "Strabane", "Downpatrick"]
      }
    ]
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    states: [
      {
        code: "BW",
        name: "Baden-Württemberg",
        cities: ["Stuttgart", "Mannheim", "Karlsruhe", "Freiburg", "Heidelberg", "Heilbronn", "Ulm", "Pforzheim", "Reutlingen", "Esslingen", "Ludwigsburg", "Tübingen", "Villingen-Schwenningen", "Konstanz", "Göppingen", "Sindelfingen", "Schwäbisch Gmünd", "Ravensburg", "Friedrichshafen", "Offenburg"]
      },
      {
        code: "BY",
        name: "Bavaria",
        cities: ["Munich", "Nuremberg", "Augsburg", "Würzburg", "Regensburg", "Ingolstadt", "Fürth", "Erlangen", "Bayreuth", "Bamberg", "Aschaffenburg", "Landshut", "Kempten", "Rosenheim", "Neu-Ulm", "Schweinfurt", "Passau", "Freising", "Straubing", "Dachau"]
      },
      {
        code: "BE",
        name: "Berlin",
        cities: ["Berlin"]
      },
      {
        code: "BB",
        name: "Brandenburg",
        cities: ["Potsdam", "Cottbus", "Brandenburg", "Frankfurt (Oder)", "Oranienburg", "Falkensee", "Königs Wusterhausen", "Eberswalde", "Bernau", "Wandlitz", "Rathenow", "Fürstenwalde", "Hennigsdorf", "Spremberg", "Neuruppin", "Schwedt", "Senftenberg", "Ludwigsfelde", "Hohen Neuendorf", "Strausberg"]
      },
      {
        code: "HB",
        name: "Bremen",
        cities: ["Bremen", "Bremerhaven"]
      },
      {
        code: "HH",
        name: "Hamburg",
        cities: ["Hamburg"]
      },
      {
        code: "HE",
        name: "Hesse",
        cities: ["Frankfurt am Main", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach", "Hanau", "Gießen", "Marburg", "Fulda", "Rüsselsheim", "Bad Homburg", "Rodgau", "Dreieich", "Bensheim", "Maintal", "Hofheim", "Oberursel", "Mörfelden-Walldorf", "Mühlheim am Main", "Dietzenbach"]
      },
      {
        code: "MV",
        name: "Mecklenburg-Vorpommern",
        cities: ["Rostock", "Schwerin", "Neubrandenburg", "Stralsund", "Greifswald", "Wismar", "Güstrow", "Waren", "Neustrelitz", "Parchim", "Ribnitz-Damgarten", "Bergen auf Rügen", "Anklam", "Wolgast", "Pasewalk", "Ludwigslust", "Bad Doberan", "Grimmen", "Malchin", "Demmin"]
      },
      {
        code: "NI",
        name: "Lower Saxony",
        cities: ["Hannover", "Braunschweig", "Oldenburg", "Osnabrück", "Wolfsburg", "Göttingen", "Salzgitter", "Hildesheim", "Delmenhorst", "Wilhelmshaven", "Lüneburg", "Celle", "Garbsen", "Hameln", "Lingen", "Langenhagen", "Nordhorn", "Wolfenbüttel", "Goslar", "Peine"]
      },
      {
        code: "NW",
        name: "North Rhine-Westphalia",
        cities: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Mönchengladbach", "Gelsenkirchen", "Aachen", "Krefeld", "Oberhausen", "Hagen", "Hamm", "Mülheim", "Leverkusen", "Solingen", "Herne", "Neuss", "Paderborn", "Recklinghausen", "Bottrop", "Remscheid", "Moers", "Siegen", "Bergisch Gladbach", "Erlangen"]
      },
      {
        code: "RP",
        name: "Rhineland-Palatinate",
        cities: ["Mainz", "Ludwigshafen", "Koblenz", "Trier", "Kaiserslautern", "Worms", "Neuwied", "Neustadt", "Speyer", "Frankfurt", "Pirmasens", "Bad Kreuznach", "Landau", "Zweibrücken", "Bad Neuenahr-Ahrweiler", "Andernach", "Bingen", "Germersheim", "Ingelheim", "Lahnstein"]
      },
      {
        code: "SL",
        name: "Saarland",
        cities: ["Saarbrücken", "Neunkirchen", "Homburg", "Völklingen", "St. Ingbert", "Merzig", "St. Wendel", "Blieskastel", "Dillingen", "Lebach", "Püttlingen", "Heusweiler", "Schiffweiler", "Wadgassen", "Sulzbach", "Friedrichsthal", "Saarlouis", "Ottweiler", "Kirkel", "Riegelsberg"]
      },
      {
        code: "SN",
        name: "Saxony",
        cities: ["Leipzig", "Dresden", "Chemnitz", "Zwickau", "Plauen", "Görlitz", "Freiberg", "Bautzen", "Hoyerswerda", "Pirna", "Freital", "Riesa", "Radebeul", "Meißen", "Limbach-Oberfrohna", "Glauchau", "Werdau", "Markkleeberg", "Delitzsch", "Coswig"]
      },
      {
        code: "ST",
        name: "Saxony-Anhalt",
        cities: ["Halle", "Magdeburg", "Dessau-Roßlau", "Wittenberg", "Stendal", "Weißenfels", "Bernburg", "Naumburg", "Wolfen", "Merseburg", "Halberstadt", "Sangerhausen", "Köthen", "Aschersleben", "Quedlinburg", "Staßfurt", "Schönebeck", "Salzwedel", "Gardelegen", "Burg"]
      },
      {
        code: "SH",
        name: "Schleswig-Holstein",
        cities: ["Kiel", "Lübeck", "Flensburg", "Neumünster", "Norderstedt", "Elmshorn", "Pinneberg", "Wedel", "Ahrensburg", "Geesthacht", "Henstedt-Ulzburg", "Reinbek", "Bad Oldesloe", "Schleswig", "Husum", "Heide", "Kaltenkirchen", "Quickborn", "Itzehoe", "Eutin"]
      },
      {
        code: "TH",
        name: "Thuringia",
        cities: ["Erfurt", "Jena", "Gera", "Weimar", "Gotha", "Nordhausen", "Eisenach", "Suhl", "Mühlhausen", "Altenburg", "Greiz", "Sonneberg", "Saalfeld", "Meiningen", "Rudolstadt", "Ilmenau", "Arnstadt", "Weida", "Bad Langensalza", "Heiligenstadt"]
      }
    ]
  },
  {
    code: "FR", name: "France", flag: "🇫🇷", states: [
      { code: "IDF", name: "Île-de-France", cities: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Argenteuil", "Montreuil", "Créteil", "Nanterre", "Colombes", "Aulnay-sous-Bois", "Rueil-Malmaison"] },
      { code: "ARA", name: "Auvergne-Rhône-Alpes", cities: ["Lyon", "Saint-Étienne", "Grenoble", "Villeurbanne", "Clermont-Ferrand", "Valence", "Chambéry", "Annecy", "Bourg-en-Bresse", "Roanne"] }
    ]
  },
  { code: "IT", name: "Italy", flag: "🇮🇹", states: [{ code: "LZ", name: "Lazio", cities: ["Rome", "Latina", "Aprilia", "Viterbio", "Frosinone"] }] },
  { code: "ES", name: "Spain", flag: "🇪🇸", states: [{ code: "MD", name: "Madrid", cities: ["Madrid", "Móstoles", "Alcalá de Henares", "Fuenlabrada", "Leganés"] }] },
  { code: "JP", name: "Japan", flag: "🇯🇵", states: [{ code: "13", name: "Tokyo", cities: ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo"] }] },
  { code: "CN", name: "China", flag: "🇨🇳", states: [{ code: "BJ", name: "Beijing", cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"] }] },
  { code: "IN", name: "India", flag: "🇮🇳", states: [{ code: "MH", name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"] }] },
  { code: "BR", name: "Brazil", flag: "🇧🇷", states: [{ code: "SP", name: "São Paulo", cities: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Osasco"] }] },
  { code: "AU", name: "Australia", flag: "🇦🇺", states: [{ code: "NSW", name: "New South Wales", cities: ["Sydney", "Newcastle", "Wollongong", "Maitland", "Albury"] }] },
  { code: "MX", name: "Mexico", flag: "🇲🇽", states: [{ code: "CDMX", name: "Mexico City", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"] }] },
  { code: "RU", name: "Russia", flag: "🇷🇺", states: [{ code: "MOW", name: "Moscow", cities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod"] }] },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", states: [{ code: "GT", name: "Gauteng", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"] }] },
  { code: "KR", name: "South Korea", flag: "🇰🇷", states: [{ code: "11", name: "Seoul", cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"] }] },
  { code: "AR", name: "Argentina", flag: "🇦🇷", states: [{ code: "C", name: "Buenos Aires", cities: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata"] }] },
  { code: "EG", name: "Egypt", flag: "🇪🇬", states: [{ code: "C", name: "Cairo", cities: ["Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said"] }] },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", states: [{ code: "LA", name: "Lagos", cities: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt"] }] },
  { code: "TR", name: "Turkey", flag: "🇹🇷", states: [{ code: "34", name: "Istanbul", cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana"] }] },
  { code: "TH", name: "Thailand", flag: "🇹🇭", states: [{ code: "10", name: "Bangkok", cities: ["Bangkok", "Samut Prakan", "Mueang Nonthaburi", "Udon Thani", "Chon Buri"] }] },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", states: [{ code: "JK", name: "Jakarta", cities: ["Jakarta", "Surabaya", "Bandung", "Bekasi", "Medan"] }] },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", states: [{ code: "14", name: "Kuala Lumpur", cities: ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya"] }] },
  { code: "SG", name: "Singapore", flag: "🇸🇬", states: [{ code: "SG", name: "Singapore", cities: ["Singapore"] }] },
  { code: "PH", name: "Philippines", flag: "🇵🇭", states: [{ code: "NCR", name: "Metro Manila", cities: ["Manila", "Quezon City", "Caloocan", "Davao City", "Cebu City"] }] },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", states: [{ code: "HN", name: "Hanoi", cities: ["Ho Chi Minh City", "Hanoi", "Haiphong", "Da Nang", "Can Tho"] }] },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", states: [{ code: "C", name: "Dhaka", cities: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"] }] },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", states: [{ code: "SD", name: "Sindh", cities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan"] }] },
  { code: "IR", name: "Iran", flag: "🇮🇷", states: [{ code: "07", name: "Tehran", cities: ["Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz"] }] },
  { code: "IQ", name: "Iraq", flag: "🇮🇶", states: [{ code: "BG", name: "Baghdad", cities: ["Baghdad", "Basra", "Mosul", "Erbil", "Najaf"] }] },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", states: [{ code: "01", name: "Riyadh", cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"] }] },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", states: [{ code: "DU", name: "Dubai", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman"] }] },
  { code: "IL", name: "Israel", flag: "🇮🇱", states: [{ code: "TA", name: "Tel Aviv", cities: ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva"] }] },
  { code: "KE", name: "Kenya", flag: "🇰🇪", states: [{ code: "30", name: "Nairobi", cities: ["Nairobi", "Mombasa", "Nakuru", "Eldoret", "Kisumu"] }] },
  { code: "GH", name: "Ghana", flag: "🇬🇭", states: [{ code: "AA", name: "Greater Accra", cities: ["Accra", "Kumasi", "Tamale", "Takoradi", "Cape Coast"] }] },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹", states: [{ code: "AA", name: "Addis Ababa", cities: ["Addis Ababa", "Dire Dawa", "Mek'ele", "Adama", "Awasa"] }] },
  { code: "MA", name: "Morocco", flag: "🇲🇦", states: [{ code: "06", name: "Casablanca-Settat", cities: ["Casablanca", "Rabat", "Marrakech", "Fez", "Tangier"] }] },
  { code: "DZ", name: "Algeria", flag: "🇩🇿", states: [{ code: "16", name: "Algiers", cities: ["Algiers", "Oran", "Constantine", "Batna", "Djelfa"] }] },
  { code: "TN", name: "Tunisia", flag: "🇹🇳", states: [{ code: "11", name: "Tunis", cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte"] }] },
  { code: "LY", name: "Libya", flag: "🇱🇾", states: [{ code: "TB", name: "Tripoli", cities: ["Tripoli", "Benghazi", "Misrata", "Tarhuna", "Al Khums"] }] },
  { code: "SD", name: "Sudan", flag: "🇸🇩", states: [{ code: "KH", name: "Khartoum", cities: ["Khartoum", "Omdurman", "Port Sudan", "Kassala", "Obeid"] }] },
  { code: "UG", name: "Uganda", flag: "🇺🇬", states: [{ code: "C", name: "Central", cities: ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja"] }] },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿", states: [{ code: "03", name: "Dar es Salaam", cities: ["Dar es Salaam", "Mwanza", "Arusha", "Dodoma", "Mbeya"] }] },
  { code: "ZW", name: "Zimbabwe", flag: "🇿🇼", states: [{ code: "HA", name: "Harare", cities: ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru"] }] },
  { code: "ZM", name: "Zambia", flag: "🇿🇲", states: [{ code: "09", name: "Lusaka", cities: ["Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola"] }] },
  { code: "MW", name: "Malawi", flag: "🇲🇼", states: [{ code: "C", name: "Central", cities: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu"] }] },
  { code: "MZ", name: "Mozambique", flag: "🇲🇿", states: [{ code: "MPM", name: "Maputo", cities: ["Maputo", "Matola", "Beira", "Nampula", "Chimoio"] }] },
  { code: "MG", name: "Madagascar", flag: "🇲🇬", states: [{ code: "T", name: "Antananarivo", cities: ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga"] }] },
  { code: "BW", name: "Botswana", flag: "🇧🇼", states: [{ code: "SE", name: "South-East", cities: ["Gaborone", "Francistown", "Molepolole", "Maun", "Serowe"] }] },
  { code: "NA", name: "Namibia", flag: "🇳🇦", states: [{ code: "KH", name: "Khomas", cities: ["Windhoek", "Rundu", "Walvis Bay", "Oshakati", "Swakopmund"] }] },
  { code: "SZ", name: "Swaziland", flag: "🇸🇿", states: [{ code: "HH", name: "Hhohho", cities: ["Mbabane", "Manzini", "Big Bend", "Malkerns", "Hluti"] }] },
  { code: "LS", name: "Lesotho", flag: "🇱🇸", states: [{ code: "A", name: "Maseru", cities: ["Maseru", "Teyateyaneng", "Mafeteng", "Hlotse", "Mohale's Hoek"] }] },
  { code: "SL", name: "Sierra Leone", flag: "🇸🇱", states: [{ code: "W", name: "Western Area", cities: ["Freetown", "Bo", "Kenema", "Koidu", "Makeni"] }] },
  { code: "LR", name: "Liberia", flag: "🇱🇷", states: [{ code: "MO", name: "Montserrado", cities: ["Monrovia", "Gbarnga", "Kakata", "Bensonville", "Harper"] }] },
  { code: "GN", name: "Guinea", flag: "🇬🇳", states: [{ code: "C", name: "Conakry", cities: ["Conakry", "Nzérékoré", "Kankan", "Kindia", "Labe"] }] },
  { code: "GW", name: "Guinea-Bissau", flag: "🇬🇼", states: [{ code: "BA", name: "Bissau", cities: ["Bissau", "Bafatá", "Gabú", "Bolama", "Cacheu"] }] },
  { code: "CV", name: "Cape Verde", flag: "🇨🇻", states: [{ code: "ST", name: "Santiago", cities: ["Praia", "Mindelo", "Santa Maria", "Assomada", "Porto Novo"] }] },
  { code: "GM", name: "Gambia", flag: "🇬🇲", states: [{ code: "B", name: "Banjul", cities: ["Banjul", "Serekunda", "Brikama", "Bakau", "Farafenni"] }] },
  { code: "SN", name: "Senegal", flag: "🇸🇳", states: [{ code: "DK", name: "Dakar", cities: ["Dakar", "Touba", "Thiès", "Kaolack", "Saint-Louis"] }] },
  { code: "MR", name: "Mauritania", flag: "🇲🇷", states: [{ code: "NKC", name: "Nouakchott", cities: ["Nouakchott", "Nouadhibou", "Néma", "Kaédi", "Rosso"] }] },
  { code: "ML", name: "Mali", flag: "🇲🇱", states: [{ code: "1", name: "Kayes", cities: ["Bamako", "Sikasso", "Mopti", "Koutiala", "Ségou"] }] },
  { code: "BF", name: "Burkina Faso", flag: "🇧🇫", states: [{ code: "09", name: "Centre", cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora"] }] },
  { code: "NE", name: "Niger", flag: "🇳🇪", states: [{ code: "8", name: "Niamey", cities: ["Niamey", "Zinder", "Maradi", "Agadez", "Tahoua"] }] },
  { code: "TD", name: "Chad", flag: "🇹🇩", states: [{ code: "ND", name: "N'Djamena", cities: ["N'Djamena", "Moundou", "Sarh", "Abéché", "Kelo"] }] },
  { code: "CF", name: "Central African Republic", flag: "🇨🇫", states: [{ code: "BGF", name: "Bangui", cities: ["Bangui", "Bimbo", "Berbérati", "Carnot", "Bambari"] }] },
  { code: "CM", name: "Cameroon", flag: "🇨🇲", states: [{ code: "CE", name: "Centre", cities: ["Yaoundé", "Douala", "Garoua", "Bafoussam", "Bamenda"] }] },
  { code: "GQ", name: "Equatorial Guinea", flag: "🇬🇶", states: [{ code: "C", name: "Continental", cities: ["Malabo", "Bata", "Ebebiyin", "Aconibe", "Añisoc"] }] },
  { code: "GA", name: "Gabon", flag: "🇬🇦", states: [{ code: "1", name: "Estuaire", cities: ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda"] }] },
  { code: "ST", name: "São Tomé and Príncipe", flag: "🇸🇹", states: [{ code: "S", name: "São Tomé", cities: ["São Tomé", "Santo António", "Neves", "Santana", "Guadalupe"] }] },
  { code: "CG", name: "Republic of the Congo", flag: "🇨🇬", states: [{ code: "BZV", name: "Brazzaville", cities: ["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Mossendjo"] }] },
  { code: "CD", name: "Democratic Republic of the Congo", flag: "🇨🇩", states: [{ code: "KN", name: "Kinshasa", cities: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kisangani", "Masina"] }] },
  { code: "AO", name: "Angola", flag: "🇦🇴", states: [{ code: "LUA", name: "Luanda", cities: ["Luanda", "Huambo", "Lobito", "Benguela", "Kuito"] }] },
  { code: "DJ", name: "Djibouti", flag: "🇩🇯", states: [{ code: "DJ", name: "Djibouti", cities: ["Djibouti", "Ali Sabieh", "Dikhil", "Tadjourah", "Obock"] }] },
  { code: "SO", name: "Somalia", flag: "🇸🇴", states: [{ code: "BN", name: "Banaadir", cities: ["Mogadishu", "Hargeisa", "Bosaso", "Kismayo", "Merca"] }] },
  { code: "ER", name: "Eritrea", flag: "🇪🇷", states: [{ code: "MA", name: "Maekel", cities: ["Asmara", "Keren", "Massawa", "Assab", "Mendefera"] }] },
  { code: "RW", name: "Rwanda", flag: "🇷🇼", states: [{ code: "01", name: "Kigali", cities: ["Kigali", "Butare", "Gitarama", "Musanze", "Gisenyi"] }] },
  { code: "BI", name: "Burundi", flag: "🇧🇮", states: [{ code: "BM", name: "Bujumbura Mairie", cities: ["Bujumbura", "Gitega", "Muyinga", "Ruyigi", "Ngozi"] }] },
  { code: "KM", name: "Comoros", flag: "🇰🇲", states: [{ code: "G", name: "Grande Comore", cities: ["Moroni", "Mutsamudu", "Fomboni", "Domoni", "Tsémbéhou"] }] },
  { code: "MU", name: "Mauritius", flag: "🇲🇺", states: [{ code: "PW", name: "Port Louis", cities: ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes"] }] },
  { code: "SC", name: "Seychelles", flag: "🇸🇨", states: [{ code: "01", name: "English River", cities: ["Victoria", "Anse Boileau", "Beau Vallon", "Takamaka", "Anse Royale"] }] },
  { code: "AF", name: "Afghanistan", flag: "🇦🇫", states: [{ code: "KAB", name: "Kabul", cities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Kunduz"] }] },
  { code: "AM", name: "Armenia", flag: "🇦🇲", states: [{ code: "ER", name: "Yerevan", cities: ["Yerevan", "Gyumri", "Vanadzor", "Ejmiatsin", "Hrazdan"] }] },
  { code: "AZ", name: "Azerbaijan", flag: "🇦🇿", states: [{ code: "BA", name: "Baku", cities: ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Quba"] }] },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", states: [{ code: "13", name: "Capital", cities: ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali"] }] },
  { code: "BT", name: "Bhutan", flag: "🇧🇹", states: [{ code: "33", name: "Thimphu", cities: ["Thimphu", "Phuentsholing", "Punakha", "Wangdue", "Samdrup Jongkhar"] }] },
  { code: "BN", name: "Brunei", flag: "🇧🇳", states: [{ code: "BM", name: "Brunei-Muara", cities: ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong", "Bangar"] }] },
  { code: "KH", name: "Cambodia", flag: "🇰🇭", states: [{ code: "12", name: "Phnom Penh", cities: ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Poipet"] }] },
  { code: "CY", name: "Cyprus", flag: "🇨🇾", states: [{ code: "04", name: "Larnaca", cities: ["Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos"] }] },
  { code: "GE", name: "Georgia", flag: "🇬🇪", states: [{ code: "TB", name: "Tbilisi", cities: ["Tbilisi", "Kutaisi", "Batumi", "Sokhumi", "Zugdidi"] }] },
  { code: "JO", name: "Jordan", flag: "🇯🇴", states: [{ code: "AM", name: "Amman", cities: ["Amman", "Zarqa", "Irbid", "Russeifa", "Quwaysima"] }] },
  { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", states: [{ code: "75", name: "Almaty", cities: ["Almaty", "Nur-Sultan", "Shymkent", "Aktobe", "Taraz"] }] },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", states: [{ code: "KU", name: "Kuwait", cities: ["Kuwait City", "Al Ahmadi", "Hawalli", "As Salimiyah", "Sabah as Salim"] }] },
  { code: "KG", name: "Kyrgyzstan", flag: "🇰🇬", states: [{ code: "GB", name: "Bishkek", cities: ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok"] }] },
  { code: "LA", name: "Laos", flag: "🇱🇦", states: [{ code: "VT", name: "Vientiane", cities: ["Vientiane", "Pakse", "Savannakhet", "Luang Prabang", "Phonsavan"] }] },
  { code: "LB", name: "Lebanon", flag: "🇱🇧", states: [{ code: "BA", name: "Beirut", cities: ["Beirut", "Tripoli", "Sidon", "Tyre", "Nabatieh"] }] },
  { code: "MV", name: "Maldives", flag: "🇲🇻", states: [{ code: "MLE", name: "Malé", cities: ["Malé", "Addu City", "Fuvahmulah", "Kulhudhuffushi", "Thinadhoo"] }] },
  { code: "MN", name: "Mongolia", flag: "🇲🇳", states: [{ code: "1", name: "Ulaanbaatar", cities: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Murun"] }] },
  { code: "MM", name: "Myanmar", flag: "🇲🇲", states: [{ code: "04", name: "Yangon", cities: ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Bago"] }] },
  { code: "NP", name: "Nepal", flag: "🇳🇵", states: [{ code: "3", name: "Bagmati", cities: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur", "Biratnagar"] }] },
  { code: "KP", name: "North Korea", flag: "🇰🇵", states: [{ code: "01", name: "Pyongyang", cities: ["Pyongyang", "Hamhung", "Chongjin", "Nampo", "Wonsan"] }] },
  { code: "OM", name: "Oman", flag: "🇴🇲", states: [{ code: "MA", name: "Muscat", cities: ["Muscat", "Seeb", "Salalah", "Bawshar", "Sohar"] }] },
  { code: "QA", name: "Qatar", flag: "🇶🇦", states: [{ code: "DA", name: "Doha", cities: ["Doha", "Al Rayyan", "Umm Salal", "Al Wakrah", "Al Khor"] }] },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", states: [{ code: "1", name: "Western", cities: ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa", "Sri Jayawardenepura Kotte", "Negombo"] }] },
  { code: "SY", name: "Syria", flag: "🇸🇾", states: [{ code: "DI", name: "Damascus", cities: ["Damascus", "Aleppo", "Homs", "Latakia", "Hama"] }] },
  { code: "TJ", name: "Tajikistan", flag: "🇹🇯", states: [{ code: "DU", name: "Dushanbe", cities: ["Dushanbe", "Khujand", "Kulob", "Qurghonteppa", "Istaravshan"] }] },
  { code: "TL", name: "Timor-Leste", flag: "🇹🇱", states: [{ code: "DI", name: "Dili", cities: ["Dili", "Dare", "Baucau", "Maliana", "Suai"] }] },
  { code: "TM", name: "Turkmenistan", flag: "🇹🇲", states: [{ code: "A", name: "Ahal", cities: ["Ashgabat", "Turkmenbashi", "Dashoguz", "Mary", "Balkanabat"] }] },
  { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", states: [{ code: "TK", name: "Tashkent", cities: ["Tashkent", "Namangan", "Samarkand", "Andijan", "Nukus"] }] },
  { code: "YE", name: "Yemen", flag: "🇾🇪", states: [{ code: "SA", name: "Sana'a", cities: ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Mukalla"] }] },
  { code: "AL", name: "Albania", flag: "🇦🇱", states: [{ code: "11", name: "Tirana", cities: ["Tirana", "Durrës", "Vlorë", "Elbasan", "Shkodër"] }] },
  { code: "AD", name: "Andorra", flag: "🇦🇩", states: [{ code: "07", name: "Andorra la Vella", cities: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Sant Julià de Lòria", "La Massana"] }] },
  { code: "AT", name: "Austria", flag: "🇦🇹", states: [{ code: "9", name: "Vienna", cities: ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck"] }] },
  { code: "BY", name: "Belarus", flag: "🇧🇾", states: [{ code: "HM", name: "Minsk", cities: ["Minsk", "Gomel", "Mogilev", "Vitebsk", "Grodno"] }] },
  { code: "BE", name: "Belgium", flag: "🇧🇪", states: [{ code: "BRU", name: "Brussels", cities: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège"] }] },
  { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦", states: [{ code: "SRP", name: "Sarajevo", cities: ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar"] }] },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬", states: [{ code: "22", name: "Sofia", cities: ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse"] }] },
  { code: "HR", name: "Croatia", flag: "🇭🇷", states: [{ code: "21", name: "Zagreb", cities: ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar"] }] },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿", states: [{ code: "10", name: "Prague", cities: ["Prague", "Brno", "Ostrava", "Plzen", "Liberec"] }] },
  { code: "DK", name: "Denmark", flag: "🇩🇰", states: [{ code: "84", name: "Capital Region", cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg"] }] },
  { code: "EE", name: "Estonia", flag: "🇪🇪", states: [{ code: "37", name: "Harju", cities: ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve"] }] },
  { code: "FI", name: "Finland", flag: "🇫🇮", states: [{ code: "18", name: "Uusimaa", cities: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu"] }] },
  { code: "GR", name: "Greece", flag: "🇬🇷", states: [{ code: "I", name: "Attica", cities: ["Athens", "Thessaloniki", "Patras", "Piraeus", "Larissa"] }] },
  { code: "HU", name: "Hungary", flag: "🇭🇺", states: [{ code: "BU", name: "Budapest", cities: ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs"] }] },
  { code: "IS", name: "Iceland", flag: "🇮🇸", states: [{ code: "1", name: "Capital Region", cities: ["Reykjavík", "Kópavogur", "Hafnarfjörður", "Akureyri", "Garðabær"] }] },
  { code: "IE", name: "Ireland", flag: "🇮🇪", states: [{ code: "L", name: "Leinster", cities: ["Dublin", "Cork", "Limerick", "Galway", "Waterford"] }] },
  { code: "LV", name: "Latvia", flag: "🇱🇻", states: [{ code: "RIX", name: "Riga", cities: ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala"] }] },
  { code: "LI", name: "Liechtenstein", flag: "🇱🇮", states: [{ code: "01", name: "Balzers", cities: ["Vaduz", "Schaan", "Balzers", "Triesen", "Eschen"] }] },
  { code: "LT", name: "Lithuania", flag: "🇱🇹", states: [{ code: "VL", name: "Vilnius", cities: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"] }] },
  { code: "LU", name: "Luxembourg", flag: "🇱🇺", states: [{ code: "L", name: "Luxembourg", cities: ["Luxembourg City", "Esch-sur-Alzette", "Dudelange", "Schifflange", "Bettembourg"] }] },
  { code: "MT", name: "Malta", flag: "🇲🇹", states: [{ code: "01", name: "Malta", cities: ["Valletta", "Birkirkara", "Mosta", "Qormi", "Żabbar"] }] },
  { code: "MD", name: "Moldova", flag: "🇲🇩", states: [{ code: "CU", name: "Chișinău", cities: ["Chișinău", "Tiraspol", "Bălți", "Bender", "Rîbnița"] }] },
  { code: "MC", name: "Monaco", flag: "🇲🇨", states: [{ code: "MC", name: "Monaco", cities: ["Monaco"] }] },
  { code: "ME", name: "Montenegro", flag: "🇲🇪", states: [{ code: "16", name: "Podgorica", cities: ["Podgorica", "Nikšić", "Pljevlja", "Bijelo Polje", "Cetinje"] }] },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", states: [{ code: "NH", name: "North Holland", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"] }] },
  { code: "MK", name: "North Macedonia", flag: "🇲🇰", states: [{ code: "85", name: "Skopje", cities: ["Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo"] }] },
  { code: "NO", name: "Norway", flag: "🇳🇴", states: [{ code: "03", name: "Oslo", cities: ["Oslo", "Bergen", "Stavanger", "Trondheim", "Drammen"] }] },
  { code: "PL", name: "Poland", flag: "🇵🇱", states: [{ code: "MZ", name: "Mazovia", cities: ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań"] }] },
  { code: "PT", name: "Portugal", flag: "🇵🇹", states: [{ code: "11", name: "Lisbon", cities: ["Lisbon", "Porto", "Amadora", "Braga", "Setúbal"] }] },
  { code: "RO", name: "Romania", flag: "🇷🇴", states: [{ code: "B", name: "Bucharest", cities: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța"] }] },
  { code: "SM", name: "San Marino", flag: "🇸🇲", states: [{ code: "07", name: "San Marino", cities: ["San Marino", "Serravalle", "Borgo Maggiore", "Domagnano", "Fiorentino"] }] },
  { code: "RS", name: "Serbia", flag: "🇷🇸", states: [{ code: "00", name: "Belgrade", cities: ["Belgrade", "Novi Sad", "Niš", "Kragujevac", "Subotica"] }] },
  { code: "SK", name: "Slovakia", flag: "🇸🇰", states: [{ code: "BC", name: "Bratislava", cities: ["Bratislava", "Košice", "Prešov", "Žilina", "Banská Bystrica"] }] },
  { code: "SI", name: "Slovenia", flag: "🇸🇮", states: [{ code: "61", name: "Ljubljana", cities: ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje"] }] },
  { code: "SE", name: "Sweden", flag: "🇸🇪", states: [{ code: "AB", name: "Stockholm", cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås"] }] },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", states: [{ code: "ZH", name: "Zurich", cities: ["Zurich", "Geneva", "Basel", "Lausanne", "Bern"] }] },
  { code: "UA", name: "Ukraine", flag: "🇺🇦", states: [{ code: "30", name: "Kyiv", cities: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk"] }] },
  { code: "VA", name: "Vatican City", flag: "🇻🇦", states: [{ code: "VA", name: "Vatican City", cities: ["Vatican City"] }] },
  { code: "CL", name: "Chile", flag: "🇨🇱", states: [{ code: "RM", name: "Santiago Metropolitan", cities: ["Santiago", "Puente Alto", "Antofagasta", "Viña del Mar", "Valparaíso"] }] },
  { code: "CO", name: "Colombia", flag: "🇨🇴", states: [{ code: "DC", name: "Bogotá", cities: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"] }] },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷", states: [{ code: "SJ", name: "San José", cities: ["San José", "Cartago", "Puntarenas", "Liberia", "Limón"] }] },
  { code: "CU", name: "Cuba", flag: "🇨🇺", states: [{ code: "03", name: "Havana", cities: ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Santa Clara"] }] },
  { code: "DO", name: "Dominican Republic", flag: "🇩🇴", states: [{ code: "01", name: "Distrito Nacional", cities: ["Santo Domingo", "Santiago", "La Romana", "San Pedro de Macorís", "San Francisco de Macorís"] }] },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", states: [{ code: "P", name: "Pichincha", cities: ["Quito", "Guayaquil", "Cuenca", "Santo Domingo", "Machala"] }] },
  { code: "SV", name: "El Salvador", flag: "🇸🇻", states: [{ code: "SS", name: "San Salvador", cities: ["San Salvador", "Soyapango", "Santa Ana", "San Miguel", "Mejicanos"] }] },
  { code: "GT", name: "Guatemala", flag: "🇬🇹", states: [{ code: "01", name: "Guatemala", cities: ["Guatemala City", "Mixco", "Villa Nueva", "Petapa", "San Juan Sacatepéquez"] }] },
  { code: "HT", name: "Haiti", flag: "🇭🇹", states: [{ code: "HT-OU", name: "Ouest", cities: ["Port-au-Prince", "Cap-Haïtien", "Gonaïves", "Les Cayes", "Pétion-Ville"] }] },
  { code: "HN", name: "Honduras", flag: "🇭🇳", states: [{ code: "FM", name: "Francisco Morazán", cities: ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso"] }] },
  { code: "JM", name: "Jamaica", flag: "🇯🇲", states: [{ code: "01", name: "Kingston", cities: ["Kingston", "Spanish Town", "Portmore", "Montego Bay", "May Pen"] }] },
  { code: "NI", name: "Nicaragua", flag: "🇳🇮", states: [{ code: "MN", name: "Managua", cities: ["Managua", "León", "Masaya", "Matagalpa", "Chinandega"] }] },
  { code: "PA", name: "Panama", flag: "🇵🇦", states: [{ code: "8", name: "Panamá", cities: ["Panama City", "Colón", "David", "La Chorrera", "Santiago"] }] },
  { code: "PY", name: "Paraguay", flag: "🇵🇾", states: [{ code: "ASU", name: "Asunción", cities: ["Asunción", "Ciudad del Este", "Luque", "San Lorenzo", "Capiatá"] }] },
  { code: "PE", name: "Peru", flag: "🇵🇪", states: [{ code: "LMA", name: "Lima", cities: ["Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura"] }] },
  { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹", states: [{ code: "POS", name: "Port of Spain", cities: ["Port of Spain", "San Fernando", "Chaguanas", "Arima", "Point Fortin"] }] },
  { code: "UY", name: "Uruguay", flag: "🇺🇾", states: [{ code: "10", name: "Montevideo", cities: ["Montevideo", "Salto", "Paysandú", "Las Piedras", "Rivera"] }] },
  { code: "VE", name: "Venezuela", flag: "🇻🇪", states: [{ code: "A", name: "Distrito Capital", cities: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay"] }] },
  { code: "BS", name: "Bahamas", flag: "🇧🇸", states: [{ code: "NP", name: "New Providence", cities: ["Nassau", "Lucaya", "Freeport", "West End", "Cooper's Town"] }] },
  { code: "BB", name: "Barbados", flag: "🇧🇧", states: [{ code: "01", name: "Christ Church", cities: ["Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown"] }] },
  { code: "BZ", name: "Belize", flag: "🇧🇿", states: [{ code: "BZ", name: "Belize", cities: ["Belize City", "San Ignacio", "Orange Walk", "Belmopan", "Dangriga"] }] },
  { code: "DM", name: "Dominica", flag: "🇩🇲", states: [{ code: "02", name: "Saint Andrew", cities: ["Roseau", "Portsmouth", "Marigot", "Berekua", "Mahaut"] }] },
  { code: "GD", name: "Grenada", flag: "🇬🇩", states: [{ code: "04", name: "Saint George", cities: ["St. George's", "Gouyave", "Grenville", "Victoria", "Sauteurs"] }] },
  { code: "GY", name: "Guyana", flag: "🇬🇾", states: [{ code: "4", name: "Demerara-Mahaica", cities: ["Georgetown", "Linden", "New Amsterdam", "Anna Regina", "Bartica"] }] },
  { code: "KN", name: "Saint Kitts and Nevis", flag: "🇰🇳", states: [{ code: "01", name: "Christ Church Nichola Town", cities: ["Basseterre", "Charlestown", "Newcastle", "Cayon", "Dieppe Bay Town"] }] },
  { code: "LC", name: "Saint Lucia", flag: "🇱🇨", states: [{ code: "01", name: "Anse la Raye", cities: ["Castries", "Bisee", "Vieux Fort", "Micoud", "Soufrière"] }] },
  { code: "VC", name: "Saint Vincent and the Grenadines", flag: "🇻🇨", states: [{ code: "01", name: "Charlotte", cities: ["Kingstown", "Georgetown", "Barrouallie", "Port Elizabeth", "Chateaubelair"] }] },
  { code: "SR", name: "Suriname", flag: "🇸🇷", states: [{ code: "PM", name: "Paramaribo", cities: ["Paramaribo", "Lelydorp", "Brokopondo", "Nieuw Nickerie", "Moengo"] }] },
  { code: "FJ", name: "Fiji", flag: "🇫🇯", states: [{ code: "C", name: "Central", cities: ["Suva", "Nasinu", "Lautoka", "Nadi", "Labasa"] }] },
  { code: "KI", name: "Kiribati", flag: "🇰🇮", states: [{ code: "G", name: "Gilbert Islands", cities: ["Tarawa", "Betio", "Bikenibeu", "Teaoraereke", "Bairiki"] }] },
  { code: "MH", name: "Marshall Islands", flag: "🇲🇭", states: [{ code: "MAJ", name: "Majuro", cities: ["Majuro", "Ebeye", "Arno", "Mili", "Wotje"] }] },
  { code: "FM", name: "Micronesia", flag: "🇫🇲", states: [{ code: "PNI", name: "Pohnpei", cities: ["Palikir", "Weno", "Tofol", "Nett", "Kitti"] }] },
  { code: "NR", name: "Nauru", flag: "🇳🇷", states: [{ code: "01", name: "Aiwo", cities: ["Yaren", "Aiwo", "Anabar", "Anetan", "Anibare"] }] },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", states: [{ code: "AUK", name: "Auckland", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga"] }] },
  { code: "PW", name: "Palau", flag: "🇵🇼", states: [{ code: "002", name: "Aimeliik", cities: ["Ngerulmud", "Koror", "Airai", "Melekeok", "Ngchesar"] }] },
  { code: "PG", name: "Papua New Guinea", flag: "🇵🇬", states: [{ code: "NCD", name: "National Capital District", cities: ["Port Moresby", "Lae", "Mount Hagen", "Popondetta", "Madang"] }] },
  { code: "WS", name: "Samoa", flag: "🇼🇸", states: [{ code: "TU", name: "Tuamasaga", cities: ["Apia", "Asau", "Mulifanua", "Leulumoega", "Lufilufi"] }] },
  { code: "SB", name: "Solomon Islands", flag: "🇸🇧", states: [{ code: "CT", name: "Central", cities: ["Honiara", "Auki", "Gizo", "Munda", "Noro"] }] },
  { code: "TO", name: "Tonga", flag: "🇹🇴", states: [{ code: "04", name: "Tongatapu", cities: ["Nuku'alofa", "Neiafu", "Haveluloto", "Vaini", "Pangai"] }] },
  { code: "TV", name: "Tuvalu", flag: "🇹🇻", states: [{ code: "FUN", name: "Funafuti", cities: ["Funafuti", "Savave", "Tanrake", "Toga", "Asau"] }] },
  { code: "VU", name: "Vanuatu", flag: "🇻🇺", states: [{ code: "SEE", name: "Shefa", cities: ["Port Vila", "Luganville", "Norsup", "Isangel", "Sola"] }] }
];

export const getCountriesList = () => countries
  .map(country => ({
    value: country.code,
    label: `${country.flag} ${country.name}`
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

export const getStatesByCountry = (countryCode: string) => {
  const country = countries.find(c => c.code === countryCode);
  return country ? country.states.map(state => ({ 
    value: state.code, 
    label: state.name 
  })) : [];
};

export const getCitiesByState = (countryCode: string, stateCode: string) => {
  const country = countries.find(c => c.code === countryCode);
  if (!country) return [];
  
  const state = country.states.find(s => s.code === stateCode);
  return state ? state.cities.map(city => ({ 
    value: city, 
    label: city 
  })) : [];
};
