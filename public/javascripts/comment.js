addEventListener("DOMContentLoaded", e => {
    const commentModal = document.getElementById("comment-modal")
    const comment = document.getElementById("new-comment-box");
    const submit = document.getElementById("new-comment-submit");
    const cancel = document.getElementById("new-comment-cancel");

    let text;

    cancel.addEventListener("click", () => {
        comment.value = "";
    })

    comment.addEventListener("keyup", () => {
        text = comment.value;
        if (text) {
            submit.style.backgroundColor = "rgba(27, 137, 23)";
        } else {
            submit.style.backgroundColor = "rgba(27, 137, 23, 0.339)";
        };
    });

    submit.addEventListener("mouseover", () => {
        if (text) {
            submit.style.backgroundColor = "rgba(27, 137, 23, 0.80)";
        }
    })

    submit.addEventListener("mouseleave", () => {
        if (text) {
            submit.style.backgroundColor = "rgba(27, 137, 23)";
        }
    })

    submit.addEventListener("click", async (e) => {

        const url = window.location.href;
        const storyId = url.slice(url.length - 1);

        if (text) {
            const res = await fetch("/comment", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text,
                    storyId,
                }),
            })
            // .then(res => console.log("##### res: ", res))
            console.log("THIS DOES NOT PRINT")
            const data = await res.json();
            console.log("^^^^^^ res: ", data);
            if (res.message === 'success') {
                const userId = res.userId;

                // comment container
                const newComment = document.createElement("div");
                newComment.setAttribute("class", "comment-container");
                // comment header
                const commentHeader = document.createElement("div");
                commentHeader.setAttribute("class", "comment-container-header")
                // comment user image container
                const commentUserImg = document.createElement("div");
                commentUserImg.setAttribute("class", "comment-user-img")
                // actual image
                const img = document.createElement("img");
                // user info container
                const commentUserInfo = document.createElement("div");
                commentUserInfo.setAttribute("class", "comment-user-info")
                // author of comment
                const commentAuthor = document.createElement("a");
                commentAuthor.setAttribute("class", "comment-author")
                commentAuthor.setAttribute("href", `/users/${userId}`)
                // days ago
                const commentDaysAgo = document.createElement("div");
                commentDaysAgo.setAttribute("class", "comment-daysAgo")
                // comment content
                const commentContent = document.createElement("div");
                commentContent.setAttribute("class", "comment-content")

                // append children as necessary
                newComment.appendChild(commentHeader);
                newComment.appendChild(commentContent);
                commentHeader.appendChild(commentUserImg);
                commentHeader.appendChild(commentUserInfo);
                commentUserImg.appendChild(img);
                commentUserInfo.appendChild(commentAuthor);
                commentUserInfo.appendChild(commentDaysAgo);

                // put this new comment at top of list
                const commentList = document.getElementById("comment-list");
                const firstComment = commentList[0];

                console.log("@@@@ comment list: ", commentList)
                console.log("**** first comment: ", firstComment)
                console.log("%%%% new comment: ", newComment)
                document.insertBefore(newComment, firstComment);
            };
        };
    });
});