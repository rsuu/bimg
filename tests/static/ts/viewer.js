"use strict";
// ==== left ====
const ELEM_LEFT = document.querySelector("#--l");
const ELEM_LEFT_IMGS = document.querySelectorAll("#-js--vec-imgs img");
// ==== center ====
const ELEM_CENTER = document.querySelector("#-js--fullpage");
const ELEM_CENTER_IMG = document.querySelector("#-js--center-img");
// ==== right ====
const ELEM_RIGHT = document.querySelector("#--r");
const ELEM_TOGGLE_RIGHT = document.querySelector("#toggle_right");
// ==== tool ====
const ELEM_TOOL = document.querySelector("#-js--tool");
const ELEM_IMG_PAGE_NUMBER = document.querySelector("#-js--page-number");
// ==== img-info ====
const ELEM_IMG_INFO_FILENAME = document.querySelectorAll(
  "#-js--img-info-title"
)[0];
const ELEM_IMG_INFO_TYPE = document.querySelectorAll("#-js--img-info-type")[0];
const ELEM_IMG_INFO_SIZE = document.querySelectorAll("#-js--img-info-size")[0];
const ELEM_IMG_INFO_UPLODER = document.querySelectorAll(
  "#-js--img-info-uploder"
)[0];
const ELEM_IMG_INFO_META = document.querySelectorAll("#-js--img-info-meta")[0];
// ====================
function fullscreen() {
  ELEM_CENTER_IMG.addEventListener("click", function () {
    let img = ELEM_CENTER_IMG.src;
    ELEM_CENTER.style.backgroundImage = `url('${img}')`;
    ELEM_CENTER.style.display = "block";
  });

  ELEM_CENTER.addEventListener("click", function () {
    this.style.display = "none";
    //document.exitFullscreen();
  });
}
function change_img() {
  const count = ELEM_LEFT_IMGS.length - 1;
  ELEM_LEFT_IMGS.forEach((img, idx) => {
    img.addEventListener("click", function () {
      ELEM_IMG_INFO_FILENAME.innerText = get_img_full_name(img);
      ELEM_IMG_INFO_META.innerText = get_img_meta(img);
      ELEM_IMG_PAGE_NUMBER.innerText = `${idx}/${count}`;
      ELEM_CENTER_IMG.src = img.src;
      // ELEM_CENTER_VIDEO.setAttribute("poster", "/tmp/2.jpg");
    });
  });
}
// hide left AND display right
function toggle_left() {
  ELEM_TOOL.addEventListener("click", function () {
    if (ELEM_LEFT.style.opacity == "0") {
      ELEM_LEFT.style.opacity = "1";
    } else {
      ELEM_LEFT.style.opacity = "0";
    }
  });
}
function toggle_right() {
  ELEM_TOGGLE_RIGHT.addEventListener("click", function () {
    if (ELEM_RIGHT.style.opacity == "0") {
      ELEM_RIGHT.style.opacity = "1";
    } else {
      ELEM_RIGHT.style.opacity = "0";
    }
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
function get_img_full_name(img) {
  return img.src.split("/").pop();
}
function get_img_name(img) {
  return img.src.split("/").pop().split(".")[0];
}
function get_img_meta(img) {
  let w = img.naturalWidth;
  let h = img.naturalHeight;
  return `${w} x ${h}`;
}
function init() {
  ELEM_IMG_INFO_FILENAME.innerText = get_img_full_name(ELEM_CENTER_IMG);
  ELEM_IMG_INFO_META.innerText = get_img_meta(ELEM_CENTER_IMG);
  // ELEM_IMG_PAGE_NUMBER.innerText = `${0}/${count}`;
}
// =====================
// id: left
change_img();
toggle_left();
// id: center
fullscreen();
init();
