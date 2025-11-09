export async function onRequest(context) {
  const token = context.env.NOTION_TOKEN; // <-- secure!
  const databaseId = "296b33cbda0080c39845e8eb8e98b84c";

  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  return new Response(JSON.stringify(data, null, 2), {
    headers: { "content-type": "application/json" }
  });
}
