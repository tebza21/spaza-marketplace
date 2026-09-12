async function getCurrentUser() {
  const { data, error } = await SpazaDB.auth.getUser();
  if (error) throw error;
  return data.user;
}

async function signIn(email, password) {
  const { data, error } =
    await SpazaDB.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signUp(email, password, fullName = "") {
  const { data, error } = await SpazaDB.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } }
  });
  if (error) throw error;
  return data;
}

async function signOut() {
  const { error } = await SpazaDB.auth.signOut();
  if (error) throw error;
}
