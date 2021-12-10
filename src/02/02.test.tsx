import {addSkills, doesStudentLiveIn, makeStudentActive, StudentType} from "./02";

let student: StudentType;
beforeEach(()=>{
    student = {
        id: 1,
        name: 'Roman',
        age: 26,
        isActive: false,
        address: {city: 'Gomel', streetTitle: 'Karpovicha', house: 17},
        technologies: [{id: 1, title: 'HTML'}, {id: 2, title: 'CSS'}, {id: 3, title: 'JS'}]
    }
});


test('new skill should be added to student',()=> {
    expect(student.technologies.length).toBe(3);

    addSkills(student, 'React');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('React');
    expect(student.technologies[3].id).toBeDefined();
});

test('student should be active',()=> {
    makeStudentActive(student);

    expect(student.isActive).toBe(true)
});

test('does student live in',()=> {
    const result1 = doesStudentLiveIn(student, 'Minsk');
    const result2 = doesStudentLiveIn(student, 'Gomel');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
});