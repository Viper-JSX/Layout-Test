const forms = document.querySelectorAll("form");
const sections = document.querySelectorAll("section");
const sectionNavigationListItems = 
document.getElementById("section-navigation")
.querySelectorAll("li");

window.addEventListener("scroll", handleSectionScroll );

forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.target.reset();
    });
});


function resetSectionNavigation(){
    sectionNavigationListItems.forEach((item) => item.classList.remove("active"));   
}

function handleSectionScroll(){
    const scrollTop = window.screenY;
    const viewportHeight = window.innerHeight;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionOffsetTop = rect.top;

        if(
            (sectionOffsetTop < scrollTop + viewportHeight / 2 && scrollTop < sectionOffsetTop + viewportHeight / 2 )
            || 
            (sectionOffsetTop + rect.height > viewportHeight / 2 && sectionOffsetTop + rect.height < rect.height )         
        ){
            resetSectionNavigation();
            sectionNavigationListItems[index].classList.add("active");          
        }
    });
}