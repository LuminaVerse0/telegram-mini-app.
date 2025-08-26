export default async function handler(req, res) {
  try {
    const { wallet, chain = "ethereum" } = req.query;

    if (!wallet) {
      return res.status(400).json({ error: "Wallet address is required" });
    }

    const url = `https://api.thirdweb.com/v1/account/${wallet}/nfts?chain_id=${chain}&metadata=true&resolve_metadata_links=true&clientId=${process.env.THIRDWEB_CLIENT_ID}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch NFTs", details: err.message });
  }
}