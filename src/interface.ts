// -------------
// interfaces
// ------------
interface Author {
  name: string;
  avatar: string;
}

const AuthorOne: Author = {
  name: "rassoul",
  avatar: "/assets/images/author-1.jpg",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
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

function createPost(post: Post) {
  console.log(` created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// -----------------
// whith arrays
// ----------------

let posts: Post[] = [];
posts.push({
  title: "deuxieme post",
  body: "deuxieme lorem lorem lorem",
  tags: ["tech", "code"],
  create_at: new Date(),
  author: AuthorOne,
});

console.log(posts);
