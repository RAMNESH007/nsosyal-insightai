# NSosyal InsightAI

An Explainable AI-Powered Social Experience Platform. This repository contains the foundation UI/UX for the NSosyal InsightAI project, built as a unified explainable-AI trust layer.

## Architecture

The system is designed with a multi-tier architecture to serve both Viewers and Creators through a single, shared Explainable AI Engine:

1.  **Frontend (Current Implementation)**
    *   **Tech Stack**: React, TypeScript, Vite, Tailwind CSS v4, Lucide React (Icons).
    *   **Role**: Delivers the user interfaces for Viewers (Home Feed, Feed DNA, Aya) and Creators (Creator Lens, Revenue Center).
    *   **Structure**:
        *   `src/pages/Login.tsx`: The authentication entry point.
        *   `src/pages/Explore.tsx`: The main feed, incorporating the "Why am I seeing this?" explainability panel.
        *   `src/components/Layout.tsx`: The primary application shell containing the sidebar navigation.

2.  **Application Backend (Planned)**
    *   **Tech Stack**: Node.js, Express, TypeScript.
    *   **Role**: Handles authentication, feed assembly, user preference management, and orchestrates calls to the AI Engine.

3.  **AI Service Layer (Planned)**
    *   **Tech Stack**: Python, FastAPI, PyTorch/Transformers.
    *   **Role**: Executes ML models for Turkish-native toxicity/spam classification, embedding-based recommendation ranking (topic match, freshness, etc.), and LLM-based natural language explanations (Aya).

4.  **Database & Vector Store (Planned)**
    *   **Tech Stack**: PostgreSQL (via Supabase), pgvector.
    *   **Role**: Persists user profiles, content, interactions, and stores embeddings for semantic similarity and creator-brand matching.

## Development Guide

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Setup
1. Clone this repository.
2. Navigate to the `frontend` directory: `cd frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Project Structure (Frontend)
```text
frontend/
├── src/
│   ├── components/       # Reusable UI components (e.g., Layout, FeedCard)
│   ├── pages/            # Main application views (e.g., Login, Explore)
│   ├── App.tsx           # Application routing
│   └── index.css         # Global styles and Tailwind configuration
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite and Tailwind configuration
```

## Next Steps for Refinement
1.  **Database Initialization**: Set up a Supabase project and create the core schemas (`users`, `content`, `interactions`, `user_preferences`).
2.  **Backend Implementation**: Scaffolding the Node.js API to serve dynamic feed data.
3.  **AI Engine Integration**: Creating the Python/FastAPI service and connecting it to the Turkish NLP models and pgvector.
4.  **Creator Features**: Building out the `Creator Lens` and `Feed DNA` interactive D3.js visualisations.
