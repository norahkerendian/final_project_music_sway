console.log('Blank site initialized!');

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const content = document.getElementById("content");

    const pages = {
        //Motivation: "<p>Motivation/Context</p>",
        Features: "<p>Features Explained</p>",
        Plot1: "<p>Plot1</p>",
        Plot2: "<p>Plot2</p>",
        Conclusion: "<p>Conclusion</p>",
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            if (!this.getAttribute("href")) {
                event.preventDefault();
            }

            const tabName = this.getAttribute("data-tab");

            if (tabName) {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove("active"));

                // Add active class to the clicked tab
                this.classList.add("active");

                // Load content for other tabs
                const pages = {
                    Features: "<p>Features Explained</p>",
                    Plot1: "<p>Plot1</p>",
                    Plot2: "<p>Plot2</p>",
                    Conclusion: "<p>Conclusion</p>",
                };
                content.innerHTML = pages[tabName] || "<p>Content not found.</p>";
            }
        });
    });
});