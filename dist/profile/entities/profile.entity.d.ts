import LawFirm from '../../lawfirm/entities/lawfirm.entity';
export default class Profile {
    name: string;
    lawFirm: LawFirm;
    constructor(name: string, lawFirm: LawFirm);
}
