# SPAZA final product review build

This branch is a visual review build for the SPAZA marketplace. It is intentionally separate from the production Supabase project.

## Review pages
- `prototype/index.html` — public marketplace home
- `prototype/shop.html` — catalogue/search and empty state
- `prototype/product.html` — product + seller-offer comparison experience
- `prototype/seller-centre.html` — seller operating dashboard
- `prototype/account.html` — customer portal
- `prototype/admin.html` — admin operating dashboard

The review build does not invent live products, sellers, prices, ratings, stock or transactions. Empty states make the data boundary explicit. Production data and controlled workflows remain in Supabase and should be connected only after the UI is approved.
