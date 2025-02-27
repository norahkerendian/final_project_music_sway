console.log('Blank site initialized!');

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const content = document.getElementById("content");

    const pages = {
        Motivation: "<p>Motivation/Context</p>",
        Features: "<p>Features Explained</p>",
        Plot1: "<p>Plot1</p>",
        Plot2: "<p>Plot2</p>",
        Conclusion: "<p>Conclusion</p>",
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const tabName = this.getAttribute("data-tab");
            content.innerHTML = pages[tabName] || "<p>Content not found.</p>";
        });
    });
});
