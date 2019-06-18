export class LMSModel {
    constructor() {
        this.subjects = new Map();
    }
    add(subject) {
        if (typeof subject == "object") {
            this.subjects.set(subject.id, subject)
        } else {
            throw new Error("It shoulde be object")
        }
    }


    remove(subject) {
        if (this.subjects.has(subject.id)) {
            this.subjects.delete(subject.id);
        } else {
            throw new Error('Cant find this subject');
        }
    }


    verify(subject) {
        if (this.subjects.has(subject.id)) {
            return true;
        }
        else {
            return false;
        }
    }
}
