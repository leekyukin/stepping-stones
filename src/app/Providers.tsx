"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default Providers;
