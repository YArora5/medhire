# MedHire

MedHire is a full-stack healthcare recruitment application prototype with a JavaScript frontend and an Express/MongoDB backend. It models nurse profiles, hospital profiles, and hiring requests.

## Local development

1. Install a supported Node.js LTS release and run MongoDB locally.
2. In `backend/`, copy `.env.example` to `.env` and set a unique, random `JWT_SECRET`.
3. Run `npm install` and then `npm start` in `backend/`.
4. In `frontend/`, run `npm install` and the available development script from `package.json`.

Never commit `.env` files, uploaded documents, tokens, or production data. The committed environment file has been removed from this branch; rotate any secret that was previously committed because deleting a file does not remove it from Git history.

## Current limitations

This is a portfolio prototype, not a production-ready healthcare platform. Before real use, add request validation, authorization/role checks, rate limiting, safer upload validation and storage, centralized error handling, automated tests, and a security review. Do not store real personal or medical information in a public demo.
