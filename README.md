# Budget

Budget-friendly restaurant finder built with **Next.js** (frontend) and **Express.js** (backend).

## Project Structure

```
Budget/
├── README.md
├── next.config.mjs
├── package.json          # Frontend dependencies
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
├── src/
│   ├── app/              # Next.js App Router pages & layouts
│   ├── components/       # Reusable React components
│   ├── data/             # Static/mock data (TypeScript)
│   ├── lib/              # Shared utilities (fetcher, etc.)
│   └── utils/            # Helper functions (e.g., calculateDistance)
└── backend/
    ├── package.json      # Backend dependencies
    ├── server.js         # Express entry point
    ├── routes/
    │   └── restaurants.js
    ├── data/
    │   └── mockRestaurants.js
    └── utils/
        └── calculateDistance.js
```

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend

```bash
cd backend
npm install
npm run dev
```

The API will be available at [http://localhost:5000](http://localhost:5000).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/restaurants` | List all restaurants |
| GET | `/api/restaurants?lat=&lng=&radius=` | List nearby restaurants |
| GET | `/api/restaurants/:id` | Get restaurant by ID |
