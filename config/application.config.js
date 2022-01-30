module.exports = {
  PORT: process.env.PORT || 3000,
  security: {
    SESSION_SECRET: "YOUR-SESSION-SECRET-STRING",
    ACCONT_LOCK_WINDOW: 30,
    ACCONT_LOCK_THRESHOLD: 5,
    ACCONT_LOCK_TIME: 60,
    MAX_LOGIN_HISTORY: 20,
  },
  search: {
    MAX_ITEMS_PER_PAGE: 5
  }
};
