import { IUser } from "types/IUser";

export type TSignUpResponse = IUser;
export type TSignUpRequest = Omit<IUser, "id">;

export type TSignInResponse = IUser;
export type TSignInRequest = Omit<IUser, "id">;

export type TSignOutResponse = void;
export type TSignOutRequest = void;

export type TGetAuthUserResponse = IUser;
export type TGetAuthUserRequest = void;
