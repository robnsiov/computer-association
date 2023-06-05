type UserStatus = "AUTHENTICATED" | "ANONYMOUS" | "UNKNOWW";

export default interface UserStore {
  // status default: UNKNOWW
  // UNKNOWW : Requesting to server and token validation
  status?: UserStatus;
  setStatus: () => void;
  manualSetStatus: (status: UserStatus) => void;
}
