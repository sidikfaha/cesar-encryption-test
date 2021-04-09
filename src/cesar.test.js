const encrypt = require("./cesar")

test('Test de Séraphine', () => {
    expect(encrypt("OUI", 10)).toBe("YES")
})

test('Test de Sidik', () => {
    expect(encrypt("OUI", 10)).toBe("YES")
})