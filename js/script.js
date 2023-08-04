function handleSubmit() {
  //lấy giá trị của input email chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  // điều kiện để là 1 emailf
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check value email", emailValue);
  //dùng macth để kiêmr tra email vừa nhập
  const checkEmail = emailValue.match(regex);
  console.log("email", checkEmail);
  //lấy phần trăm cửa user
  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);
  //lấy elenment để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "vui lòng nhập đúng định dạng của email";
  } else {
    errorEmail.innerHTML = "vui lòng nhập đúng định dạng của email";
  }
}

function view(box) {
  // alert("OK");

  const more = document.querySelector(box + " .more");

  const button = document.querySelector(box + " button");

  if (button.innerText != "View less") {
    //Hien noi dung
    more.classList.remove("hidden");
    //Doi thanh view less
    button.innerText = "View less";
  } else {
    //An noi dung
    more.classList.add("hidden");
    //Doi thanh view more
    button.innerText = "View more";
  }
}
