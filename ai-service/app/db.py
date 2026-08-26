import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

url: str = os.getenv("SUPABASE_URL", "https://YOUR_PROJECT_ID.supabase.co")
key: str = os.getenv("SUPABASE_ANON_KEY", "YOUR_ANON_KEY")

supabase: Client = create_client(url, key)
