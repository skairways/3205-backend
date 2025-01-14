## Features

- **URL-Shortener**: Returns 6 char shortened version of provided URL.
- **Short-URL-info**: Returns shortURL click count, created time and original URL.

## Tech Stack

- Nest.js, Typescript, Docker, Postresql

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd 3205-backend
   ```

2. **Install**

   ```bash
   npm install
   ```

   ```bash
   docker compose up -d db
   docker compose build
   ```

3. **Run the backend server**

   ```bash
   npm run start
   ```

   ```bash
   docker compose up
   ```

4. **Backend Endpoints**

   ```bash
   POST /url/shorten: creates shortened URL.
     Query Parameters:
       originalUrl (string, required)

   GET /url/:shortUrl: returns originalUrl.

   GET /url/info/:shortUrl: returns information related to short URL.

   DELETE /url/:shortUrl: deletes data related to shortURL.
   ```

5. **.env example**

   ```
   DB_TYPE=postgres
   PG_HOST=localhost
   PG_USER=postgres
   PG_PASSWORD=postgres
   PG_DB=postgres
   PG_PORT=5432
   ```
