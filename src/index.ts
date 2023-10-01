import { $query, $update,Result } from 'azle';

// This is a global variable that is stored on the heap
let message: string = '';

// Query calls complete quickly because they do not go through consensus
$query;
export function getMessage(): string {
    try {
        return message;
    } catch (error) {
        console.error(error);
        return 'Null';
    }
}

// Update calls take a few seconds to complete
// This is because they persist state changes and go through consensus
$update;
export function setMessage(newMessage: string): boolean {
    if (!newMessage) {
        throw Result.Err ("Invalid message!")
    }
    try {
        message = newMessage; // This change will be persisted
        return true;
    } catch (error) {
        // Handle the error here, e.g. log it or display a user-friendly message
        return false;
    }
}

