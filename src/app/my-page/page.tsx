"use client";

import { signOut, useSession } from "next-auth/react";
import { RiLogoutBoxFill } from "react-icons/ri";

const MyPagePage = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-40">
      {session?.user.name}
      <button onClick={() => signOut()}>logout</button>
    </div>
  );
};

export default MyPagePage;
