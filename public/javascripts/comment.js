addEventListener("DOMContentLoaded", e => {

    handleModalPopUp();
    handleCRUD();

    // handle comment creation
    const comment = document.getElementById("new-comment-box");
    const submit = document.getElementById("new-comment-submit");
    const cancel = document.getElementById("new-comment-cancel");

    let text;

    cancel.addEventListener("click", (e) => {
        e.stopImmediatePropagation
        comment.value = "";
        submit.style.backgroundColor = "rgba(27, 137, 23, 0.339)"
        toggleFooter();
    })

    comment.addEventListener("click", showFooter)

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

    submit.addEventListener("click", async () => {

        const url = window.location.href.split("/");
        const storyId = url[url.length - 1];

        if (text) {
            const res = await fetch("/comment", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text,
                    storyId,
                }),
            })

            // create DOM content
            const data = await res.json();
            const { message, user } = data;

            if (message === 'success') {
                comment.value = "";

                const userId = user.id;

                // comment container
                const newComment = document.createElement("div");
                newComment.setAttribute("class", "comment-container");
                // comment header
                const commentHeader = document.createElement("div");
                commentHeader.setAttribute("class", "comment-container-header");
                // comment user image container
                const commentUserImg = document.createElement("div");
                commentUserImg.setAttribute("class", "comment-user-img");
                // actual image
                const img = document.createElement("img");
                img.setAttribute("src", `https://picsum.photos/${Math.floor(Math.random() * 50)}`);
                img.setAttribute("class", "comment-user-img");
                // user info container
                const commentUserInfo = document.createElement("div");
                commentUserInfo.setAttribute("class", "comment-user-info");
                // author of comment
                const commentAuthor = document.createElement("a");
                commentAuthor.setAttribute("class", "comment-author");
                commentAuthor.setAttribute("href", `/users/${userId}`);
                commentAuthor.innerText = `${user.firstName} ${user.lastName}`;
                // days ago
                const commentDaysAgo = document.createElement("div");
                commentDaysAgo.setAttribute("class", "comment-daysAgo");
                commentDaysAgo.innerText = "posted just now.";
                // comment content
                const commentContent = document.createElement("div");
                commentContent.setAttribute("class", "comment-content");
                commentContent.innerText = text;
                // comment footer
                const commentFooter = document.createElement("div");
                commentFooter.setAttribute("class", "comment-footer");
                // footer edit
                const footerEdit = document.createElement("div");
                footerEdit.setAttribute("class", "comment-footer-edit");
                footerEdit.innerText = "Edit";
                footerEdit.addEventListener("click", editComment);
                // footer delete
                const footerDelete = document.createElement("div");
                footerDelete.setAttribute("class", "comment-footer-delete");
                footerDelete.innerText = "Delete";
                footerDelete.addEventListener("click", deleteComment);


                // append children as necessary
                newComment.appendChild(commentHeader);
                newComment.appendChild(commentContent);
                newComment.appendChild(commentFooter);
                commentHeader.appendChild(commentUserImg);
                commentHeader.appendChild(commentUserInfo);
                commentUserImg.appendChild(img);
                commentUserInfo.appendChild(commentAuthor);
                commentUserInfo.appendChild(commentDaysAgo);
                commentFooter.appendChild(footerEdit);
                commentFooter.appendChild(footerDelete);

                // put this new comment at top of list
                const commentList = document.getElementById("comment-list");
                const firstComment = commentList.children[0];
                if (firstComment) {
                    firstComment.insertAdjacentElement("beforebegin", newComment);
                } else {
                    commentList.appendChild(newComment);
                }

                removeWowEmpty();
                updateResponseNumber();
                updateCommentCount();
            };
        };
    });
});


const handleModalPopUp = () => {

    const commentModal = document.getElementById("comment-modal");

    // comment button toggle
    const commentButton = document.getElementById('comment');

    commentButton.addEventListener("click", () => {
        toggleGreyOut();
        commentModal.classList.toggle("hideCommentModal");
        commentModal.classList.toggle("showCommentModal");

    })

    // cancel button
    const cancelButton = document.getElementById("new-comment-cancel")
    cancelButton.addEventListener("click", () => {
        toggleGreyOut();
        commentModal.classList.toggle("hideCommentModal");
        commentModal.classList.toggle("showCommentModal");
    })

    // x out button
    const xOut = document.getElementById("comment-close-out");
    xOut.addEventListener("click", () => {
        toggleGreyOut();
        commentModal.classList.toggle("hideCommentModal");
        commentModal.classList.toggle("showCommentModal");
    })

    // clicking greyOut
    const sideBar = document.getElementsByClassName("sidebar")[0];
    const singleStory = document.getElementById("single-story-resource");
    sideBar.addEventListener("click", closeCommentModalOnGreyClick, commentModal)
    singleStory.addEventListener("click", closeCommentModalOnGreyClick, commentModal)
}

const handleCRUD = () => {
    const editNodes = document.querySelectorAll(".footer-edit");
    const deleteNodes = document.querySelectorAll(".footer-delete");

    editNodes.forEach(node => {
        node.addEventListener("click", editComment)
    });
    deleteNodes.forEach(node => {
        node.addEventListener("click", () => deleteComment(node))
    });
}

const editComment = (e) => {
    // get commentId from edit button's id
    const commentId = e.target.id;
    // get container div using commentId
    const contentContainer = document.getElementById(`content-container-${commentId}`);
    // get the comment using commentId
    const comment = document.getElementById(`comment-${commentId}`)
    // hide the comment
    comment.classList.add("hiddenOnComments");

    // create a container
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "new-comment-container");
    commentContainer.setAttribute("id", "edit-comment-container");
    // create a padding container for the textarea
    const commentBoxContainer = document.createElement("div")
    commentBoxContainer.setAttribute("class", "new-comment-box-container");
    // create a text box for new user input
    const newCommentInput = document.createElement("textarea");
    newCommentInput.setAttribute("class", "new-comment-box editTextArea")
    newCommentInput.setAttribute("id", `edit-${commentId}`)

    // append children
    contentContainer.appendChild(commentContainer);
    commentContainer.appendChild(commentBoxContainer);
    commentBoxContainer.appendChild(newCommentInput);

    // toggle footers
    toggleFooters(commentId);

    // make save or cancel click events
    const saveButtons = document.querySelectorAll(".footer-save");
    saveButtons.forEach(button => button.addEventListener('click', fetchEditComment));
    const cancelButtons = document.querySelectorAll(".footer-cancel");
    cancelButtons.forEach(button => button.addEventListener('click', cancelEdit));
}

const toggleFooters = (commentId) => {
    const footers = document.querySelectorAll(`.footer-${commentId}`);
    footers.forEach(footer => {
        footer.classList.toggle("hiddenOnComments")
    });
}

const fetchEditComment = (e) => {
    const commentId = e.target.id.split("-")[1]

    // get value from new comment box
    const editedTextArea = document.getElementById(`edit-${commentId}`);
    const text = editedTextArea.value;

    // remove edit comment container
    const editContainer = document.getElementById("edit-comment-container");
    editContainer.remove();

    // add back hidden comment and update text
    const comment = document.getElementById(`comment-${commentId}`);
    comment.innerText = text;
    comment.classList.remove("hiddenOnComments");

    // toggle footers back
    toggleFooters(commentId);
}

const cancelEdit = (e) => {
    const commentId = e.target.id.split("-")[1]
    // remove edit comment container
    const editContainer = document.getElementById("edit-comment-container");
    editContainer.remove();

    // add back hidden comment
    const comment = document.getElementById(`comment-${commentId}`);
    comment.classList.remove("hiddenOnComments");

    // toggle footers back
    toggleFooters(commentId);
}

const updateResponseNumber = () => {
    const modalTitle = document.getElementById("comment-modal-title");
    const modalTitleText = modalTitle.innerText
    const openParen = modalTitleText.indexOf("(")
    const closeParen = modalTitleText.indexOf(")")
    const number = parseInt(modalTitle.innerText.slice(openParen + 1, closeParen)) + 1;

    modalTitle.innerText = `Responses (${number})`
}

const removeWowEmpty = () => {
    const wowEmpty = document.getElementById("wow-empty")

    if (wowEmpty) {
        wowEmpty.remove();
    }
}

let footerCount = 0;
const toggleFooter = () => {
    const footer = document.getElementById("new-comment-container-footer");
    if (footerCount % 2 === 0) {
        footer.style.display = "flex";
        footerCount++;
    } else {
        footer.style.display = "none";
        footerCount++;
    }
}

const updateCommentCount = () => {
    const commentCount = document.getElementById("comment-count");
    const commentCountInt = parseInt(commentCount.innerText) + 1;
    commentCount.innerText = commentCountInt;
}

const showFooter = () => {
    const footer = document.getElementById("new-comment-container-footer");
    footer.style.display = "flex";
    footerCount++;
}

let greyOutCount = 0;
const toggleGreyOut = () => {
    const greyOut = document.getElementById("comment-modal-greyOut");

    if (greyOutCount % 2 === 0) {
        greyOut.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
        greyOutCount++;
    } else {
        greyOut.style.backgroundColor = "";
        greyOutCount++;
    }
}

const closeCommentModalOnGreyClick = () => {
    const commentModal = document.getElementById("comment-modal");

    if (commentModal.classList.contains("showCommentModal")) {
        toggleGreyOut();
        commentModal.classList.toggle("hideCommentModal");
        commentModal.classList.toggle("showCommentModal");
    }
}