import { Subject } from './../models/subject';

export class SubjectHelper {

    constructor(){
    }

    public static list(subjects: Subject[], day?: string): Subject[] {
        let newSubjects: Subject[] = [];

        for (let i in subjects) {
            let subject: Subject = subjects[i]
            for (let h in subject.horarios) {
                let time = subject.horarios[h];
                if (day == null) {
                    newSubjects.push(this.subject(subject, time));
                } else if (time.startsWith(day)) {
                    newSubjects.push(this.subject(subject, time));
                }
            }
        }

        return newSubjects;
    }

    public static nextTwo(subjects: Subject[]): Subject[] {
        let newSubjects: Subject[] = [];
        let day = new Date().getDay() + 1;
        day = day > 7 ? 2 : day;

        for (let i in subjects) {
            let subject: Subject = subjects[i]
            for (let h in subject.horarios) {
                let time = subject.horarios[h];
                if (newSubjects.length == 2) {
                    return newSubjects
                }
                newSubjects.push(this.subject(subject, time));
            }
        }

        return newSubjects;
    }

    private static subject(subject: Subject, time: string): Subject {
        subject.horarios = [time];
        return subject;                
    }

}