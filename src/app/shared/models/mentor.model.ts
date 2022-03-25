export class Mentor {
    id?: number;
    fname: string;
    lname: string;
    email: string;
    mobile: string;
    gender: number;
    empdate: string;
    dept: number;
    designation: number;

    constructor(
        fname: string,
        lname: string,
        email: string,
        mobile: string,
        gender: number,
        empdate: string,
        dept: number,
        designation: number,
        id?: number,
    ) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.mobile = mobile;
        this.gender = gender;
        this.empdate = empdate;
        this.dept = dept;
        this.designation = designation;
    }

    public get name() {
        return this.fname + this.lname;
    }
}

// app/core/course.model.ts
import { Injectable } from "@angular/core";
import { Adapter } from "./adapter.interface";

@Injectable({
    providedIn: "root",
})
export class MentorAdapter implements Adapter<Mentor> {
    adapt(item: any): Mentor {
        return new Mentor(
            item.fname,
            item.lname,
            item.email,
            item.mobile,
            item.gender,
            item.empdate,
            item.dept,
            item.designation,
            item.id,
        );
    }
}