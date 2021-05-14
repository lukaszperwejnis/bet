export class LocalStorageMock {
  store: Record<string, string> = {};

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string {
    return this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  get length(): number {
    return Object.keys(this.store).length;
  }

  key(index: number): string {
    return Object.values(this.store)[index];
  }
}
