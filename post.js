function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    console.log(posts);
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
              <h3>User-${post.userId}</h3>
              <h4>Post: ${post.title}</h4>
              <p>Post Description: ${post.body}</p>
            `;
        postContainer.appendChild(postDiv);
    }
}

loadPost();