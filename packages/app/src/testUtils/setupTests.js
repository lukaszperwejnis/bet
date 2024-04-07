// const messages = require('../locales/pl');
//
// console.log(messages);
//
// jest.mock('react-intl', () => {
//   const reactIntl = jest.requireActual('react-intl');
//   const intl = reactIntl.createIntl({
//     locale: 'pl',
//     messages: messages.pl,
//   });
//
//   console.log(intl);
//
//   return {
//     ...reactIntl,
//     useIntl: () => intl,
//   };
// });

require('@testing-library/jest-dom');
