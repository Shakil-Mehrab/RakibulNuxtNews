const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: {
                    600: '#339999',
                    700: '#01323D'
                },
                margin: {
                    '66': '-66rem'
                },
                cyan: colors.cyan,
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            '2md': '992px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },

    },
    variants: {
        extend: {
            borderColor: ['responsive', 'hover', 'focus', 'active'],
            visibility: ['group-hover'],
            margin: ['group-hover'],
            translate: ['active', 'group-hover'],
        },
    },
    plugins: [],
}