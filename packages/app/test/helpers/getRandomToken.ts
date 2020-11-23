import faker from 'faker';

export function getRandomToken(): string {
    return faker.internet.password(155);
}
