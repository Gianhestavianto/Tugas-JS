const commentInput = document.getElementById("commentInput");
const submitComment = document.getElementById("submitComment");
const commentList = document.getElementById("commentList");
const errorComment = document.getElementById("errorComment");

submitComment.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    errorComment.textContent = "";

    if (commentText.length < 5) {
        errorComment.textContent = "Komentar harus minimal 5 karakter!";
        return;
    }

    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";

    const commentP = document.createElement("p");
    commentP.textContent = commentText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", function () {
        commentList.removeChild(commentItem);
    });

    commentItem.appendChild(commentP);
    commentItem.appendChild(deleteBtn);
    commentList.appendChild(commentItem);

    commentInput.value = "";
});
