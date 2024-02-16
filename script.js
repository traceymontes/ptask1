document.addEventListener('DOMContentLoaded', function () {
    var eyeStatusElement = document.getElementById('eyeStatus');

    document.addEventListener('keydown', function (event) {
        // Check if the 'o' key (for 'open') is pressed
        if (event.key === 'o') {
            eyeStatusElement.style.display = 'block';
        }

        // Check if the 'c' key (for 'close') is pressed
        if (event.key === 'c') {
            eyeStatusElement.style.display = 'none';
        }
    });
});
