import useFetchData from "./useFetchData";

function FetchData() {
  const url = "https://api.github.com/users/QuincyLarson";

  const { isLoading, isError, user } = useFetchData(url);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  if (user === null) return <h1>No user</h1>;
  const { avatar_url, name, company, bio } = user;
  console.log(user);

  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default FetchData;
