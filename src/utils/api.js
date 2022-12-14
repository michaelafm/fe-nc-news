import axios from "axios";

const myApi = axios.create({
  baseURL: "https://real-gray-elephant-ring.cyclic.app/api",
});

export const getArticles = (sort_by, order, topic) => {
  return myApi
    .get(`/articles`, { params: { sort_by, order, topic } })
    .then((res) => {
      return res.data.articles;
    })
};

export const getArticleById = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticle = (article_id, vote) => {
  let patchBody = {};
  if (vote === "Vote") {
    patchBody.inc_votes = 1;
  } else if (vote === "Unvote") {
    patchBody.inc_votes = -1;
  }
  return myApi.patch(`/articles/${article_id}`, patchBody).then((res) => {
    return res.data.updatedArticle;
  });
};

export const getUsers = () => {
  return myApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const postComment = (newComment, article_id) => {
  return myApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data.comment;
    });
};

export const getTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const deleteCommentById = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.status
  });
};

