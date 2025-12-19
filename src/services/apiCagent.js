export async function getBrowserInfo() {
  const response = await fetch("https://api.apicagent.com/?ua=navigator");
  return response.json();
}
