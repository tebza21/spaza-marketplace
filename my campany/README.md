# Spaza Website — Fixed Customer/Admin Navigation

This package fixes the prototype's non-working customer/admin navigation and
adds real Supabase Auth/catalogue reads.

New pages:
- account.html — customer account
- admin.html — admin centre
- updated login.html — Supabase Auth
- updated orders.html — authenticated customer orders

Important:
The browser uses the Supabase publishable key only. A real admin account must
have an ADMIN/OWNER/appropriate staff role in the database before protected
admin data can be changed. RLS remains the security boundary.

Next development module:
connect the full CRUD screens (products, sellers, orders, finance,
advertising and accounting) instead of placeholder admin actions.
