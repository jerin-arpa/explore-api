function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))
}

function displayComment(comments) {
    const commentContainer = document.getElementById('comment-container');
    for (const comment of comments) {
        console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h4>ID: ${comment.id}</h4>
            <h2>Name: ${comment.name}</h2>
            <h3>Email: ${comment.email}</h3>
            <p>Body: ${comment.body}</p>
       `;
        commentContainer.appendChild(commentDiv);
    }
}

loadComment();