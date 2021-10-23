const Engineer = require('../lib/Engineer');

test('Can we create a new Engineer instance', ()=>{
    expect(typeof(new Engineer())).toBe('object');
});

test('Does the first position of the new Engineer save a name', ()=>{
    const name = "Israel"
    const emp = new Engineer(name)
    expect(emp.name).toBe(name);
})

test('Does the second position of the new Engineer save and id', ()=>{
    const id = "24"
    const emp = new Engineer('test', id)
    expect(emp.id).toBe(id);
})

test('Does the third position of the new Engineer save and email', ()=>{
    const email = "israelm.riosjr@gmail.com"
    const emp = new Engineer('test', 'test', email)
    expect(emp.email).toBe(email);
})
