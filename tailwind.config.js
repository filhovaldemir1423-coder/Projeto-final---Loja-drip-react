export default {
    content: [
         "./index.html ",
         "./src/**/*.[js,jsx,ts,tsx] ",
    ],
    
    theme: {
        extend: {
            fontFamily: {
                sans: ['inter', 'sans-serif'],
            },
            colors: {
                primary: '#C71585',
                'dar-gray-2': '#A9A9A9',
            },
        },
    },
    plugins: [],
}