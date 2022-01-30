import { Module } from '@nestjs/common';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { AuthenticationModule } from './authentication.module';
import { UserModule } from './user.module';
import { TimesheetModule } from './timesheet.module';
import { EmployeesModule } from './employees.module';

@Module({
    imports: [
        TypeGraphQLModule.forRoot({
            emitSchemaFile: true,
            validate: true,
            debug: Boolean(process.env.DEBUG_PLAYGROUND_ENABLED),
            introspection: Boolean(process.env.DEBUG_PLAYGROUND_ENABLED),
        }),
        AuthenticationModule,
        UserModule,
        TimesheetModule,
        EmployeesModule,
    ],
})
export class AppModule {}
