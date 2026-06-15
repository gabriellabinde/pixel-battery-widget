# pixel-battery-widget
Retro-inspired battery indicator widget for Übersicht using pixel hearts.

## Preview

![Pixel Heard Battery Status](screenshot.png)

# Pixel Battery Widget

A retro-inspired battery indicator widget for Übersicht that displays battery level using pixel-art hearts.

Inspired by classic video game health systems, the widget transforms battery percentage into a visual heart-based indicator that updates automatically.

## Features

* Real-time battery monitoring
* Pixel-art heart display
* Automatic updates every 30 seconds
* Lightweight implementation
* Retro gaming aesthetic

## How It Works

The widget retrieves the current battery percentage from macOS using:

```bash
pmset -g batt
```

Battery level is converted into a series of 10 hearts:

* Full hearts represent available battery charge
* Empty hearts represent remaining capacity
* Battery percentage is mapped proportionally across the heart bar

## Platform

This project was developed for Übersicht, a desktop widget framework for macOS.

## Technologies

* JavaScript
* JSX
* Übersicht
* macOS Battery API (pmset)

## Future Improvements

* Charging animation
* Custom color themes
* Battery percentage display
* Low-battery warning effects
* Multiple heart styles

## Author

Gabriella Binde

Psychologist | Cognitive Science Student
