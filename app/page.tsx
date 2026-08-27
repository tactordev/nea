"use client";
import Input from "./_components/input";
import InputButton from "./_components/button";
import {
  CircleUser,
  User,
  LockKeyhole,
  LoaderCircle
} from "lucide-react";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

async function login(prev: unknown, data: FormData) {
  const username = data.get("username");
  const pwd = data.get("password");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Logged in successfully."
  };
}

export default function Home() {
  const [state, action, isPending] = useActionState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/app");
    }
  }, [state, router]);

  return (
    <main className="flex flex-col w-full h-full items-center justify-center">
      <div className="px-4 py-4 bg-zinc-200/5 rounded-md">
        <div className="flex flex-row gap-2 items-center mb-3">
          <CircleUser className="text-zinc-200/80 w-6 h-6" />
          <h1 className="text-2xl font-semibold text-zinc-200/80">Login</h1>
        </div>
        <form action={action} className="flex flex-col w-full h-full gap-2">
          <Input disabled={isPending} name="username" placeholder="Username">
            <User className="w-6 h-6 text-zinc-200/40" />
            <p className="text-base text-zinc-200/40">Username</p>
          </Input>
          <Input disabled={isPending} name="password" placeholder="Password">
            <LockKeyhole className="w-5 h-5 text-zinc-200/40" />
            <p className="text-base text-zinc-200/40">Password</p>
          </Input>
          <InputButton className={`flex flex-row h-8 gap-2 justify-center items-center ${isPending ? "opacity-60" : ""}`}>
            { isPending ? <LoaderCircle className="w-4 h-4 text-zinc-300/80 animate-spin" />
              : <p className="text-sm text-zinc-300/60">Login</p>
            }
          </InputButton>
        </form>
      </div>
    </main>
  );
}
