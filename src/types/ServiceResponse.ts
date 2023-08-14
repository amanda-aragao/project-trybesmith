export type ServiceResponseError = {
  status: number,
  data: {
    message: string
  }
};

export type ServiceResponseSuccess<Token> = {
  status: number,
  data: Token
};

export type ServiceResponse<Token> = ServiceResponseSuccess<Token> | ServiceResponseError;