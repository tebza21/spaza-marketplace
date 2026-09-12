async function getProducts() {
  const { data, error } = await SpazaDB
    .from("products")
    .select(`
      id,name,description,image_url,brand_id,category_id,
      brands(id,name),
      categories(id,name),
      seller_offers(
        id,offer_number,product_id,seller_id,price,condition,
        delivery_information,return_policy,status,
        sellers(id,business_name,rating,status)
      )
    `)
    .eq("is_active", true)
    .order("name");

  if (error) throw error;
  return data || [];
}

async function getProduct(productId) {
  const { data, error } = await SpazaDB
    .from("products")
    .select(`
      *,
      brands(id,name),
      categories(id,name)
    `)
    .eq("id", productId)
    .eq("is_active", true)
    .single();

  if (error) throw error;
  return data;
}

async function getSellerOffers(productId) {
  const { data, error } = await SpazaDB
    .from("seller_offers")
    .select(`
      id,offer_number,product_id,seller_id,price,condition,
      delivery_information,return_policy,status,
      sellers(id,business_name,rating,status)
    `)
    .eq("product_id", productId)
    .eq("status", "ACTIVE")
    .order("price", { ascending: true });

  if (error) throw error;
  return data || [];
}
