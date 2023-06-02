export interface UserEditFormValues {
  full_name: string;
  student_number: string;
  image?: string;
}

export interface UserDetail extends UserEditFormValues {}
