import { apiSlice } from "./ApiSlice";

const AuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyCode: builder.mutation({
      query: (credentials) => ({
        url: "/verify-code",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyEmail: builder.query({
      query: (token) => ({
        url: `/verfiy-email?token=${token}`,
      }),
    }),
    request_pasword: builder.mutation({
      query: (data) => ({
        url: "/forget-password",
        method: "POST",
        body: data,
      }),
    }),
    reset_password: builder.mutation({
      query: (data) => ({
        url: `/reset-password/${data.token}`,
        method: "POST",
<<<<<<< HEAD
        body: data,
      }),
    }),
  }),
=======
        body: data
      })
    })
  })
>>>>>>> 5e9c5368254cec75402d7190a1e6663536800cf7
});

export const {
  useLoginMutation,
  useVerifyCodeMutation,
  useRegisterMutation,
  useVerifyEmailQuery,
  useRequest_paswordMutation,
  useReset_passwordMutation,
} = AuthApiSlice;
export default AuthApiSlice;