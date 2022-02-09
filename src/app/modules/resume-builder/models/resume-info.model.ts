export class ResumeInfo {
    id: number;
    name: string;
    designation: string;
    email: string;
    mobileNo: string;
    technical: string[];
    experience: ExperienceInfo[];
    education: EducationInfo[];
}

class ExperienceInfo {
    companyName: string;
    jobRole: string;
    jobDescription: string;
    startYear: number;
    endYear: number;
}

class EducationInfo {
    uniName: string;
    degree: string;
    grade: number;
}