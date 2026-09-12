# Spaza — Local + Supabase Connection

## Start the website
1. Open this folder in VS Code.
2. Open Terminal.
3. Run:
   `npm run dev`
4. Open:
   `http://localhost:3000`

No npm package installation is required for the local server.

## Supabase
This project is connected to the Spaza Marketplace project:
`https://gbyujowoqalxtbhpdbod.supabase.co`

The frontend uses the Supabase publishable key in `js/supabase.js`.
Never add a Supabase service-role/secret key to frontend files.

## Login
Use the single account gateway:
`auth-choice.html`

Admin:
`Admin / Staff -> Sign In`

The admin login checks the ADMIN/OWNER/staff role and sends an authorized admin to `admin.html`.

If an old email-confirmation link opens with `otp_expired`, do not reuse that link. Sign in again or request a new confirmation/reset email.
