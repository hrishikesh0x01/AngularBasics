import { Post } from "./Post";
import { User } from "./User";

export class UserPosts implements User {
    uid: number;
    name: string;
    uname: string;
    email: string;
    website: string;

    constructor(uid: number, name: string, uname: string, email: string, website: string) {
        this.uid = uid;
        this.name = name;
        this.uname = uname;
        this.email = email;
        this.website = website;
    }

    public getUserPosts?(posts:Post[]):Post[] {
        let filtered:Post[];
        filtered = posts.filter((post) => this.uid == post.userId);
        return filtered;
    }
}