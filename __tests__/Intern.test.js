const Intern = require('../lib/Intern');

// Since an object can change data content this test just confirm an object was created regardless of what data is in it
test('Can we create a new Intern instance', ()=>{
    expect(typeof(new Intern())).toBe('object');
});

test('Does the first position of the new Intern save a name', ()=>{
    const name = "Israel"
    const emp = new Intern(name)
    expect(emp.name).toBe(name);
});

test('Does the second position of the new Intern save and id', ()=>{
    const id = "24"
    const emp = new Intern('test', id)
    expect(emp.id).toBe(id);
});

test('Does the third position of the new Intern save and email', ()=>{
    const email = "israelm.riosjr@gmail.com"
    const emp = new Intern('test', 'test', email)
    expect(emp.email).toBe(email);
});