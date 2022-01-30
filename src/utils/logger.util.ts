export class Logger {
    static log = (data: unknown) => {
        console.log(data);
    };

    static error = (error: Error) => {
        console.error(error);
    };
}
