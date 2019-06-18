export class SubjectsModel {
  constructor(subject) {
    if (typeof subject == "object" && typeof subject.title == "string" && typeof subject.lessons == "number") {
      this.id = new Date().getUTCMilliseconds();
      this.title = subject.title;
      this.lessons = subject.lessons;
      if (subject.description && typeof subject.description == "string") {
        this.description = subject.description
      }
    }
    else {
      throw new Error('Incorrect data')
    }
  }
}
