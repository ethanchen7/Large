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

    submit.addEventListener("click", async () => {

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
            });
        } else {

        }

    });
});