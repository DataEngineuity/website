# Data Engineuity Website

Official full-stack website repository for Data Engineuity.

> Clarity from Complexity · 11111101001

## Structure

```text
data-engineuity-website/
├── frontend/                 # Vite + React public website
│   ├── public/               # OG image, favicon, robots and sitemap
│   └── src/
│       ├── components/       # Page sections and reusable UI
│       ├── data/             # Public-facing site content
│       ├── App.jsx
│       └── styles.css
├── backend/                  # Django + DRF scaffold for future functionality
│   ├── apps/core/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
└── docs/
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Production build:

```bash
npm run build
```

For Vercel, set the project Root Directory to `frontend`. Vite's default output directory is `dist`.

## Backend placeholder

```bash
cd backend
python -m venv .venv
```

Activate the environment and install dependencies:

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Available placeholder routes:

```text
GET /api/
GET /api/health/
GET /admin/
```

Planned backend domains are enquiries, quotation requests, meeting requests, portfolio projects, clients and partners.

## Local full-stack development

The Vite development server proxies `/api` requests to `http://127.0.0.1:8000`.
Run Django on port 8000 and React on port 5173.

## Deployment direction

- Frontend: Vercel
- Backend: a Python-capable host, container platform or managed VM
- Production API hostname: `https://api.dataengineuity.com`

The React frontend currently preserves the supplied static design and behaviour while making each section maintainable as a component.
