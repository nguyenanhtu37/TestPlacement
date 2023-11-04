// Lấy phần tử dropdown button và dropdown content
var dropdownBtn = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

// Thêm sự kiện click cho dropdown button
dropdownBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
});

// Đóng dropdown nếu người dùng nhấp ngoài dropdown
window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}