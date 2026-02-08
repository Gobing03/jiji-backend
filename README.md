# Learn with Jiji – Backend (VeidaLabs Assignment)

This project implements the backend service for **Learn with Jiji**, an AI learning companion.  
The backend is responsible for accepting user queries, retrieving relevant learning resources from Supabase, and returning a structured response for the frontend.

---

## Tech Stack

- Node.js + Express
- Supabase (PostgreSQL, Auth, Storage)
- Row Level Security (RLS)

---

## Project Structure

src/
config/ -> Supabase client setup
controllers/ -> API logic
routes/ -> API routes
middleware/ -> Auth middleware
app.js -> Express app config
server.js -> Server entry point
supabase/
schema.sql -> Table definitions
rls-policies.sql -> RLS policies


---

## How to Run

### 1. Install dependencies

npm install


### 2. Create `.env`

SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_anon_key
PORT=3000


### 3. Start server

node server.js


Server runs at:

http://localhost:3000


---

## API Endpoint

### POST `/ask-jiji`

#### Headers

| Key | Value |
|-----|------|
| x-user-id | UUID from Supabase Auth |
| Content-Type | application/json |

#### Body

```json
{
  "query": "rag"
}
Response
{
  "answer": "Here’s a simple explanation for \"rag\"",
  "resources": {
    "ppt": "ppt_url",
    "video": "video_url"
  }
}