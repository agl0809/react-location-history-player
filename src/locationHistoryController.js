export default async function getCoordinates({ url, parser }) {
  const response = await fetch(url);
  const data = await response.json();

  return parser(data);
}
