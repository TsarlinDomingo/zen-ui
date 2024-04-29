/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', // San Francisco in Safari on Mac OS X and iOS, and it targets Neue Helvetica and Lucida Grande on older versions of Mac OS X
          'BlinkMacSystemFont', // equivalent for Chrome on Mac OS X
          'Segoe UI', // Windows and Windows Phone
          'Roboto', // Android and newer Chrome OS
          'Oxygen', // KDE
          'Ubuntu',
          'Cantarell', // GNOME
          'Fira Sans', // Firefox OS
          'Droid Sans', // older versions of Android
          'Helvetica Neue', // pre-El Capitan versions of Mac OS X
          'sans-serif', // fallback
        ],
      },
      borderColor: {
        'blue-3': '#2971C7',
        'red-3': '#B93824',
        'grey-3': '#939599',
        'grey-4': '#D2D3D6',
        'grey-5': '#E0E0E0',
        'orange-4': '#F4B182',
      },
      borderRadius: {
        small: '2px',
        regular: '4px',
        large: '8px',
      },
      borderWidth: {
        regular: '1px',
        medium: '2px',
        thick: '4px',
      },
      boxShadow: {
        'radio-checked': '0px 0px 0px 7px #F1F9FF inset',
        'elevation-regular': '0px 0px 4px 2px #2D2D2E40',
        'elevation-large': '0px 0px 8px 4px #2D2D2E26',
        'picker-header': '0px 0px 16px rgba(16, 42, 64, 0.15);',
        'picker-item': 'inset 0px -1px 0px #F2F4F5;',
      },
      colors: {
        blue: {
          1: '#3182ed',
          2: '#5e9df3',
          3: '#87b6f8',
          4: '#afcffb',
          5: '#d7e7fe',
        },
        orange: {
          1: '#f2984a',
          2: '#f6ad73',
          3: '#fac297',
          4: '#fdd7ba',
          5: '#feebdd',
        },
        navyblue: {
          1: '#1a3d6b',
          2: '#456188',
          3: '#7087a5',
          4: '#9eadc3',
          5: '#cdd6e1',
        },
        green: {
          1: '#28af60',
          2: '#63c080',
          3: '#8dd09f',
          4: '#b4e0bf',
          5: '#daf0df',
        },
        red: {
          1: '#eb5656',
          2: '#f47c77',
          3: '#fa9e98',
          4: '#febfba',
          5: '#ffdfdc',
        },
        grey: {
          1: '#4f4f4f',
          2: '#6f6f6f',
          3: '#919191',
          4: '#b4b4b4',
          5: '#d9d9d9',
        },
        white: '#FFFFFF',
      },
      icon: {
        padding: '2px',
        size: {
          regular: '12px',
          large: '20px',
        },
      },
      fontSize: {
        'heading-1': ['36px', { lineHeight: '60px' }],
        'heading-2': ['28px', { lineHeight: '40px' }],
        'heading-3': ['20px', { lineHeight: '28px' }],
        text: ['16px', { lineHeight: '24px' }],
        subtext: ['14px', { lineHeight: '20px' }],
        support: ['12px', { lineHeight: '16px' }],
        label: ['10px', { lineHeight: '16px' }],
        'icon-regular': '16px',
        'icon-large': '24px',
        'icon-xlarge': '32px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      inset: {
        tooltip: 'calc(50% - 0.5rem)',
      },
      margin: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
      },
      maxWidth: {
        large: '1400px',
        medium: '1024px',
        small: '640px',
      },
      screens: {
        large: { max: '1400px' },
        medium: { max: '1024px' },
        small: { max: '640px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1400px',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
      },
      transitionProperty: {
        top: 'top',
      },
      height: {
        main: 'calc(100% - 5rem)',
        mainSmall: 'calc(100% - 3rem)',
        modalDesktop: '700px',
        navbar: '72px',
      },
      maxHeight: {
        modalDesktop: '700px',
      },
      width: {
        cardMobile: 'calc(100% + 2rem)',
        fixed300: '300px',
        modalDesktop: '803px',
      },
      zIndex: {
        tooltip: '-1',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-25%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.2s',
      },
    },
  },
  plugins: [],
}
