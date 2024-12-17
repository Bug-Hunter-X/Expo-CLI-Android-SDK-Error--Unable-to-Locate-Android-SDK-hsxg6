# Expo CLI Android SDK Error: Unable to Locate Android SDK

This repository demonstrates a common error encountered when using the Expo CLI to build Android projects. The error message, "Unable to locate Android SDK", indicates that the Expo CLI cannot find the necessary Android SDK components. This can happen due to several reasons, including incorrect environment variables, missing or corrupted SDK files, or issues with the Android SDK Manager.  The solution provided in this repository walks through troubleshooting steps to resolve this error.

## Steps to Reproduce

1. Clone this repository.
2. Attempt to run `expo start` or `expo build:android`.
3. Observe the error message indicating that the Android SDK cannot be found.

## Solution

The solution involves verifying and, if necessary, correcting the Android SDK setup. The `bugSolution.js` file offers a more robust method of handling this error using environment variables.