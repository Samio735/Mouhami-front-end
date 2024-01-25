// survey type that has a name and a id

export type Booking = {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  date: string;
  time: string;
  lawyer_id: string;
  client_id: string;
  title?: string;
  speciality?: string;
  rating?: number;
  comment?: string;
};
export type AccountType = "client" | "lawyer";

export type Lawyer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  wilaya: string;
  lng?: number;
  lat?: number;
  languages: string[];
  specialities: string[];
  rating?: number;
  reviews?: Review[];
};

export type Review = {
  id: number;
  reviewer: User;
  reviewerName: string;
  rating: number;
  comment: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  photo?: string;
};
