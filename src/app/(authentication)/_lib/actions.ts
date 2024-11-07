"use server";

import { saltAndHashPassword } from "@/lib/utils";
import { createUser, getUser } from "@/services/data-service";
import { signIn, signOut } from "./auth";
import { CredentialsSchema } from "./types";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signInWithGithub() {
  await signIn("github", { redirectTo: "/dashboard" });
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}

export async function signInWithCredentials(User: unknown) {
  const result = CredentialsSchema.safeParse(User);

  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });

    return {
      error: errorMessage,
    };
  }

  try {
    const response = await signIn("credentials", {
      redirect: false,
      callback: "/",
      email: result.data.email,
      password: result.data.password,
    });

    if (response?.error) {
      throw new Error(response.error.message);
    }

    return { data: response };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function registerWithCredentials(User: unknown) {
  const result = CredentialsSchema.safeParse(User);

  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });

    return {
      error: errorMessage,
    };
  }

  const user = await getUser(result.data.email);

  if (user) {
    return {
      error: "User already exists",
    };
  }

  const pwHash = saltAndHashPassword(result.data.password);

  const newUser = {
    email: result.data.email,
    password: pwHash,
  };

  try {
    const response = await createUser(newUser);
    return { data: response };
  } catch (error) {
    return { error: (error as Error).message };
  }
}
