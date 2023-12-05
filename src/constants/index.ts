// Strings
import { words } from "@/strings";

export const enum EStatusCodes {
  // Successfull
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  // Redirection
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  // Client Error
  BAD_REQUEST = 400,
  UNTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  // Server Error
  INTERNAL_SERVER_ERROR = 500,
}

export const Rules = {
  required: {
    value: true,
    message: words.thisFieldIsRequired,
  },
};
