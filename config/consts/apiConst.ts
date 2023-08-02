const isProduction = process.env.NODE_ENV === "production";
const API_URL = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
  : "http://127.0.0.1:4000/graphql";

const API_KEY = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
  : "letmein";

export { isProduction, API_URL, API_KEY };
