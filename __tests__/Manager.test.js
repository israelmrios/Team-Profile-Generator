const Manager = require('../lib/Manager');

// Since an object can change data content this test just confirm an object was created regardless of what data is in it
test('Can we create a new Manager instance', ()=>{
    expect(typeof(new Manager())).toBe('object');
});

test('Does the first position of the new Manager save a name', ()=>{
    const name = "Israel"
    const emp = new Manager(name)
    expect(emp.name).toBe(name);
});

test('Does the second position of the new Manager save and id', ()=>{
    const id = "24"
    const emp = new Manager('test', id)
    expect(emp.id).toBe(id);
});

test('Does the third position of the new Manager save and email', ()=>{
    const email = "israelm.riosjr@gmail.com"
    const emp = new Manager('test', 'test', email)
    expect(emp.email).toBe(email);
});