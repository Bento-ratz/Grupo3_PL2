
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  function handleScrollToSection(event, sectionId) {
    event.preventDefault();
    scrollToSection(sectionId);
  }
  