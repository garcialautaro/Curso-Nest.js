

export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongoDB: process.env.MONGODB_CS,
    port: +process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 20
})