export default class UnprocessableEntityError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 422;
  }
}