export default async function handler(req, res) {
  if (
    req.body.username !== "iamsupermod" ||
    req.body.password !== "iamsuperthemod"
  ) {
    res.status(401).json({ error: "Unauthorized" });
  }

  const urls = req.body.urls;
  res.json({ revalidated: true });
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      await res.revalidate(url);
      console.log("Revalidated: " + url);
    } catch (err) {
      console.log("Failed to revalidate: " + url);
    }
  }

  return;
}
