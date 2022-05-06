function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const userName = req.body.username;
    const comment = req.body.comment;
  }
}

export default handler;
