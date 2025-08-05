import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mihnaweekluzoltxeycq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1paG5hd2Vla2x1em9sdHhleWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTU3OTAsImV4cCI6MjA2OTg5MTc5MH0.HutuMevBwdAv0nQPAWyUGnBL1y7n0CWlV-kLFBUbI0I";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
