## Running the Likes Microservice

1. Clone the Repository:
```bash
git clone <repository_url>
cd likes-microservice
```

2. Install Dependencies:
```bash
npm install
```

3. Set Up Environment Variables:
> Create a .env file in the root directory and add the following variables:
```env
PORT=3000
MONGODB_URI=mongodb://mongodb:27017/likesDB
```

> Replace mongodb://mongodb:27017/likesDB with the appropriate MongoDB URI.

4. Run the Microservice:
```bash
npm start
```

> The microservice will start on the specified port (default: 8080).

## API Endpoints
1. Store Like Event:

Endpoint: `POST /likes`

Input Fields: `user_id`, `content_id`

2. Check if User Has Liked a 
Particular Content:

Endpoint: `GET /likes/check`

Input Fields: `user_id`, `content_id`

Output: Boolean (true if liked, false otherwise)

3. Total Likes for a Content:
    Endpoint: `GET /likes/count`

    Input Fields: `content_id`

    Output: Number of likes for the given content
