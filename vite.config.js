const { resolve } = require('path')
export default {
    alias: {
        '/@/': resolve(__dirname, 'src'),
        '/@public/': resolve(__dirname, 'public')
    }
}