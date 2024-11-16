import { IUser } from "types/IUser";

export type TUseGetAllUsersResponse = IUser[];
export type TUserGetAllUsersRequest = void;

export type TUseGetUserByIdResponse = IUser;
export interface IUserGetUserByIdRequest {
  id: string;
}

export type TUpdateUserResponse = IUser;
export interface IUpdateUserRequest extends IUser {
  id: number;
}

export type TDeleteUserResponse = void;
export interface IDeleteUserRequest {
  id: string;
}
