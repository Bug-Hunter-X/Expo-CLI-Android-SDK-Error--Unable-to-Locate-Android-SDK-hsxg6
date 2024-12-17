The solution involves several steps to verify the Android SDK installation and configuration:

1. **Verify ANDROID_HOME:** Ensure the `ANDROID_HOME` environment variable is correctly set to point to the root directory of your Android SDK installation.  You can check this in your terminal (or command prompt) using the appropriate command for your operating system.
2. **Verify ANDROID_SDK_ROOT:**  Some systems also require the `ANDROID_SDK_ROOT` environment variable, which is typically identical to `ANDROID_HOME`. Set this as well, if necessary.  
3. **Check PATH:** Add the platform-tools directory (e.g., `$ANDROID_HOME/platform-tools`) to your `PATH` environment variable.  This allows the CLI to find the Android build tools.
4. **Restart your terminal:** After making environment variable changes, it's often necessary to restart your terminal or IDE for the changes to take effect.
5. **Check SDK Manager:** Open the Android SDK Manager (usually accessible through the Android Studio SDK Manager). Check for any missing or outdated components. You may need to install or update the necessary packages, particularly the build-tools and platform tools relevant to your project. 
6. **Install missing components:**  Install any missing or outdated components (platforms, build-tools, etc.) for your target Android SDK version.  Make sure you install the build-tools as these are necessary for building and installing your app on an Android device.
7. **SDK Manager:** Use the SDK Manager to update or install missing build tools and platform tools. Often this is all that is needed to resolve the issue.   If using a custom build system, make sure the build system is correctly configured to use the correct path to the Android SDK. 

If the error persists after these steps, further investigation might be necessary. This could involve checking for file permissions, corrupted SDK files, or issues with your system's environment settings.