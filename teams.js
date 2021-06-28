const teams = [
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Atlanta",
    "altCityName": "Atlanta",
    "fullName": "Atlanta Hawks",
    "tricode": "ATL",
    "teamId": "1610612737",
    "nickname": "Hawks",
    "urlName": "hawks",
    "teamShortName": "Atlanta",
    "confName": "East",
    "divName": "Southeast",
    "mainColours" : ["#ff1515"],
    "teamLogo" : "https://logodetimes.com/times/atlanta-hawks/logo-atlanta-hawks-2048.png"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Boston",
    "altCityName": "Boston",
    "fullName": "Boston Celtics",
    "tricode": "BOS",
    "teamId": "1610612738",
    "nickname": "Celtics",
    "urlName": "celtics",
    "teamShortName": "Boston",
    "confName": "East",
    "divName": "Atlantic",
    "mainColours" : ["#089600"],
    "teamLogo" : "https://logos-download.com/wp-content/uploads/2018/06/Boston_Celtics_logo_green.svg"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Brooklyn",
    "altCityName": "Brooklyn",
    "fullName": "Brooklyn Nets",
    "tricode": "BKN",
    "teamId": "1610612751",
    "nickname": "Nets",
    "urlName": "nets",
    "teamShortName": "Brooklyn",
    "confName": "East",
    "divName": "Atlantic",
    "mainColours" : ["#000000"],
    "teamLogo" : "https://logodownload.org/wp-content/uploads/2021/04/brooklyn-nets-logo-6.png"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Charlotte",
    "altCityName": "Charlotte",
    "fullName": "Charlotte Hornets",
    "tricode": "CHA",
    "teamId": "1610612766",
    "nickname": "Hornets",
    "urlName": "hornets",
    "teamShortName": "Charlotte",
    "confName": "East",
    "divName": "Southeast",
    "mainColours" : ["#b09b2e"],
    "teamLogo" : "https://logodownload.org/wp-content/uploads/2021/04/charlotte-hornets-logo-1.png"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Chicago",
    "altCityName": "Chicago",
    "fullName": "Chicago Bulls",
    "tricode": "CHI",
    "teamId": "1610612741",
    "nickname": "Bulls",
    "urlName": "bulls",
    "teamShortName": "Chicago",
    "confName": "East",
    "divName": "Central",
    "mainColours" : ["#b60303"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Cleveland",
    "altCityName": "Cleveland",
    "fullName": "Cleveland Cavaliers",
    "tricode": "CLE",
    "teamId": "1610612739",
    "nickname": "Cavaliers",
    "urlName": "cavaliers",
    "teamShortName": "Cleveland",
    "confName": "East",
    "divName": "Central",
    "mainColours" : ["#8b1212"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Dallas",
    "altCityName": "Dallas",
    "fullName": "Dallas Mavericks",
    "tricode": "DAL",
    "teamId": "1610612742",
    "nickname": "Mavericks",
    "urlName": "mavericks",
    "teamShortName": "Dallas",
    "confName": "West",
    "divName": "Southwest",
    "mainColours" : ["#007cf5"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Denver",
    "altCityName": "Denver",
    "fullName": "Denver Nuggets",
    "tricode": "DEN",
    "teamId": "1610612743",
    "nickname": "Nuggets",
    "urlName": "nuggets",
    "teamShortName": "Denver",
    "confName": "West",
    "divName": "Northwest",
    "mainColours" : ["#011f70"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Detroit",
    "altCityName": "Detroit",
    "fullName": "Detroit Pistons",
    "tricode": "DET",
    "teamId": "1610612765",
    "nickname": "Pistons",
    "urlName": "pistons",
    "teamShortName": "Detroit",
    "confName": "East",
    "divName": "Central",
    "mainColours" : ["#001aff"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Golden State",
    "altCityName": "Golden State",
    "fullName": "Golden State Warriors",
    "tricode": "GSW",
    "teamId": "1610612744",
    "nickname": "Warriors",
    "urlName": "warriors",
    "teamShortName": "Golden State",
    "confName": "West",
    "divName": "Pacific",
    "mainColours" : ["#255cff"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Houston",
    "altCityName": "Houston",
    "fullName": "Houston Rockets",
    "tricode": "HOU",
    "teamId": "1610612745",
    "nickname": "Rockets",
    "urlName": "rockets",
    "teamShortName": "Houston",
    "confName": "West",
    "divName": "Southwest",
    "mainColours" : ["#ff0000"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Indiana",
    "altCityName": "Indiana",
    "fullName": "Indiana Pacers",
    "tricode": "IND",
    "teamId": "1610612754",
    "nickname": "Pacers",
    "urlName": "pacers",
    "teamShortName": "Indiana",
    "confName": "East",
    "divName": "Central",
    "mainColours" : ["#303bc6"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "LA",
    "altCityName": "LA Clippers",
    "fullName": "LA Clippers",
    "tricode": "LAC",
    "teamId": "1610612746",
    "nickname": "Clippers",
    "urlName": "clippers",
    "teamShortName": "LA Clippers",
    "confName": "West",
    "divName": "Pacific",
    "mainColours" : ["#ffffff"],
    "teamLogo" : "https://images.vexels.com/media/users/3/131274/isolated/preview/011ec17eae5ff9688d23005ad61bf1a8-logotipo-de-clippers-de-los-angeles-by-vexels.png"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Los Angeles",
    "altCityName": "Los Angeles Lakers",
    "fullName": "Los Angeles Lakers",
    "tricode": "LAL",
    "teamId": "1610612747",
    "nickname": "Lakers",
    "urlName": "lakers",
    "teamShortName": "L.A. Lakers",
    "confName": "West",
    "divName": "Pacific",
    "mainColours" : ["#ffc900"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Memphis",
    "altCityName": "Memphis",
    "fullName": "Memphis Grizzlies",
    "tricode": "MEM",
    "teamId": "1610612763",
    "nickname": "Grizzlies",
    "urlName": "grizzlies",
    "teamShortName": "Memphis",
    "confName": "West",
    "divName": "Southwest",
    "mainColours" : ["#69c4ff"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Miami",
    "altCityName": "Miami",
    "fullName": "Miami Heat",
    "tricode": "MIA",
    "teamId": "1610612748",
    "nickname": "Heat",
    "urlName": "heat",
    "teamShortName": "Miami",
    "confName": "East",
    "divName": "Southeast",
    "mainColours" : ["#fc00ff"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Milwaukee",
    "altCityName": "Milwaukee",
    "fullName": "Milwaukee Bucks",
    "tricode": "MIL",
    "teamId": "1610612749",
    "nickname": "Bucks",
    "urlName": "bucks",
    "teamShortName": "Milwaukee",
    "confName": "East",
    "divName": "Central",
    "mainColours" : ["#479e3d"],
    "teamLogo" : "https://cdn.worldvectorlogo.com/logos/milwaukee-bucks-1.svg"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Minnesota",
    "altCityName": "Minnesota",
    "fullName": "Minnesota Timberwolves",
    "tricode": "MIN",
    "teamId": "1610612750",
    "nickname": "Timberwolves",
    "urlName": "timberwolves",
    "teamShortName": "Minnesota",
    "confName": "West",
    "divName": "Northwest",
    "mainColours" : ["#6cff00"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "New Orleans",
    "altCityName": "New Orleans",
    "fullName": "New Orleans Pelicans",
    "tricode": "NOP",
    "teamId": "1610612740",
    "nickname": "Pelicans",
    "urlName": "pelicans",
    "teamShortName": "New Orleans",
    "confName": "West",
    "divName": "Southwest",
    "mainColours" : ["#9c8b2c"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "New York",
    "altCityName": "New York",
    "fullName": "New York Knicks",
    "tricode": "NYK",
    "teamId": "1610612752",
    "nickname": "Knicks",
    "urlName": "knicks",
    "teamShortName": "New York",
    "confName": "East",
    "divName": "Atlantic",
    "mainColours" : ["#ff4000"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Oklahoma City",
    "altCityName": "Oklahoma City",
    "fullName": "Oklahoma City Thunder",
    "tricode": "OKC",
    "teamId": "1610612760",
    "nickname": "Thunder",
    "urlName": "thunder",
    "teamShortName": "Oklahoma City",
    "confName": "West",
    "divName": "Northwest",
    "mainColours" : ["#308ef0"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Orlando",
    "altCityName": "Orlando",
    "fullName": "Orlando Magic",
    "tricode": "ORL",
    "teamId": "1610612753",
    "nickname": "Magic",
    "urlName": "magic",
    "teamShortName": "Orlando",
    "confName": "East",
    "divName": "Southeast",
    "mainColours" : ["#003dff"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Philadelphia",
    "altCityName": "Philadelphia",
    "fullName": "Philadelphia 76ers",
    "tricode": "PHI",
    "teamId": "1610612755",
    "nickname": "76ers",
    "urlName": "sixers",
    "teamShortName": "Philadelphia",
    "confName": "East",
    "divName": "Atlantic",
    "mainColours" : ["#003dff"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Phoenix",
    "altCityName": "Phoenix",
    "fullName": "Phoenix Suns",
    "tricode": "PHX",
    "teamId": "1610612756",
    "nickname": "Suns",
    "urlName": "suns",
    "teamShortName": "Phoenix",
    "confName": "West",
    "divName": "Pacific",
    "mainColours" : ["#ff6a00"],
    "teamLogo" : "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fphx.png"
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Portland",
    "altCityName": "Portland",
    "fullName": "Portland Trail Blazers",
    "tricode": "POR",
    "teamId": "1610612757",
    "nickname": "Trail Blazers",
    "urlName": "blazers",
    "teamShortName": "Portland",
    "confName": "West",
    "divName": "Northwest",
    "mainColours" : ["#d50000"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Sacramento",
    "altCityName": "Sacramento",
    "fullName": "Sacramento Kings",
    "tricode": "SAC",
    "teamId": "1610612758",
    "nickname": "Kings",
    "urlName": "kings",
    "teamShortName": "Sacramento",
    "confName": "West",
    "divName": "Pacific",
    "mainColours" : ["#642ec9"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "San Antonio",
    "altCityName": "San Antonio",
    "fullName": "San Antonio Spurs",
    "tricode": "SAS",
    "teamId": "1610612759",
    "nickname": "Spurs",
    "urlName": "spurs",
    "teamShortName": "San Antonio",
    "confName": "West",
    "divName": "Southwest",
    "mainColours" : ["#595959"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": false,
    "isAllStar": true,
    "city": "Team",
    "altCityName": "Team",
    "fullName": "Team Team Durant",
    "tricode": "DRT",
    "teamId": "1610616833",
    "nickname": "Team Durant",
    "urlName": "team_durant",
    "teamShortName": "Team Durant",
    "confName": "East",
    "divName": "East",
    "mainColours" : [""],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": false,
    "isAllStar": true,
    "city": "Team",
    "altCityName": "Team",
    "fullName": "Team LeBron",
    "tricode": "LBN",
    "teamId": "1610616834",
    "nickname": "Team LeBron",
    "urlName": "team_lebron",
    "teamShortName": "Team LeBron",
    "confName": "West",
    "divName": "West",
    "mainColours" : [""],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Toronto",
    "altCityName": "Toronto",
    "fullName": "Toronto Raptors",
    "tricode": "TOR",
    "teamId": "1610612761",
    "nickname": "Raptors",
    "urlName": "raptors",
    "teamShortName": "Toronto",
    "confName": "East",
    "divName": "Atlantic",
    "mainColours" : ["#f20000"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Utah",
    "altCityName": "Utah",
    "fullName": "Utah Jazz",
    "tricode": "UTA",
    "teamId": "1610612762",
    "nickname": "Jazz",
    "urlName": "jazz",
    "teamShortName": "Utah",
    "confName": "West",
    "divName": "Northwest",
    "mainColours" : ["#293d9f"],
    "teamLogo" : ""
  },
  {
    "isNBAFranchise": true,
    "isAllStar": false,
    "city": "Washington",
    "altCityName": "Washington",
    "fullName": "Washington Wizards",
    "tricode": "WAS",
    "teamId": "1610612764",
    "nickname": "Wizards",
    "urlName": "wizards",
    "teamShortName": "Washington",
    "confName": "East",
    "divName": "Southeast",
    "mainColours" : ["#ee0202"],
    "teamLogo" : ""
  }
];