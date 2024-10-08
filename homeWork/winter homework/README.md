# Hangman

A web page that will allow the user to play the hangman game against the computer.

![hangman.png](assets%2Fhangman.png)

The rules of hangman are simple:

- Guess a word by selecting individual letters. You have a set number of lives, and each wrong guess costs you a life.

The unknown word is displayed as dashes, and the correct letters fill in as you guess them.

Programmatically, the game's state at any moment can be represented using a few key variables and operations on these variables:

- **Word Selection**: At the start of the game, a word is chosen at random from a list of saved options. You can choose a specific topic, like movies or TV shows.

- **Lives**: This is the total number of wrong guesses allowed. Typically, this is set to 6, representing each part of the hangman (head, body, 2 arms, 2 legs). A life is lost with each wrong guess.

- **Guessed Letters**: As you guess letters, dashes are replaced by the correct guesses.

- **Game States**: The game can end in one of three ways—Victory (all letters guessed), Loss (no more lives left), or Still Playing. These states are determined by the above variables.

The number of lives and the word are set at the beginning of the game. The only thing that changes during the game is the guessed letters, which drive all other game outcomes.

# Standard Calculator
A web calculator with all the standard features.

![calculator.png](assets%2Fcalculator.png)

- The calculator will have buttons for numbers, just like a real-life calculator with no text inputs.
- It will include buttons for operations: Add, Subtract, Multiply, and Divide.
- Standard buttons for equals, decimal point, and reset (C) will be included.
- The calculator will have a display that shows the numbers being entered and the results, similar to real calculators.
- The calculator will show an error message if a number is too large or if there’s an attempt to divide by zero.
