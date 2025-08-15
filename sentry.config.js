import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "http://c7ba860442034a0081e225df685b08e1@localhost:8000/1",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/configuration/options/#sendDefaultPii
  // sendDefaultPii: true,

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: "tw0-face@1.0",
  /*
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
  */
  // Enable logs to be sent to Sentry
  // enableLogs: true,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  // replaysSessionSampleRate: 0.1,
  // replaysOnErrorSampleRate: 1.0,
});
