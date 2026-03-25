/**
 * Even & Odd Number Checker
 * Clean, modular JavaScript with event-driven architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const numberInput = document.getElementById('numberInput');
    const checkBtn = document.getElementById('checkBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultContainer = document.getElementById('resultContainer');
    const resultCard = document.getElementById('resultCard');
    const resultIcon = document.getElementById('resultIcon');
    const resultText = document.getElementById('resultText');
    const resultNumber = document.getElementById('resultNumber');
    const errorContainer = document.getElementById('errorContainer');
    const errorText = document.getElementById('errorText');

    // --- Audio feedback (subtle click sound via Web Audio API) ---
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    /**
     * Play a short beep sound for micro-interaction feedback
     * @param {number} frequency - Tone frequency in Hz
     * @param {number} duration - Duration in seconds
     */
    function playSound(frequency = 600, duration = 0.1) {
        try {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

            // Fade out for smooth sound
            gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Silently fail if audio is not supported
        }
    }

    /**
     * Validate the user input
     * @param {string} value - Raw input value
     * @returns {object} - { valid: boolean, number: number|null, error: string }
     */
    function validateInput(value) {
        const trimmed = value.trim();

        if (trimmed === '') {
            return { valid: false, number: null, error: 'Please enter a number first!' };
        }

        // Check if it's a valid number (integers and decimals)
        if (!/^-?\d+(\.\d+)?$/.test(trimmed)) {
            return { valid: false, number: null, error: 'Invalid input! Please enter a valid number.' };
        }

        const num = parseFloat(trimmed);

        // Check for decimals
        if (!Number.isInteger(num)) {
            return { valid: false, number: null, error: 'Please enter a whole number (no decimals).' };
        }

        return { valid: true, number: num, error: '' };
    }

    /**
     * Show the result with animation
     * @param {number} number - The checked number
     * @param {boolean} isEven - Whether the number is even
     */
    function showResult(number, isEven) {
        // Hide error if visible
        hideError();

        // Set result content
        resultIcon.textContent = isEven ? '✅' : '❌';
        resultText.textContent = isEven ? 'Even' : 'Odd';
        resultNumber.textContent = `The number ${number} is ${isEven ? 'even' : 'odd'}`;

        // Set result card styling
        resultCard.className = 'result-card';
        resultCard.classList.add(isEven ? 'even' : 'odd');

        // Trigger re-animation by removing and re-adding the element
        resultContainer.classList.add('hidden');

        // Force reflow to restart animation
        void resultContainer.offsetWidth;

        resultContainer.classList.remove('hidden');

        // Play appropriate sound
        if (isEven) {
            playSound(800, 0.15); // Higher pitch for even
        } else {
            playSound(400, 0.15); // Lower pitch for odd
        }
    }

    /**
     * Show error message with animation
     * @param {string} message - Error message to display
     */
    function showError(message) {
        // Hide result if visible
        hideResult();

        errorText.textContent = message;

        // Trigger re-animation
        errorContainer.classList.add('hidden');
        void errorContainer.offsetWidth;
        errorContainer.classList.remove('hidden');

        // Play error sound
        playSound(200, 0.2);

        // Shake the input
        numberInput.classList.add('shake');
        setTimeout(() => numberInput.classList.remove('shake'), 500);
    }

    /**
     * Hide the result container
     */
    function hideResult() {
        resultContainer.classList.add('hidden');
    }

    /**
     * Hide the error container
     */
    function hideError() {
        errorContainer.classList.add('hidden');
    }

    /**
     * Main check function - determines if number is even or odd
     */
    function checkNumber() {
        const { valid, number, error } = validateInput(numberInput.value);

        if (!valid) {
            showError(error);
            return;
        }

        // Core logic: check even or odd
        const isEven = number % 2 === 0;
        showResult(number, isEven);
    }

    /**
     * Clear/reset all fields and results
     */
    function clearAll() {
        numberInput.value = '';
        hideResult();
        hideError();
        numberInput.focus();
        playSound(500, 0.08);
    }

    // --- Event Listeners ---

    // Check button click
    checkBtn.addEventListener('click', () => {
        checkNumber();
    });

    // Clear button click
    clearBtn.addEventListener('click', () => {
        clearAll();
    });

    // Enter key to check
    numberInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkNumber();
        }
    });

    // Auto-focus input on page load
    numberInput.focus();
});