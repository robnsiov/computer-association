// export interface EventImpl {
//   title: string;
//   slug: string;
//   content: string;
//   date: string;
//   place: string;
//   provider: string;
//   image: string;
//   id: number;
//   expire: boolean;
// }

export default interface EventsImpl {
  journal?: boolean;
}

export type ApiEventsImpl = Array<{
  image: string;
  is_active: string;
  slug: string;
  title: string;
  id: number;
  src?: string;
}>;
