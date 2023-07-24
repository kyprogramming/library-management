import log4js from 'log4js';

const config:any = {
    appenders: {
        file:{type:'file', filename:'./logs/error.log'},
        console:{type:'console'}
    },
    categories:{
        error: {appenders:['file'] , level:'error'},
        default: {appenders:['file'] , level:'info'}
    }
}

log4js.configure(config);

export default log4js;