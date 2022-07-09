export default async function handler(req, res) {
  if (req.body.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    const urls = req.body.urls;
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      await res.revalidate(url);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
