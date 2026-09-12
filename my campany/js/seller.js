async function getMySeller() {
  const {data:{user},error:uerr}=await SpazaDB.auth.getUser();
  if(uerr) throw uerr;
  if(!user) throw new Error("Please sign in first.");
  const {data,error}=await SpazaDB.from("sellers").select("*").eq("profile_id",user.id).maybeSingle();
  if(error) throw error;
  return data;
}
async function submitSellerApplication(payload){
  const {data:{user}}=await SpazaDB.auth.getUser();
  if(!user) throw new Error("Please sign in first.");
  const application_number="APP-"+Date.now();
  const {data,error}=await SpazaDB.from("seller_applications").insert({
    application_number,profile_id:user.id,...payload
  }).select().single();
  if(error) throw error;
  return data;
}
async function mySellerApplications(){
  const {data:{user}}=await SpazaDB.auth.getUser();
  if(!user) return [];
  const {data,error}=await SpazaDB.from("seller_applications").select("*").eq("profile_id",user.id).order("created_at",{ascending:false});
  if(error) throw error; return data||[];
}
