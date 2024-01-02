"use strict";
const AuthorOne = {
    name: "rassoul",
    avatar: "/assets/images/author-1.jpg",
};
const newPost = {
    title: "nouveau post",
    body: "lorem lorem lorem",
    tags: ["gaming", "sport"],
    create_at: new Date(),
    author: AuthorOne,
};
console.log(newPost);
// -----------------------------
// as function argument types
// -----------------------------
function createPost(post) {
    console.log(` created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// -----------------
// whith arrays
// ----------------
let posts = [];
posts.push({
    title: "deuxieme post",
    body: "deuxieme lorem lorem lorem",
    tags: ["tech", "code"],
    create_at: new Date(),
    author: AuthorOne,
});
console.log(posts);
