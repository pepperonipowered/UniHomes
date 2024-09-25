import { Star, User, Users2, Warehouse } from "lucide-react";

/* eslint-disable sort-keys */
const spiels = {
  // Home
  CTA_LABEL: "Call to Action",
  CTA_DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  FOOTER: "© 2024 UniHomes. All rights reserved.",
  HERO_BADGE: "New Release",
  HERO_DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  HOW_IT_WORKS: "How It Works",
  HOW_IT_WORKS_CARDS: [
    {
      label: "Search Property",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      label: "Explore Property",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      label: "Choose Property",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
  ],
  STATS_LABEL: "STATS",
  STATS_HEADER: "Here are some stats to look at",
  STATS_DATA: [
    {
      label: "Clients",
      stat: "21K",
      description: "+21 since last hour",
      avatar: User,
    },
    {
      label: "Properties",
      stat: "1200",
      description: "+21 since last hour",
      avatar: Warehouse,
    },
    {
      label: "Lessors",
      stat: "100",
      description: "+21 since last hour",
      avatar: Users2,
    },
    {
      label: "Ratings",
      stat: "200",
      description: "+21 since last hour",
      avatar: Star,
    },
  ],
  TESTIMONIALS_LABEL: "TESTIMONIALS",
  TESTIMONIALS_HEADER: "Meet our happy clients",

  //Favorites
  TAB_ALL: "All",
  TAB_UNREAD: "Unread",
  FAVORITES_SUBHEADER: "Explore Saved Listings",

  // Messages
  MESSAGES_HEADER: "Inbox",
  MESSAGES_NO_RESULT: "No results found.",
  MESSAGES_NO_CHATS_SELECTED: "No chats selected.",

  // Buttons
  BUTTON_BACK: "Back",
  BUTTON_BOOK_NOW: "Book Now",
  BUTTON_CANCEL: "Cancel",
  BUTTON_CONTINUE: "Continue",
  BUTTON_CONFIRM: "Confirm",
  BUTTON_DEACTIVATE: "Deactivate",
  BUTTON_DEACTIVATE_ACCOUNT: "Deactivate Account",
  BUTTON_DELETE: "Delete",
  BUTTON_EXPLORE_NOW: "Explore Now",
  BUTTON_FILTER: "Filter",
  BUTTON_LEARN_MORE: "Learn More",
  BUTTON_LOGIN: "Login",
  BUTTON_NEXT: "Next",
  BUTTON_PROCEED: "Proceed",
  BUTTON_RESET_FILTER: "Reset Filters",
  BUTTON_SAVE: "Save",
  BUTTON_SEND: "Send",
  BUTTON_SEND_RESET_REQUEST: "Send Reset Request",
  BUTTON_SET_APPOINTMENT: "Set Appointment",
  BUTTON_SIGN_IN: "Sign In",
  BUTTON_SIGN_UP: "Sign Up",
  BUTTON_SUBMIT: "Submit",
  BUTTON_SUBSCRIBE: "Subscribe",
  BUTTON_VIEW: "View",
  BUTTON_VIEW_ALL: "View all",
  BUTTON_SHOW_LISTINGS: "Show Listings",
  BUTTON_BACK_HOME: "Back to Home",
  BUTTON_SEARCH: "Search",
  BUTTON_BUY: "Buy Now",
  BUTTON_START_NOW: "Start Now",
  BUTTON_EXPLORE: "Explore",

  NAVBAR_OVERALL_LIST: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Listings",
      href: "#listings",
    },
    // For logged in users
    {
      label: "Messages",
      href: "#messages",
    },
    {
      label: "Favorites",
      href: "#favorites",
    },
  ],
  NAVBAR_MENU_LIST_WITH_DROPDOWN: [
    {
      label: "Home",
      href: "#home",
      description: "Description for Home",
    },
  ],

  NAVBAR_MENU_LIST_WITHOUT_DROPDOWN: [
    {
      label: "Listings",
      href: "#listings",
    },
    // For logged in users
    {
      label: "Messages",
      href: "#messages",
    },
    {
      label: "Favorites",
      href: "#favorites",
    },
  ],

  NAVBAR_HOME_MENUCONTENT: [
    {
      label: "Introduction",
      href: "home/introduction",
      description: "What is UniHomes?",
    },
    {
      label: "Features",
      href: "home/features",
      description: "How it works",
    },
    {
      label: "Reviews and Ratings",
      href: "home/reviewsandratings",
      description: "Testimonials",
    },
  ],
};

export default spiels;
