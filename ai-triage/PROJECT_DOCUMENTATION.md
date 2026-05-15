# AI Triage - Project Documentation

## Overview

**AI Triage** is a bilingual (English/Hindi) AI-powered medical triage system that assists users in assessing their health symptoms and determining the appropriate level of medical care needed. The application uses advanced language models (Groq's Llama) to conduct interactive conversations, collect symptom information, and provide risk assessments categorized as home care, clinic visit, or emergency.

---

## Project Architecture

### Tech Stack

**Backend:**
- **Framework:** FastAPI (Python)
- **LLM API:** Groq (Llama-3.3-70b-versatile)
- **CORS:** Middleware for cross-origin requests
- **Environment:** Python 3.x with virtual environment support

**Frontend:**
- **Framework:** React 19.2.6
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Routing:** React Router v7
- **UI Icons:** Lucide React
- **Styling:** CSS (custom)

---

## Project Structure

```
ai-triage/
├── backend/
│   ├── main.py                 # FastAPI application entry point
│   ├── requirements.txt        # Python dependencies
│   ├── routes/
│   │   ├── __init__.py
│   │   └── triage.py          # Triage endpoint definition
│   └── services/
│       ├── __init__.py
│       └── llm_service.py     # Groq LLM integration & prompting
├── frontend/
│   ├── package.json           # Node dependencies
│   ├── vite.config.js         # Vite configuration with API proxy
│   ├── eslint.config.js       # ESLint configuration
│   ├── index.html             # HTML entry point
│   ├── public/                # Static assets
│   └── src/
│       ├── main.jsx           # React entry point
│       ├── App.jsx            # Main app routing
│       ├── App.css
│       ├── index.css
│       ├── assets/            # Images, icons, etc.
│       ├── components/
│       │   ├── ChatArea.jsx       # Chat interface component
│       │   ├── MessageBubble.jsx  # Message display component
│       │   ├── Sidebar.jsx        # Navigation sidebar
│       │   └── components.css
│       └── pages/
│           ├── Landing.jsx    # Landing page
│           ├── Login.jsx      # Authentication page
│           ├── Home.jsx       # Dashboard with recent assessments
│           └── Dashboard.jsx  # Main triage chat interface
```

---

## Core Features

### 1. **Bilingual Medical Triage**
- Supports English and Hindi
- Responds in the language user initiates
- Context-aware conversation flow

### 2. **Symptom Assessment**
- Interactive symptom collection through conversation
- Follow-up questions about duration, severity, and medical history
- Pattern recognition for multiple symptoms

### 3. **Risk Scoring System**
- **Home Level** (e.g., Risk Score 17): Minor symptoms, self-care at home
- **Clinic Level** (e.g., Risk Score 67): Multiple symptoms, needs doctor appointment soon
- **Emergency Level** (Risk Score: "Attention Required"): Severe/critical symptoms, go to ER immediately

### 4. **User-Friendly Interface**
- Dark theme (similar to NotebookLM)
- Responsive chat interface
- Assessment history tracking
- Recent assessments dashboard

---

## Backend API

### Endpoints

#### 1. **Health Check**
```
GET /
```
**Response:**
```json
{
  "status": "AI Triage Backend Running"
}
```

#### 2. **Triage Assessment**
```
POST /triage
```
**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "I have a headache and fever"
    }
  ]
}
```

**Response:**
```json
{
  "reply": "AI response with assessment and risk scoring JSON included at end"
}
```

### Backend Configuration

**CORS Settings:**
- Allow origins: `*` (all origins)
- Allow methods: All
- Allow headers: All
- Expose headers: All

**LLM Configuration:**
- Model: `llama-3.3-70b-versatile`
- Max tokens: 1000
- API: Groq

---

## LLM Service & System Prompt

### System Prompt Behavior

The LLM is instructed to:

1. **Collect Medical Information:**
   - Gather symptoms through conversational flow
   - Ask clarifying questions
   - Understand patient history

2. **Risk Scoring Rules:**
   ```
   - No medical issue present: risk_score = null
   - Single minor symptom: single integer between 15-20 (home)
   - Multiple/moderate symptoms: single integer between 60-70 (clinic)
   - Severe/critical: "Attention Required" (emergency)
   ```

3. **Response Format:**
   Every response (when symptoms are present) ends with:
   ```json
   {
     "risk_score": 17,
     "level": "home",
     "reason": "brief reason here"
   }
   ```

4. **Disclaimer:**
   Every response includes the disclaimer in both English and Hindi

---

## Frontend Pages & Components

### Pages

1. **Landing.jsx** - Entry point with sign-up/login options
2. **Login.jsx** - User authentication
3. **Home.jsx** - Dashboard showing recent assessments and quick-start options
4. **Dashboard.jsx** - Main triage chat interface

### Components

1. **ChatArea.jsx**
   - Main chat interface
   - Handles message input and sending
   - Displays loading states
   - Enter key support for message submission

2. **MessageBubble.jsx**
   - Renders individual messages
   - Differentiates between user and assistant messages

3. **Sidebar.jsx**
   - Navigation component
   - Assessment history or quick navigation

### Styling
- Dark theme background: `#1e1e24`
- Text color: `#f3f4f6`
- Accent color (icons): `#0ea5e9` (cyan blue)
- Border styling: Subtle with low opacity

---

## Environment Configuration

### Backend (.env file needed)

Create a `.env` file in the `backend/` directory:
```
GROQ_API_KEY=your_groq_api_key_here
```

### Frontend Proxy Configuration

The Vite config proxies API requests:
```javascript
'/api': {
  target: 'http://localhost:8000',
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/api/, '')
}
```

This means frontend calls to `/api/triage` are proxied to `http://localhost:8000/triage`

---

## Setup & Installation

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create .env file:**
   ```bash
   echo "GROQ_API_KEY=your_key_here" > .env
   ```

5. **Run server:**
   ```bash
   uvicorn main:app --reload --port 8000
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Access application:**
   ```
   http://localhost:5173
   ```

---

## Dependencies

### Backend (requirements.txt)
- **fastapi** - Web framework
- **uvicorn** - ASGI server
- **groq** - LLM API client
- **pydantic** - Data validation
- **python-dotenv** - Environment variable management
- **httpx** - HTTP client
- Other: annotated types, request validation, crypto libraries

### Frontend (package.json)
- **react** - UI library
- **react-dom** - DOM rendering
- **react-router-dom** - Routing
- **axios** - HTTP requests
- **lucide-react** - UI icons
- **vite** - Build tool
- **eslint** - Code linting

---

## Development Workflow

### Running Locally

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
python -m uvicorn main:app --reload --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Backend:**
```bash
# No build needed, deploy with requirements.txt
```

**Frontend:**
```bash
npm run build
# Output in dist/ directory
```

---

## API Communication Flow

1. **User Message:** User types symptom description in chat
2. **Request:** Frontend sends to `POST /api/triage` with message history
3. **Proxy:** Vite dev server proxies to `http://localhost:8000/triage`
4. **Processing:** Backend calls Groq LLM with system prompt + messages
5. **Response:** LLM returns assessment with risk score JSON
6. **Display:** Frontend receives and displays response with parsed risk data

---

## Key Features Implementation

### Bilingual Support
- System prompt instructs LLM to detect user language
- Response matches input language (English/Hindi)
- Hindi disclaimer included in system prompt

### Risk Assessment
- LLM evaluates symptoms and assigns score
- Frontend can parse JSON risk block for color-coded display
- Risk levels: home (green), clinic (yellow), emergency (red)

### Chat History
- Messages array maintains conversation context
- Passed with each request to LLM
- Enables contextual follow-up questions

### UI/UX
- Dark theme for reduced eye strain
- Responsive grid layout for assessments
- Smooth transitions and interactive elements
- Clear empty states and loading indicators

---

## Security Considerations

1. **API Key:** Store GROQ_API_KEY in .env (not in version control)
2. **CORS:** Currently allows all origins (should be restricted in production)
3. **Input Validation:** Pydantic models validate request structure
4. **Disclaimer:** Medical disclaimer required on all responses

---

## Potential Enhancements

1. **Authentication:** Implement user login/registration
2. **Database:** Store assessment history
3. **Export:** Generate PDF reports of assessments
4. **Analytics:** Track common symptoms/patterns
5. **Localization:** Expand language support
6. **Mobile App:** React Native version
7. **Offline Mode:** Cache recent assessments
8. **Advanced UI:** Charts/visualizations for risk trends

---

## Troubleshooting

### Backend Issues
- **"GROQ_API_KEY not found":** Ensure .env file exists with valid key
- **"Port 8000 already in use":** Use `--port 8001` or kill existing process
- **CORS errors:** Check CORS middleware configuration

### Frontend Issues
- **API 404 errors:** Verify backend is running on port 8000
- **Proxy not working:** Check vite.config.js configuration
- **Dependencies missing:** Run `npm install` again

### General Issues
- **Module errors:** Clear cache (`rm -rf node_modules .venv`)
- **Port conflicts:** Check with `lsof -i :8000` or `lsof -i :5173`

---

## Code Quality

- **Linting:** Frontend uses ESLint with React plugins
- **Framework Standards:** Follows FastAPI and React best practices
- **Naming:** Clear, descriptive variable and function names
- **Modularity:** Separated concerns (routes, services, components, pages)

---

## Version Information

- **React:** 19.2.6
- **Vite:** 8.0.12
- **FastAPI:** 0.136.1
- **Groq:** 1.2.0
- **Node:** Requires modern LTS version
- **Python:** 3.8+

---

## Contributing Guidelines

1. Follow existing code style
2. Test locally before committing
3. Update documentation for new features
4. Keep dependencies up to date
5. Ensure CORS and security best practices

---

## License & Disclaimer

**Medical Disclaimer:** This application is not a substitute for professional medical advice. Always consult with qualified healthcare providers for medical concerns.

---

## Support & Contact

For issues, questions, or contributions, refer to project documentation or reach out to the development team.

---

*Last Updated: May 15, 2026*
