addEventListener("DOMContentLoaded", e => {
    const commentModal = document.getElementById("comment-modal")
    const comment = document.getElementById("new-comment-box");
    const submit = document.getElementById("new-comment-submit");
    const cancel = document.getElementById("new-comment-cancel");

    let text;

    console.log(submit)

    cancel.addEventListener("click", () => {
        comment.value = "";
    })

    comment.addEventListener("keyup", () => {
        console.log('comment.value', comment.value)
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

    submit.addEventListener("click", () => {
        const url = 
    })

})