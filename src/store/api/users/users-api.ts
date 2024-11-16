import {
  TUserGetAllUsersRequest,
  IUserGetUserByIdRequest,
  TUseGetAllUsersResponse,
  TUseGetUserByIdResponse,
  TUpdateUserResponse,
  IUpdateUserRequest,
  TDeleteUserResponse,
  IDeleteUserRequest,
} from "./types";
import { rtkApi } from "../rtk-api";

const usersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<TUseGetAllUsersResponse, TUserGetAllUsersRequest>({
      query: () => "users",
      providesTags: ["Users"],
    }),

    getUserById: build.query<TUseGetUserByIdResponse, IUserGetUserByIdRequest>({
      query: (body) => `users/${body.id}`,
      providesTags: ["Users"],
    }),

    updateUser: build.mutation<TUpdateUserResponse, IUpdateUserRequest>({
      query: (body) => ({
        url: `users/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    deleteUser: build.mutation<TDeleteUserResponse, IDeleteUserRequest>({
      query: (body) => ({
        url: `users/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
