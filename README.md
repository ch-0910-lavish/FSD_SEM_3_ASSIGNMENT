# Prevent Callback from Executing Twice

## Problem Statement
A callback is accidentally called twice. Explain why this creates problems
and modify the function so that the callback executes only once.

## Solution
A boolean variable called `called` is used to track whether the callback
has already executed.

A wrapper function checks the value of `called` before executing the callback.

## Expected Output
Response sent successfully!

## Concepts Used
- JavaScript Functions
- Callback Functions
- Closures
- Boolean Variables
- Wrapper Functions