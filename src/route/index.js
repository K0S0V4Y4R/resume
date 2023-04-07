// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ===============================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: '9/11, Shevchenko str., Kyiv, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380970000123',
      href: 'tel:+380970000123',
    },
    linkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain 
					and try to understand the idea of the project. Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms (odds) and sport statistics (tournament position, goals etc), 
					analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
        },
        {
          name: 'Handlebars',
          point: 9,
        },
        {
          name: 'VS Code',
          point: 11,
          isTop: true,
        },
        {
          name: 'Git',
          point: 8,
        },
        {
          name: 'Terminal',
          point: 7,
        },
        {
          name: 'NPM',
          point: 6,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Спорт',
          isMain: true,
        },
        {
          name: 'Активний відпочинок',
          isMain: true,
        },
        {
          name: 'Читання книг',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'School',
          isEnd: true,
        },
        {
          name: 'College',
          isEnd: true,
        },
        {
          name: 'Academy',
          isEnd: false,
        },
        {
          name: 'University',
          isEnd: true,
        },
        {
          name: 'Postgraduate studies',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Сертифікат',
          id: 125487,
        },
        {
          name: 'Ліцензія',
          id: 369741,
        },
        {
          name: 'Свідоцтво',
          id: 1001987,
        },
      ],
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Work',
    },

    layout: 'big',

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',

              url: 'https://resume.com.ua/',

              about:
                'Airbnb competitor. High-load application for searching apartmens.',

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Best employee of the month',
                },
                {
                  name: 'Best employee of the year',
                },
              ],
              stackAmount: 3,

              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
