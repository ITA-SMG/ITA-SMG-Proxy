import {
    GetAllEmployeesOutput,
    LoginInput,
    LoginOutput,
    PostTimesheetOutput,
    RefreshTokenOutput,
    UserOutput,
} from './graphql.types';
import {
    LoginSMGOutput,
    UserSMGOutput,
    PostTimesheetSMGOutput,
    GetAllEmployeesSMGOutput,
    AuthenticationData,
    RefreshTokenSMGOutput,
} from './smg.types';

export interface AuthenticationService {
    login(data: LoginInput): Promise<LoginOutput>;
    refreshToken(data: AuthenticationData): Promise<RefreshTokenOutput>;
}

export interface AuthenticationSMGService {
    login(data: LoginInput): Promise<LoginSMGOutput>;
    refreshToken(data: AuthenticationData): Promise<RefreshTokenSMGOutput>;
}

export interface UserService {
    getCurrentUser(): Promise<UserOutput>;
}

export interface UserSMGService {
    getCurrentUser(): Promise<UserSMGOutput>;
}

export interface TimesheetService {
    postTimesheet(): Promise<PostTimesheetOutput>;
}

export interface TimesheetSMGService {
    postTimesheet(): Promise<PostTimesheetSMGOutput>;
}

export interface EmployeesService {
    getAllEmployees(): Promise<GetAllEmployeesOutput>;
}

export interface EmployeesSMGService {
    getAllEmployees(): Promise<GetAllEmployeesSMGOutput>;
}
