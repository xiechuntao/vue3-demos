// 接口地址
export const PORTS = {
    // Node Native
    NativePort: 'http://127.0.0.1:2000/',
    // Express Frame
    ExpressPort: 'http://127.0.0.1:3000/'
};
export const MAP = {
    BaiduCenter: [],
    GaodeCenter: []
}

// console.error(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') { } else if (process.env.NODE_ENV === "production") { }