
async function requireStaff() {
  const { data: { user } } = await SpazaDB.auth.getUser();
  if (!user) throw new Error("Please sign in first.");
  return user;
}
async function adminProducts() {
  const { data, error } = await SpazaDB.from("products").select("*").order("created_at",{ascending:false});
  if (error) throw error; return data || [];
}
async function adminSellers() {
  const { data, error } = await SpazaDB.from("sellers").select("*").order("created_at",{ascending:false});
  if (error) throw error; return data || [];
}
async function adminOrders() {
  const { data, error } = await SpazaDB.from("orders").select("*,order_items(*),seller_orders(*)").order("created_at",{ascending:false});
  if (error) throw error; return data || [];
}
