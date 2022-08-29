import {ElMessage} from 'element-plus'


export class Message {

   static success(message: string){
        ElMessage.success(message)
    }

    static error(message: string){
        ElMessage.error(message)
    }

    static info(message: string){
        ElMessage.info(message)
    }

    static warn(message: string){
        ElMessage.warning(message)
    }
}
