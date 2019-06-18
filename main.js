import {SubjectsModel, LMSModel} from './school'

const history = new SubjectsModel({
  title: 'History',
  lessons: 24
});

// will return subjectId
console.log(history.id);

const lms = new LMSModel();
lms.remove(history);
lms.add(history);

// will return true or false. Answer will be true if we added this subject to lms
lms.verify(history);

// will return array of registered subjects
lms.readAll();
[
  {
    subjectId: null
  }
]