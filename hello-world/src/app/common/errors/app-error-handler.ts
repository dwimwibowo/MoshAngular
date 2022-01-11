import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('An unexpected error occurred.');
        console.error('Error from global error handler', error);
    }
}