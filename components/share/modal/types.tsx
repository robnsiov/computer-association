export default interface ModalImpl extends UseModalImpl {
  children: React.ReactNode;
}

export interface UseModalImpl {
  inProp: boolean;
  setProp(): void;
}
