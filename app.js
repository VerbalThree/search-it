function autoResize(textarea){
    textarea.style.height = 'auto'; // Restart the height to calculate the new height
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'; // Define the new height with the content
}