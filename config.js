window.CONFIG = {
  siteName: "NFL Recognition Game",

  title: "NFL Recognition Game",
  subtitle: "How well do you recognize NFL players?",

  description: "Test how well you recognize NFL players. One attempt per face.",

  datasetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTV4PjFbv-M_K_InwKSbE1daaGaf3Y0KGCTuUqPTud4wL1Iedibf8LxoNkgHHhWZj27Ylr-EVlO1Cgp/pub?output=csv",

  totalPerRound: 20,
  pointsPerCorrect: 1,

  itemLabel: "Player",

  shareTemplate:
    "I scored {score} / {max} on NFL Recognition Game. Can you beat me?",
  shareUrl: "https://nflrecognitiongame.com",

  endMessages: [
    { min: 16, text: "You really know your NFL." },
    { min: 12, text: "Solid — but you missed some legends." },
    { min: 8,  text: "You know the faces. The names are harder." },
    { min: 0,   text: "That was rough. Time to brush up on NFL history." }
  ],

  background: {
    start: "#e8f5e9",
    end: "#c8e6c9"
  },

  relatedGames: [
    { name: "NBA", url: "https://nbarecognitiongame.com" },
    { name: "NFL", url: "https://nflrecognitiongame.com" },
    { name: "Soccer", url: "https://soccerrecognitiongame.com" },
    { name: "UFC", url: "https://ufcrecognitiongame.com" },
    { name: "Celebrity", url: "https://celebrityrecognitiongame.com" }
  ]
  
};
