# Pomodoro+

A simple and elegant Pomodoro timer built with [Wails](https://wails.io) (Go + Web Technologies).

Pomodoro+ is designed to help you stay focused and productive using the Pomodoro Technique — alternating focused work sessions with short and long breaks.

---

## Overview

Pomodoro+ is a lightweight native Windows application that combines a Go backend with a modern web-based frontend using Wails. It provides a clean user interface and essential timer controls to support structured work sessions.

---

## Features

- Start, pause, and reset Pomodoro sessions  
- Support for short and long break modes  
- Customizable session durations (via configuration)  
- Sound alerts when sessions change  
- Native Windows application with lightweight installer  
- Clean and minimal user interface  

---

## Tech Stack

- **Backend:** Wails (Go)
- **Frontend:** Svelte
- **Installer:** NSIS (Windows native installer)

---

## Installation

### 1. Download the Installer

Navigate to the `build/bin/` directory and download:

`Pomodoro+ Setup.exe`

### 2. Run the Installer

Double-click the installer and follow the setup instructions.

### 3. Launch the Application

After installation, open Pomodoro+ from:

- Start Menu  
- Desktop shortcut  

---

## Default Timer Durations

| Mode         | Duration |
|--------------|----------|
| Pomodoro     | 25 mins  |
| Short Break  | 5 mins   |
| Long Break   | 15 mins  |

---

## Project Structure

```
/build
  /bin
    Pomodoro+ Setup.exe
```

---

## Configuration

Session durations can be customized in the application configuration file.  
Refer to the configuration section in the source code for advanced customization.

---

## Roadmap

- **Auto break switching**  
  Automatically transition between Pomodoro, short break, and long break sessions.

- **Total repeat count**  
  Allow users to define the number of Pomodoro cycles before triggering a long break.

- **Auto advance**  
  Automatically move to the next session once the current timer completes.

- **Additional improvements**  
  UI enhancements, customizable notifications, and expanded user preferences.

---
