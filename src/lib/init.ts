/* eslint-disable max-len */
/* eslint-disable no-console */

export const initialize = () => {
  try {
    const consolError = console.error;
    const SUPPRESSED_WARNINGS = ['Warning: React does not recognize the'];

    console.error = function filterWarnings(msg, ...args) {
      if (!Array.isArray(msg) && !(typeof msg === 'string')) {
        consolError(msg, ...args);
      } else if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
        consolError(msg, ...args);
      }
    };
  } catch (error) {
    console.log('initialize error: ', error);
  }
};
