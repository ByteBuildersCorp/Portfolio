function opentab(event, tabname) {
    let tabLinks = document.getElementsByClassName("tab_links");
    // Remove 'active_link' class from all tab links
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active_link");
    }
    // Add 'active_link' class to the clicked tab link
    event.target.classList.add("active_link");

    let tabContents = document.getElementsByClassName("tab_contents");
    // Remove 'active_tab' class from all tab contents
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active_tab");
    }
    // Add 'active_tab' class to the corresponding tab content
    document.getElementById(tabname).classList.add("active_tab");                
}
