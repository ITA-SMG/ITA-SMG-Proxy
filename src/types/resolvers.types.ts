import {
    GetAllEmployeesOutput,
    LoginInput,
    LoginOutput,
    PostTimesheetOutput,
    RefreshTokenInput,
    RefreshTokenOutput,
    UserOutput,
} from './graphql.types';

export interface AuthenticationResolver {
    login(data: LoginInput): Promise<LoginOutput>;
    refreshToken(token: string | null, data: RefreshTokenInput): Promise<RefreshTokenOutput>;
}

export interface UserResolver {
    getCurrentUser(): Promise<UserOutput>;
}

export interface TimesheetResolver {
    postTimesheet(): Promise<PostTimesheetOutput>;
}

export interface EmployeesResolver {
    getAllEmployees(): Promise<GetAllEmployeesOutput>;
}
