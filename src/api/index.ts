import http from './http';

// 获取指定状态的任务信息
export const getTaskList = (state = 0) => {
    console.log('索引', state)
    return http.get('/getTaskList', {
        params: {
            state
        }
    });
};

// 新增任务
export const addTask = (task: any, time: any) => {
    return http.post('/addTask', {
        task,
        time
    });
};

// 删除任务
export const removeTask = (id: any) => {
    return http.get('/removeTask', {
        params: {
            id
        }
    });
};

// 完成任务
export const completeTask = (id: any) => {
    return http.get('/completeTask', {
        params: {
            id
        }
    });
};
