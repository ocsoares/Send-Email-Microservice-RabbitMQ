export interface IUserPayload {
    readonly sub: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly iat?: string;
    readonly exp?: number;
}
