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
            const { message, user, newCommentId } = data;

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
                const editDeleteFooter = document.createElement("div");
                editDeleteFooter.setAttribute("class", "edit-delete-footer");
                // footer edit
                const footerEdit = document.createElement("div");
                footerEdit.setAttribute("class", "footer-edit");
                footerEdit.innerText = "Edit";
                footerEdit.addEventListener("click", editComment);
                // footer delete
                const footerDelete = document.createElement("div");
                footerDelete.setAttribute("class", "footer-delete");
                footerDelete.innerText = "Delete";
                footerDelete.addEventListener("click", deleteComment);
                // footer edit-save
                const saveCancelFooter = document.createElement("div");
                saveCancelFooter.setAttribute("class", "save-cancel-footer")
                saveCancelFooter.setAttribute("class", `hiddenOnComments sc-footer-${comment.id}`)
                // save button
                const saveButton = document.createElement("div");
                saveButton.setAttribute("class", "footer-save");
                saveButton.setAttribute("id", `save-${newCommentId}`);
                saveButton.innerText = "Save";
                // cancel button
                const editCancelButton = document.createElement("div");
                editCancelButton.setAttribute("class", "footer-cancel");
                editCancelButton.setAttribute("id", `cancel-${newCommentId}`);
                editCancelButton.innerText = "Cancel";
                // footer yes-cancel
                const yesCancelFooter = document.createElement("div");
                yesCancelFooter.setAttribute("class", `hiddenOnComments yc-footer-${newCommentId}`)
                // delete confirm button
                const confirmDelete = document.createElement("div");
                confirmDelete.setAttribute("class", "footer-save");
                confirmDelete.setAttribute("id", `yc-save-${newCommentId}`);
                confirmDelete.innerText = "Delete";
                // delete cancel button
                const cancelDelete = document.createElement("div");
                cancelDelete.setAttribute("class", "footer-cancel");
                cancelDelete.setAttribute("id", `yc-cancel-${newCommentId}`);
                cancelDelete.innerText = "Cancel";

                // append children as necessary
                newComment.appendChild(commentHeader);
                newComment.appendChild(commentContent);
                newComment.appendChild(editDeleteFooter);
                newComment.appendChild(saveCancelFooter);
                newComment.appendChild(yesCancelFooter);
                commentHeader.appendChild(commentUserImg);
                commentHeader.appendChild(commentUserInfo);
                commentUserImg.appendChild(img);
                commentUserInfo.appendChild(commentAuthor);
                commentUserInfo.appendChild(commentDaysAgo);
                editDeleteFooter.appendChild(footerEdit);
                editDeleteFooter.appendChild(footerDelete);
                saveCancelFooter.appendChild(saveButton);
                saveCancelFooter.appendChild(editCancelButton);
                yesCancelFooter.appendChild(confirmDelete);
                yesCancelFooter.appendChild(cancelDelete);

                // put this new comment at top of list
                const commentList = document.getElementById("comment-list");
                const firstComment = commentList.children[0];
                if (firstComment) {
                    firstComment.insertAdjacentElement("beforebegin", newComment);
                } else {
                    commentList.appendChild(newComment);
                }

                removeWowEmpty();
                updateResponseNumber(true);
                updateCommentCount(true);
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
        node.addEventListener("click", confirmDelete)
    });
}

const editComment = (e) => {
    // get commentId from edit button's id
    const commentId = e.target.id.split("-")[1];
    // get container div using commentId
    const contentContainer = document.getElementById(`content-container-${commentId}`);
    // get the comment using commentId
    const comment = document.getElementById(`comment-${commentId}`)
    // hide the comment
    comment.classList.add("hiddenOnComments");

    // create a container
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "new-comment-container");
    commentContainer.setAttribute("id", `edit-container-${commentId}`);
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
    toggleFooters(`sc-footer-${commentId}`);

    // make save or cancel click events
    const saveButtons = document.querySelectorAll(".footer-save");
    saveButtons.forEach(button => button.addEventListener('click', fetchEditComment));
    const cancelButtons = document.querySelectorAll(".footer-cancel");
    cancelButtons.forEach(button => button.addEventListener('click', cancelEdit));
}

const toggleFooters = (className) => {
    const footers = document.querySelectorAll(`.${className}`);
    footers.forEach(footer => {
        footer.classList.toggle("hiddenOnComments")
    });
}

const fetchEditComment = async (e) => {
    const commentId = e.target.id.split("-")[1]

    // get value from new comment box
    const editedTextArea = document.getElementById(`edit-${commentId}`);
    const text = editedTextArea.value;

    // remove edit comment container
    const editContainer = document.getElementById(`edit-container-${commentId}`);
    editContainer.remove();

    // add back hidden comment and update text
    const comment = document.getElementById(`comment-${commentId}`);
    comment.innerText = text;
    comment.classList.remove("hiddenOnComments");

    // toggle footers back
    toggleFooters(`sc-footer-${commentId}`);

    // update daysAgo
    const daysAgo = document.getElementById(`daysAgo-${commentId}`);
    daysAgo.innerText = 'Posted today'

    // send fetch
    const res = await fetch(`/comment/${commentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });
}

const cancelEdit = (e) => {
    const commentId = e.target.id.split("-")[1]
    // remove edit comment container
    const editContainer = document.getElementById(`edit-container-${commentId}`);
    editContainer.remove();

    // add back hidden comment
    const comment = document.getElementById(`comment-${commentId}`);
    comment.classList.remove("hiddenOnComments");

    // toggle footers back
    toggleFooters(`sc-footer-${commentId}`);
}

const confirmDelete = (e) => {
    const commentId = e.target.id.split("-")[1];
    toggleFooters(`yc-footer-${commentId}`);

    const confirmDeleteButton = document.getElementById(`yc-save-${commentId}`);
    confirmDeleteButton.addEventListener("click", deleteComment);

}

const deleteComment = async (e) => {
    const commentId = e.target.id.split("-")[2];

    const res = await fetch(`/comment/${commentId}`, {
        method: "DELETE",
    })

    const container = document.getElementById(`comment-container-${commentId}`);
    container.remove();
    updateResponseNumber(false);
    updateCommentCount(false);
}

const updateResponseNumber = (increase) => {
    const modalTitle = document.getElementById("comment-modal-title");
    const modalTitleText = modalTitle.innerText
    const openParen = modalTitleText.indexOf("(")
    const closeParen = modalTitleText.indexOf(")")

    let number;
    if (increase) {
        number = parseInt(modalTitle.innerText.slice(openParen + 1, closeParen)) + 1;
    } else {
        number = parseInt(modalTitle.innerText.slice(openParen + 1, closeParen)) - 1;
    }

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

const updateCommentCount = (increase) => {
    const commentCount = document.getElementById("comment-count");
    let commentCountInt
    if (increase) {
        commentCountInt = parseInt(commentCount.innerText) + 1;
    } else {
        commentCountInt = parseInt(commentCount.innerText) - 1;
    }
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