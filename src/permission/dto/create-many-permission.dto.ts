export class CreateManyPermissionDto {
    profileId: number;
    permissions: [
        { namespace: string }
    ]
}