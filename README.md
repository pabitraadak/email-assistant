# Attune — AI Personal Assistant Email Dashboard

A responsive React + Vite prototype for the AI Full-Stack Engineer Intern assignment.

## Deploy to Vercel
1. Extract this ZIP.
2. Upload the folder to a GitHub repository.
3. In Vercel, choose **Add New → Project**, import the repository and deploy.
4. Vercel detects Vite automatically. No environment variables are required for the demo.

## Run locally
```bash
npm install
npm run dev
```

## Demo features
- Assistant dashboard and minimal client view toggle.
- Sample inbox with responsibility labels, search, filters and segments.
- Manual owner reassignment, important/unread toggles, archive and mark handled.
- Conversation view, AI summary/explanation, AI reply draft and review action.
- Simulated Gmail/Outlook connection modal.
- LocalStorage persistence for inbox changes.
- `/api/assistant` Vercel serverless function for demo AI actions.

## Honest prototype limitations
Email accounts are simulated; no real Gmail/Outlook OAuth or email sync is implemented. The API uses rule-based demo responses, not a live LLM. Reply review does not send email. For real AI, connect a model API in the serverless function and keep the key in Vercel Environment Variables. For real email access, implement OAuth with Gmail API / Microsoft Graph and secure server-side token storage.
