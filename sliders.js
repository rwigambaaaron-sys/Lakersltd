document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll(".slider").forEach((slider) => {
        // Select all image elements within the current slider
        const slides = slider.querySelectorAll("img.slide");
        // Select navigation buttons
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");
        // Select the counter display (optional, based on your HTML)
        const counter = slider.querySelector(".counter");

        let index = 0;
        const total = slides.length;

        // Function to update the visible slide and the counter
        function updateSlide() {
            // Hide all slides, then show only the current one
            slides.forEach((img, i) => {
                // We use Tailwind's hidden/block for display control
                if (i === index) {
                    img.style.display = "block"; // Or use a class like 'opacity-100' for smoother transitions
                } else {
                    img.style.display = "none";  // Or use a class like 'opacity-0'
                }
            });

            // Update the counter text if the counter element exists
            if (counter) {
                counter.textContent = `${index + 1} / ${total}`;
            }
        }

        // Add event listener for the 'Previous' button
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                // Circular movement: (current index - 1 + total) % total
                index = (index - 1 + total) % total;
                updateSlide();
            });
        }

        // Add event listener for the 'Next' button
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                // Circular movement: (current index + 1) % total
                index = (index + 1) % total;
                updateSlide();
            });
        }

        // Initialize the slider to show the first image on load
        if (total > 0) {
            updateSlide();
        }
    });

    // ------------------------------------------------------------------
    // 2. Inquiry Form Submission Alert
    // ------------------------------------------------------------------
    const forms = document.querySelectorAll('.inquiry-form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Inquiry submitted! We will contact you soon.');
            form.reset();
        });
    });
});