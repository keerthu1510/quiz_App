# Quiz App

## Overview
This is a simple quiz application built using React. The app allows users to answer multiple-choice questions and keeps track of their score. It includes functionalities to navigate through questions, select answers, and view the final score.

## Features
- Multiple-choice questions
- Real-time score tracking
- User-friendly interface


## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **React Hooks**: To manage state and lifecycle in functional components.
- **JavaScript**: For handling logic and data manipulation.

## Components
### 1. `App.js`
- Main component that holds the state and renders `AppointmentForm` and `AppointmentList`.

### 2. `AppointmentForm.js`
- Component for adding new appointments.
- Uses `useState` for managing form input values.
- Calls `addAppointment` to update the appointment list in the parent component.

### 3. `AppointmentList.js`
- Displays the list of appointments.
- Provides functionalities to edit, delete, and clear appointments.
- Uses `useState` for managing editing state.

### 4. `Question.js`
- Displays a single question along with the possible options.
- Includes a form to submit the selected answer.

### 5. `Options.js`
- Renders the list of options for a question.
- Allows selecting an option and handles changes.

### 6. `Score.js`
- Displays the final score after completing the quiz.



