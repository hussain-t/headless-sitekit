export async function getTags() {
  const res = await fetch(`${process.env.WORDPRESS_SITEKIT_ENDPOINT}/core/modules/data/tags`);
  return res.json();
}

export async function getVerificationTag() {
  const res = await fetch(`${process.env.WORDPRESS_SITEKIT_ENDPOINT}/core/user/data/verification-tag`);
  return res.json();
}
