const userProfilePage = ({ username }) => {
  return <div>{username}</div>;
};

export default userProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(req, "this isreq");
  console.log(res, "this is res");
  //   console.log(params);
  return {
    props: {
      username: "Vinay",
    },
  };
}
