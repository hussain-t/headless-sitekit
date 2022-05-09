export async function getGATags() {
  const res = await fetch(`${process.env.WORDPRESS_SITEKIT_ENDPOINT}/core/user/data/verification-tag`);
  return res.json();
}

export async function getVerificationTag() {
  const res = await fetch(`${process.env.WORDPRESS_SITEKIT_ENDPOINT}/core/user/data/verification-tag`);
  return res.json();
}
