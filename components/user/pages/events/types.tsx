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

export type EventsImpl = Array<{
  image: string;
  is_active: string;
  slug: string;
  title: string;
  id: number;
}>;
