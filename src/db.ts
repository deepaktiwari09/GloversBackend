export const Coach_Subscriptions = {
  yearly: "CY01",
  monthly: "CM01",
  season: "CS01",
};

export const Fan_Subscriptions = {
  yearly: "FY01",
  monthly: "FM01",
  season: "FS01",
};

export const subscriptionPlan = [
  {
    id: Coach_Subscriptions.yearly,
    title: "Annual Pass",
    amount: "$159.99/year",
    // discount: "Save 50%",
  },
  {
    id: Coach_Subscriptions.season,
    title: "Season Pass",
    amount: "$19.99/3 month",
  },
  {
    id: Coach_Subscriptions.monthly,
    title: "Monthly Pass",
    amount: "$59.99/month",
  },
];

export const subscriptionImages = [
  {
    id: "1",
    title: "Event Management",
    image: "",
    description:
      "Create match events with other teams and manage your events. you can able to handle scoring of games, live streaming and commentary of match",
  },
  {
    id: "2",
    title: "Team Management",
    image: "",
    description: "Create Teams and manage your teams for leagues and seasons.",
  },
  {
    id: "3",
    title: "Player Management",
    image: "",
    description:
      "Add Players in your teams and manage there playing positions and other related data.",
  },
  {
    id: "4",
    title: "Staff Management",
    image: "",
    description:
      "Add Staff members in your teams for handling scoring and other tasks.",
  },
  {
    id: "5",
    title: "Fan Management",
    image: "",
    description:
      "Add Fans into your teams and invite them to watch your team matches",
  },
  {
    id: "6",
    title: "Event History",
    image: "",
    description:
      "For each your games all the stats, live stream and player stats is always available for you as event history",
  },
  {
    id: "7",
    title: "Live Streaming",
    image: "",
    description:
      "For Every match you have option to do live stream of game. so that you fans can watch your team games live",
  },
  {
    id: "8",
    title: "Live Scoring",
    image: "",
    description:
      "For Every match you have option to do Scoring of that match. so that you fans can see live scoring of that match",
  },
  {
    id: "9",
    title: "Live Commentary",
    image: "",
    description:
      "With Live stream and Live scoring your fan also able to see live Commentary.",
  },
];

export const subscriptionFanPlan = [
  {
    id: Fan_Subscriptions.yearly,
    title: "Annual Pass",
    amount: "$19.99/year",
    // discount: "Save 50%",
  },
  {
    id: Fan_Subscriptions.season,
    title: "Season Pass",
    amount: "$9.99/3 month",
  },
  {
    id: Fan_Subscriptions.monthly,
    title: "Monthly Pass",
    amount: "$4.99/month",
  },
];
export const subscriptionFanImages = [
  {
    id: "1",
    title: "Muliple Games",
    image: "",
    description: "Choose from various games and enjoy your favorite games",
  },
  {
    id: "2",
    title: "Live Scoring",
    image: "",
    description: "Watch Live Score for your favorite Matches",
  },
  {
    id: "3",
    title: "Live Streaming",
    image: "",
    description: "Watch Live Game for your favorite Matches",
  },
  {
    id: "4",
    title: "Live Commentary",
    image: "",
    description: "Watch Live Commentary for your favorite Matches",
  },
];
