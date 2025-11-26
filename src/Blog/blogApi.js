const API_URL = "http://localhost:3001";

async function getPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
}

async function getPost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
}

async function createPost(post) {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  });

  if (!res.ok) throw new Error("Erro ao criar post");
  return res.json();
}

async function addComment(postId, comment) {
  const res = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, ...comment })
  });

  return res.json();
}

export default {
  getPosts,
  getPost,
  createPost,
  addComment
};
