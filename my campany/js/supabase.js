// Spaza Supabase connection
const SPAZA_SUPABASE_URL = "https://gbyujowoqalxtbhpdbod.supabase.co";
const SPAZA_SUPABASE_KEY = "sb_publishable_NrSUNf4j1hYor9a6G74DHQ_xl3h-vsv";

const supabaseClient = window.supabase.createClient(
  SPAZA_SUPABASE_URL,
  SPAZA_SUPABASE_KEY
);

window.SpazaDB = supabaseClient;
