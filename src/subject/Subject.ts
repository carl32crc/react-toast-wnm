type Observer = (data: any) => void;

export class Subject {
  observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(
      (observerToRemove) => observerToRemove !== observer
    );
  }

  publish(data: any): void {
    if (this.observers.length > 0) {
      this.observers.forEach((fn) => fn(data));
    }
  }
}
