import {
  TGetAuthUserRequest,
  TGetAuthUserResponse,
  TSignInRequest,
  TSignInResponse,
  TSignOutRequest,
  TSignOutResponse,
  TSignUpRequest,
  TSignUpResponse,
} from "./types";
import { rtkApi } from "../rtk-api";

const authApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<TSignUpResponse, TSignUpRequest>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    signIn: build.mutation<TSignInResponse, TSignInRequest>({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    signOut: build.mutation<TSignOutResponse, TSignOutRequest>({
      query: () => ({ url: "/auth/sign-out", method: "POST" }),
      invalidatesTags: ["Auth"],
      onQueryStarted(_args, { dispatch, queryFulfilled }) {
        queryFulfilled.then(() => {
          dispatch(authApi.util.resetApiState());
        });
      },
    }),

    getAuthUser: build.query<TGetAuthUserResponse, TGetAuthUserRequest>({
      query: () => ({ url: "/auth/session" }),
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useGetAuthUserQuery,
} = authApi;
