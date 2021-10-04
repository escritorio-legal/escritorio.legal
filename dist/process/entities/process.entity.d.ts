import User from '../../user/entities/user.entity';
export default class Process {
    name: string;
    customer: User;
    status: string | undefined;
    constructor(name: string, customer: User);
}
