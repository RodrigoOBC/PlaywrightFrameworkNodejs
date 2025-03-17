// Developed with care by RodrigoOBC.
import { defineConfig, devices } from '@playwright/test';


const reportConfig = {
  open: process.env.CI ? "never" : "always",
  folderPath: ".temp/otoni-report",
  filename: "index.html",
  title: "Playwright Test Report",
  showProject: !true,
  projectName: "RodrigoBOCabral",
  testType: "e2e",
  authorName: "Koushik (LetCode with Koushik)",
  base64Image: false,
  stdIO: false,
  preferredTheme: "dark"
};

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './features/test',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : 3,

  // Reporter to use
  reporter: [['line'],["ortoni-report", reportConfig]],

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://www.automationpractice.pl/index.php',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});