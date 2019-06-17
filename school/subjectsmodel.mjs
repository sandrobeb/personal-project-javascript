class SubjectsModel {
  constructor() {
    this.subject = new Map();
    this.title = this.subject.set(this.title)
  }

  id() {
    let id = new Date().getUTCMilliseconds();
    return id;
  }

}

const history = new SubjectsModel({
  title: 'History',
  lessons: 24
});

console.log(history);