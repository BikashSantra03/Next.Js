const Users = async () => {
  if (2 > 1) {
    throw new Error("Error in the dashboard");
  }
  return <h1>Users Page</h1>;
};

export default Users;
