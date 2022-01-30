import { Module } from '@nestjs/common';
import { HttpClientImpl } from '../utils/http-client.util';
import { TimesheetServiceImpl } from '../services/proxy/timesheet.service';
import { TimesheetSMGServiceImpl } from '../services/smg/timesheet.service';
import { TimesheetResolverImpl } from '../resolvers/timesheet.resolver';

@Module({
    imports: [],
    providers: [
        {
            provide: 'TimesheetService',
            useClass: TimesheetServiceImpl,
        },
        {
            provide: 'TimesheetSMGService',
            useClass: TimesheetSMGServiceImpl,
        },
        {
            provide: 'HttpClient',
            useClass: HttpClientImpl,
        },
        TimesheetResolverImpl,
    ],
    exports: [],
})
export class TimesheetModule {}
