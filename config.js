window.CONFIG = {
  siteName: "NFL Recognition Game",

  title: "NFL Recognition Game",
  subtitle: "How well do you recognize NFL players?",

  description: "Test how well you recognize NFL players. One attempt per face.",

  datasetUrl: "", // we’ll add this next

  totalPerRound: 20,
  pointsPerCorrect: 10,

  itemLabel: "Player",

  shareTemplate:
    "I scored {score} / {max} on NFL Recognition Game. Can you beat me?",
  shareUrl: "https://nflrecognitiongame.com",

  endMessages: [
    { min: 160, text: "You really know your NFL." },
    { min: 120, text: "Solid — but you missed some legends." },
    { min: 80,  text: "You know the faces. The names are harder." },
    { min: 0,   text: "That was rough. Time to brush up on NFL history." }
  ],

  background: {
    start: "#e8f5e9",
    end: "#c8e6c9"
  }
};
