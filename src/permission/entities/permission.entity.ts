import Profile from "src/profile/entities/profile.entity";

export class Permission {
  namespace: string;
  profileId: number;
  profile: Profile;

  constructor(profile: Profile, namespace: string) {
    this.profile = profile;
    this.profileId = profile.id;
    this.namespace = namespace;
  }
}
