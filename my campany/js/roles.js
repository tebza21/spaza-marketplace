async function getSessionRoles(){
  const {data:{user}}=await SpazaDB.auth.getUser();
  if(!user) return {user:null,codes:[]};
  const {data,error}=await SpazaDB.from('profile_roles').select('roles(code,name)').eq('profile_id',user.id);
  if(error) throw error;
  return {user,codes:(data||[]).map(x=>x.roles?.code).filter(Boolean)};
}
async function signOut(){await SpazaDB.auth.signOut(); location.href='index.html';}
function roleNav(codes){
  const admin=codes.some(x=>['OWNER','ADMIN','FINANCE','MARKETING','PRODUCT_MANAGER','SUPPORT'].includes(x));
  const seller=codes.includes('SELLER');
  return `<a href="portal.html">My Portal</a>${seller?'<a href="seller-centre.html">Seller Centre</a>':''}${admin?'<a href="admin.html">Admin Centre</a>':''}<button class="btn" onclick="signOut()">Log out</button>`;
}
