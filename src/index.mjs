const TARGET_URL = "https://dorianmarie.com/";
const PERMANENT_REDIRECT = 301;

export default {
  fetch() {
    return Response.redirect(TARGET_URL, PERMANENT_REDIRECT);
  },
};
