# Even & Odd Number Checker

A modern, interactive web application that checks whether a given number is even or odd. Built with clean HTML, CSS, and JavaScript featuring glassmorphism design, smooth animations, and audio feedback.

## Features

- **Input Validation**: Accepts only whole numbers (integers), rejects decimals and invalid inputs
- **Visual Feedback**: Color-coded results with green for even numbers and red for odd numbers
- **Audio Feedback**: Subtle sound effects for interactions (higher pitch for even, lower for odd)
- **Animations**: Smooth entrance animations, bounce effects, and shake animations for errors
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Support**: Press Enter to check quickly
- **Glassmorphism UI**: Modern frosted glass design with animated gradient background
- **Floating Particles**: Ambient background animation

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables, animations, and responsive design
- **JavaScript (ES6+)**: Modular code with event-driven architecture and Web Audio API
- **Google Fonts**: Poppins font family for modern typography

## How to Use

1. Open `index.html` in any modern web browser
2. Enter a whole number in the input field
3. Click the "Check Number" button or press Enter
4. View the result with visual and audio feedback
5. Use "Clear" button to reset and try another number

## Project Structure

```
Even Odd number checker Project/
├── index.html      # Main HTML file with the UI structure
├── script.js       # JavaScript logic for validation and interactions
└── style.css       # CSS styling with glassmorphism design
```

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript features
- CSS backdrop-filter (for glassmorphism effect)
- Web Audio API (for sound feedback, gracefully degrades if not supported)

## Development

This is a static web application with no build process required. Simply open `index.html` in a browser to run.

## Features in Detail

### Input Validation
- Checks for empty input
- Validates numeric format
- Ensures whole numbers only (no decimals)
- Provides clear error messages

### Visual Design
- Glassmorphism card with backdrop blur
- Animated gradient background
- Floating particle effects
- Responsive layout for all screen sizes

### Interactions
- Button hover effects with slide animations
- Result cards with bounce-in animations
- Error messages with shake effects
- Input focus glow effects

### Audio Feedback
- Success sounds for even/odd results
- Error sound for invalid input
- Clear sound for reset action
- Uses Web Audio API for programmatic sound generation

## Customization

The design uses CSS custom properties (variables) for easy theming:
- Color schemes for even/odd results
- Gradient backgrounds
- Glassmorphism opacity and blur values
- Animation timings and easing functions

## License

This project is open source and available under the MIT License.