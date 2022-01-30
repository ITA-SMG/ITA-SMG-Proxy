import { AuthenticationError, UserError } from './errors.types';
import { StatusWrapper } from './common.types';

export type AuthenticationData = {
    authorizationToken?: string;
    refreshToken?: string;
};

export type SMGUser = {
    placeholder?: string;
};

export type PartialSMGUser = {
    placeholder?: string;
};

export type UserData = {
    user: SMGUser;
};

export type PartialUserData = {
    users: PartialSMGUser[];
};

export type LoginSMGOutput = StatusWrapper<number, AuthenticationError> & {
    data?: AuthenticationData;
};

export type RefreshTokenSMGOutput = StatusWrapper<number, AuthenticationError> & {
    data?: AuthenticationData;
};

export type UserSMGOutput = StatusWrapper<number, UserError> & {
    data?: UserData;
};

export type PostTimesheetSMGOutput = StatusWrapper<number, string>;

export type GetAllEmployeesSMGOutput = StatusWrapper<number, string> & {
    data: PartialUserData;
};
