export default interface PageLoadingStore {
  loading: boolean;
  pathname?: string;
  set: (loading: boolean, pathname?: string) => void;
}
