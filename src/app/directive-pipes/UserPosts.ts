import { Post } from "./Post";
import { posts } from "./postsData";
import { User } from "./User";

export class UserPosts implements User {
    uid: number;
    name: string;
    uname: string;
    email: string;
    website: string;
    posts: Post[];

    constructor(uid: number, name: string, uname: string, email: string, website: string) {
        this.uid = uid;
        this.name = name;
        this.uname = uname;
        this.email = email;
        this.website = website;
        this.posts = [{userId:1, id: 1, title:"", body:""}];
    }

    public getUserPosts(posts:Post[]):void {
        console.log("getting posts...");
        this.posts = posts.filter((post) => this.uid == post.userId);
    }
}