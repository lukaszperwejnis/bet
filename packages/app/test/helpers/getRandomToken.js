import faker from 'faker';
export function getRandomToken() {
    return faker.internet.password(155);
}
