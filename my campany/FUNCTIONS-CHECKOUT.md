Spaza checkout improvements:
- Cart +/- quantity, remove, clear and checkout navigation.
- Checkout page requires a signed-in user.
- Real carts with UUID seller offers call Supabase checkout_create_order.
- Live checkout creates order, order items, seller fulfilments, invoice, invoice items, pending payment and transaction references.
- Demo catalogue can complete a clearly-labelled local test checkout; it does not invent database products.
- Orders page displays live Supabase orders and local test orders.
- Wishlist and product tabs work.
