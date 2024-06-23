document.addEventListener('DOMContentLoaded', function() {
    let heading = document.getElementById('clickableHeading');
    let array = ["Apple", "Banana", "Cat", "Dog", "Elephant", "FISH", "Grapes"];
    let currentIndex = 0;

    heading.addEventListener('click', () => {
        // Updating the heading text with the current array value
        heading.innerText = array[currentIndex];
        console.log(currentIndex);
        // Move to the next index, wrapping around to 0 if at the end
        currentIndex = (currentIndex + 1) % array.length;
    });
});
