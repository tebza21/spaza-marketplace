# Spaza Admin Centre

The Admin Centre now has real module pages for:
- Products: admin-products.html
- Sellers: admin-sellers.html

These pages read the live Supabase database and respect RLS.

The next modules should be connected in this order:
1. Seller applications
2. Orders + fulfilments
3. Inventory
4. Payments/invoices
5. Returns/refunds/disputes
6. Finance/payouts/commission
7. Advertising
8. Accounting/reports
9. Audit/security

Do not remove RLS or use service-role keys in browser code.
