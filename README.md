# CSS Loading Animations Showcase

A modern collection of pure CSS loading animations featuring neon-inspired design effects. This project demonstrates various animation techniques using CSS3, including 3D transforms, keyframe animations, and modern visual effects.

[Live Demo](https://shasikhan.github.io/css-loading-animations/)

### Design Features

- Modern neon color scheme
- Glassmorphism effects
- Responsive design
- Interactive hover states
- Pure CSS implementation
- No external dependencies

## Animations

See the complete list of animations and their features in the [Animations List](ANIMATIONS.md).

## Usage

1. Clone the repository:

```bash
git clone https://github.com/yourusername/css-animation-showcase.git
```

2. Open `index.html` in a modern web browser.

That's it! No build process or dependencies required.

## Browser Support

The animations are designed to work in modern browsers that support:

- CSS Custom Properties (CSS Variables)
- CSS Transform and Transform-style
- CSS Keyframe Animations
- CSS Filters and Backdrop-filter

Recommended browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors

The project uses CSS custom properties for easy color customization. Modify the variables in `styles.css`:

```css
:root {
  --bg-color: #0a0a0a;
  --card-bg: rgba(255, 255, 255, 0.03);
  --neon-pink: #ff2d75;
  --neon-blue: #0ff;
  --neon-purple: #b300ff;
}
```

### Animation Speed

Each animation's duration can be adjusted by modifying the `animation-duration` property in their respective CSS classes.

## Contributing

To maintain consistency and quality across all animations:

1. All new loading animations **must** be created using AI (preferably using [Windsurf](https://codeium.com/windsurf))
2. Fork the repository
3. Create your feature branch (`git checkout -b feature/amazing-animation`)
4. Have AI generate the animation with:
   - Pure CSS implementation (no JavaScript)
   - Neon color scheme using existing variables
   - Responsive design
   - Interactive hover effects
5. Commit your changes (`git commit -m 'Add amazing animation'`)
6. Push to the branch (`git push origin feature/amazing-animation`)
7. Open a Pull Request

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

**Note**: Manual code modifications should be limited to bug fixes and improvements to existing animations. New animations should come from AI to ensure they match the project's style and complexity.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern UI/UX design trends
- Built with pure CSS animations
- Neon color palette inspiration from cyberpunk design themes
- Created using [Windsurf](https://www.codeium.com/windsurf), the world's first agentic IDE
