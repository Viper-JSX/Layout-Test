const sections = document.querySelectorAll("section");
const sectionNavigationListItems = 
document.getElementById("section-navigation")
.querySelectorAll("li");

console.log(sections, sectionNavigationListItems);

window.addEventListener("scroll", handleSectionScroll );


function resetSectionNavigation(){
    sectionNavigationListItems.forEach((item) => item.classList.remove("active"));   
}

function handleSectionScroll(){
    const scrollTop = window.screenY;
    const viewportHeight = window.innerHeight;

    sections.forEach((section, index) => {
        const sectionOffsetTop = section.getBoundingClientRect().top;

        if(sectionOffsetTop < scrollTop + viewportHeight / 2 && scrollTop < sectionOffsetTop + viewportHeight / 2){
            resetSectionNavigation();
            sectionNavigationListItems[index].classList.add("active");          
        }
    });
}