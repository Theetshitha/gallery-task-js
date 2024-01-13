"use strict";

let Arr_in_Images = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "img1.jpeg", "img2.jpeg",
    "img3.jpeg", "img4.jpeg", "img5.jpeg"];

let head = document.getElementById("heading");
let main1 = document.querySelector(".main");
let container_2 = document.querySelector(".main-div")
let container_1_img = document.querySelectorAll(".img");
let Focus_img = document.getElementById("hover-img")

let bottom_hide_img = document.querySelector(".slide-img");

let img_4 = document.createElement("img");
img_4.className = "blur-img";
img_4.src = "img4.jpeg";
let img_5 = document.createElement("img");
img_5.className = "blur-img";
img_5.src = "img5.jpeg";
let count = 0;
let img_hide = document.querySelectorAll(".blur-img");
let valid = img_hide[0].parentElement;
let arr_1 = [];
arr_1[0] = img_hide[0];
arr_1[1] = img_hide[1];
arr_1[2] = img_hide[2];
arr_1[3] = img_4;
arr_1[4] = img_5;

let opacity_add_to_img = 0;

container_1_img.forEach((img, index) => {

    img.addEventListener("click", () => {
        main1.classList.toggle("container_1_none");
        container_2.classList.toggle("main_container1_block");
        document.body.classList.toggle("body_color");
        Focus_img.src = Arr_in_Images[index];
        count = index;
        if (opacity_add_to_img != 0) {
            opacity_add_to_img.classList.remove("opacity");

        }
        if (index > 2 && index != 8) {
            console.log("hello city");
            head.innerHTML = "Cites";
            if (valid.children.length == 5) {
                valid.lastElementChild.remove();
                valid.lastElementChild.remove();
            }
            img_hide[0].src = Arr_in_Images[3];
            img_hide[1].src = Arr_in_Images[4];
            img_hide[2].src = Arr_in_Images[5];
            valid.append(img_4, img_5);
            opacity_add_to_img = arr_1[count - 3];
            opacity_add_to_img.classList.add("opacity");
        }
        else if (index != 8 && index < 3) {
            console.log("Hello nature");

            head.innerHTML = "Nature";

            if (valid.children.length == 5) {
                valid.lastElementChild.remove();
                valid.lastElementChild.remove();
            }
            img_hide[0].src = Arr_in_Images[0];
            img_hide[1].src = Arr_in_Images[1];
            img_hide[2].src = Arr_in_Images[2];
            opacity_add_to_img = arr_1[count];
            opacity_add_to_img.classList.add("opacity");


        }
    })
});

let rigth_left_btn = document.querySelectorAll(".arrow");
rigth_left_btn.forEach((btn,) => {

    btn.addEventListener("click", (event) => {

        if (opacity_add_to_img != 0) {
            opacity_add_to_img.classList.remove("opacity");
        }

        if (valid.children.length < 5) {

            if (event.target.id == "left_arrow") {

                if (count == 0) {
                    count = 3;
                }
                count--;
                Focus_img.src = Arr_in_Images[count];

            }
            else {

                if (count == 2) {
                    count = -1;
                }
                count++;
                Focus_img.src = Arr_in_Images[count];
            }
            opacity_add_to_img = arr_1[count];
            opacity_add_to_img.classList.add("opacity");

        }

        else {

            if (event.target.id == "left_arrow") {
                if (count == 3) {
                    count = 8;
                }
                count--;
                Focus_img.src = Arr_in_Images[count];
            }

            else {

                if (count == 7) {
                    count = 2;
                }
                count++;
                Focus_img.src = Arr_in_Images[count];
            }

            opacity_add_to_img = arr_1[count - 3];
            opacity_add_to_img.classList.add("opacity");

        }
    })
});
arr_1.forEach((img, index_1) => {

    img.addEventListener("click", () => {
        if (opacity_add_to_img != 0) {
            opacity_add_to_img.classList.remove("opacity");
        }
        opacity_add_to_img = arr_1[index_1];
        opacity_add_to_img.classList.add("opacity");

        if (valid.children.length < 5) {
        count=index_1;
            Focus_img.src = Arr_in_Images[index_1];
        }

        else {
            count = index_1 + 3;
            Focus_img.src = Arr_in_Images[count];
        }
    })
});