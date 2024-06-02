
document.addEventListener("DOMContentLoaded", (event) => {
    const enquiry = document.getElementById("circle1");
    const request = document.getElementById("circle2");
    const checkbox = document.getElementById("checkbox");
    const btn = document.getElementById("submit");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    const message = document.getElementById("message");
    const errorParagraph = document.querySelectorAll(".required");
    const modal = document.querySelector(".modal");
    const emailError = document.querySelector(".email-error");
    console.log(errorParagraph);


    let inlineInput1 = document.getElementsByClassName("inline_input")[0];
    let inlineInput2 = document.getElementsByClassName("inline_input")[1];
    let container = document.getElementById("contain");

    let img1 = document.createElement("img");
    img1.src = "./assets/images/icon-radio-selected.svg";

    let img2 = document.createElement("img");
    img2.src = "./assets/images/icon-radio-selected.svg";

    let checkBoxImg = document.createElement("img");
    checkBoxImg.src = "./assets/images/icon-checkbox-check.svg";


    if (enquiry) {
        enquiry.addEventListener("click", toggleToImg1);
    }

    if (request) {
        request.addEventListener("click", toggleReqToImage2);
    }

    if (checkbox) {
        checkbox.addEventListener("click", checkBoxToImg);
    }

    function checkBoxToImg() {
        checkbox.remove();
        container.insertBefore(checkBoxImg, container.firstChild);
        checkBoxImg.addEventListener("click", imgTocheckBox);
    }

    function imgTocheckBox() {
        checkBoxImg.remove();
        container.insertBefore(checkbox, container.firstChild);
        imgTocheckBox.addEventListener("click", checkBoxToImg);
    }


    function toggleReqToImage2() {
        if (inlineInput1.contains(img1) || inlineInput2.contains(img2)) return;

        request.remove();
        inlineInput2.insertBefore(img2, inlineInput2.firstChild);
        img2.addEventListener("click", toggleReqToEnquiry);
    }

    function toggleReqToEnquiry() {
        img2.remove();
        inlineInput2.insertBefore(request, inlineInput2.firstChild);
        request.addEventListener("click", toggleReqToImage2);
    }

    function toggleToImg1() {
        if (inlineInput1.contains(img1) || inlineInput2.contains(img2)) return;

        enquiry.remove()
        inlineInput1.insertBefore(img1, inlineInput1.firstChild);
        img1.addEventListener("click", toggleToEnquiry);
    }

    function toggleToEnquiry() {
        img1.remove();
        inlineInput1.insertBefore(enquiry, inlineInput1.firstChild);
        enquiry.addEventListener("click", toggleToImg1);
    }


    if (btn) {
        btn.addEventListener("click", checkError);
    }

    function emailValidate() {
        emailError.style.display = "block";
        email.classList.remove("normal");
        email.classList.add("error");
    }

    function addErrorParagraphs() {
        errorParagraph.forEach(paragraph => {
            paragraph.style.display = "block";
        })
    }

    function removeErrorParagraphs() {
        errorParagraph.forEach(paragraph => {
            paragraph.style.display = "none";
        })
    }

    function activateError(element) {
        element.classList.remove("normal");
        element.classList.add("error");
        paragraph.style.display = "block";

    }

    function deactivateError(element) {
        element.classList.add("normal");
        element.classList.remove("error");
        removeErrorParagraphs();
    }

    function addWrongMsg(element) {
        element.classList.remove("message");
        element.classList.add("errorMsg");
        addErrorParagraphs();
    }

    function removeWrongMsg(element) {
        element.classList.remove("errorMsg");
        element.classList.add("message");
        removeErrorParagraphs();
    }


    function checkError(event) {

        event.preventDefault();
        let isValid = true;

        if (firstName.value.trim() === "") {
            activateError(firstName);
            isValid = false;
        } else {
            deactivateError(firstName);
        }

        if (lastName.value.trim() === "") {
            activateError(lastName);
            isValid = false;
        } else {
            deactivateError(lastName);
        }

        if (email.value.trim() === "") {
            emailValidate();
            isValid = false;
        } else {
            deactivateError(email);
        }

        if (message.value.trim() === "") {
            addWrongMsg(message);
            isValid = false;
        } else {
            removeWrongMsg(message);
        }

        if (inlineInput1.contains(enquiry) && inlineInput2.contains(request)) {
            addErrorParagraphs();
            isValid = false;
        }

        if (container.contains(checkbox)) {
            addErrorParagraphs();
            isValid = false;
        }



        if (isValid && email.value.includes("@") && email.value.includes(".com") && email.value.length > 5) {
            modal.style.display = "block";
        } else if (email.value.includes("@") && email.value.includes(".com") && email.value.length > 5) {
            emailError.style.display = "none";
        } else {
            emailValidate();
            modal.style.display = "none";
        }
    }












}


);
