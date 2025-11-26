const API_URL = "http://localhost:3001";

const blogApi = {
  getPosts: async () => {
    const res = await fetch(`${API_URL}/posts`);
    return res.json();
  },

  getPost: async (id) => {
    const res = await fetch(`${API_URL}/posts/${id}`);
    return res.json();
  },

  createPost: async (data) => {
    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Erro ao criar post");
    return res.json();
  }
};

export default blogApi;
