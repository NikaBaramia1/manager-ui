document.querySelector(".moon").addEventListener("click", () => {
    let element = document.body;
    let main = document.querySelectorAll(".components");
    let btnClick = document.querySelectorAll(".btn, .btn1");
    let header = document.querySelector(".header_div");
    let sun = document.querySelectorAll(".moon");



    element.classList.toggle("dark-mode");
    header.classList.toggle("dark-header");

   
    
    sun.forEach((img) => {
        img.classList.toggle("dark-sun");
    });


    main.forEach((component) => {
        component.classList.toggle("dark-component");
    });

    btnClick.forEach((button) => {
        button.classList.toggle("dark-btn");
    })


});


const buttons = document.querySelectorAll(".btn_three .btn");
const components = document.querySelectorAll(".components");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent.trim().toLowerCase();
    let showActive = false;
    let showInactive = false;

    // "Active" და "Inactive" ღილაკებისთვის დასახელებული ლოგიკა
    if (buttonText === "active") {
      showActive = true;
    } else if (buttonText === "inactive") {
      showInactive = true;
    }

    components.forEach((comp) => {
      const checkbox = comp.querySelector("input[type='checkbox']");
      if (!checkbox) return;

      const isChecked = checkbox.checked;

      if (buttonText === "all") {
        // "All" ღილაკი: ყველა კომპონენტი უნდა გამოჩნდეს
        comp.style.display = "block";
      } else if (showActive && isChecked) {
        // "Active" ღილაკი: მხოლოდ მონიშნული კომპონენტები
        comp.style.display = "block";
      } else if (showInactive && !isChecked) {
        // "Inactive" ღილაკი: მხოლოდ არამონიშნული კომპონენტები
        comp.style.display = "block";
      } else {
        // ყველა სხვა შემთხვევაში კომპონენტი უნდა დამალოს
        comp.style.display = "none";
      }
    });

    // აქტიური ღილაკის კლასი (active)
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});





document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const saved = localStorage.getItem(checkbox.id);
        if (saved !== null) {
            checkbox.checked = JSON.parse(saved);
        }
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});