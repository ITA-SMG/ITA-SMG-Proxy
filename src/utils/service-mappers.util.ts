import {
    GetAllEmployeesSMGOutput,
    LoginSMGOutput,
    PostTimesheetSMGOutput,
    RefreshTokenSMGOutput,
    UserSMGOutput,
} from '../types/smg.types';
import {
    GetAllEmployeesOutput,
    LoginOutput,
    PostTimesheetOutput,
    RefreshTokenOutput,
    UserOutput,
} from '../types/graphql.types';

export class ServiceMappers {
    static basicClone<T, K>(from: T, to: K) {
        Object.keys(from).forEach((key) => (to[key] = from[key]));
    }

    static toLoginOutput(data: LoginSMGOutput): LoginOutput {
        const output = new LoginOutput();

        ServiceMappers.basicClone(data, output);
        output.token = data.data?.authorizationToken;
        output.refreshToken = data.data?.refreshToken;

        return output;
    }

    static toRefreshTokenOutput(data: RefreshTokenSMGOutput): RefreshTokenOutput {
        const output = new RefreshTokenOutput();

        ServiceMappers.basicClone(data, output);
        output.token = data.data?.authorizationToken;
        output.refreshToken = data.data?.refreshToken;

        return output;
    }

    static toUserOutput(data: UserSMGOutput): UserOutput {
        const output = new UserOutput();

        ServiceMappers.basicClone(data, output);
        output.user = data.data.user;

        return output;
    }

    static toPostTimesheetOutput(data: PostTimesheetSMGOutput): PostTimesheetOutput {
        const output = new PostTimesheetOutput();

        ServiceMappers.basicClone(data, output);

        return output;
    }

    static toProxyAllEmployees(data: GetAllEmployeesSMGOutput): GetAllEmployeesOutput {
        const output = new GetAllEmployeesOutput();

        ServiceMappers.basicClone(data, output);
        output.users = data.data.users;

        return output;
    }
}
