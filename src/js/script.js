const sections = document.querySelectorAll("section");
const sectionNavigationListItems = 
document.getElementById("section-navigation")
.querySelectorAll("li");

window.addEventListener("scroll", handleSectionScroll );


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