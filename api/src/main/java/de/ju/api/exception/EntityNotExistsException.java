package de.ju.api.exception;

public class EntityNotExistsException extends RuntimeException {
    public EntityNotExistsException() {
        super();
    }

    public EntityNotExistsException(String message) {
        super(message);
    }

    public EntityNotExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public EntityNotExistsException(Throwable cause) {
        super(cause);
    }
}
